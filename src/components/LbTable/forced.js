import { getMultistage, checkArray } from "@/utils/index"
import moment from "moment";
export default {
  img: {
    renderHeader: (h, scope) => {
      return <span>{scope.column.label || ''}</span>
    },
    renderCell: (h, scope) => {
      const myColumn = scope._self.column
      const dateType = checkArrayStringObject(myColumn, 'imgWidth')
      const imgWidth = dateType ? myColumn[dateType.index].imgWidth : '50px';
      let value = getMultistage(scope.row, scope.column.property);
      value = value && typeof (value) == 'object' ? '' : value;
      return <el-image src={value} style={'width:' + imgWidth} fit="cover" preview-src-list={[value]}>

        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>

      </el-image>
    },
    sortable: false
  },
  radio: {
    renderHeader: (h, scope) => {
      return <span>{scope.column.label || ''}</span>
    },
    renderCell: (h, scope) => {
      const myColumn = scope._self.column
      const radioType = checkArrayStringObject(myColumn, 'radioType')
      const radioValue = checkArrayStringObject(myColumn, 'radioValue')
      return <el-radio
        value={radioValue && radioValue.value ? radioValue.value : null}
        label={getMultistage(scope.row, radioType.value)}
        class="noLabel"
      ></el-radio>
    },
    sortable: false
  },
  enum: {
    renderHeader: (h, scope) => {
      return <span>{scope.column.label || ''}</span>
    },
    renderCell: (h, scope) => {
      const myColumn = scope._self.column
      const dateType = checkArrayStringObject(myColumn, 'enumValue')
      const enumValue = dateType ? myColumn[dateType.index].enumValue : null;

      let value = getMultistage(scope.row, scope.column.property);
      value = value && typeof (value) == 'object' ? '' : value;

      const text = enumValue[value] ? enumValue[value] : null

      if (!text) {
        throw new Error('enumValue错误,请检查' + JSON.stringify(enumValue) + '是否于当前的值匹配');
      }

      return text ? <span style={"color:" + enumValue[value].color} >
        {enumValue[value].text}
      </span> : <span></span>
    },
    sortable: false
  },
  buttons: {
    renderHeader: (h, scope) => {
      return <span>{scope.column.label || ''}</span>
    },
    renderCell: (h, scope) => {
      const myColumn = scope._self.column
      const dateType = checkArrayStringObject(myColumn, 'buttons')
      const buttons = dateType ? myColumn[dateType.index].buttons : [];
      return buttons.map((item, index) => {
        const newType = item.iif ? item.iif(scope) : true

        if (checkArray(item.children)) {
          return <el-dropdown class="pointer" trigger={item.trigger ? item.trigger : 'hover'} onCommand={(e) => {
            if (item.click) {
              item.click(e, scope)
            }
          }}>
            <span class="el-dropdown-link">
              {item.text}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              {item.children.map(box => {
                const childrenType = box.iif ? box.iif(scope) : true
                return childrenType ? <el-dropdown-item icon={box.icon} command={box.text}>{box.text}</el-dropdown-item> : ''
              })}
            </el-dropdown-menu>
          </el-dropdown>
        }
        return newType ? <el-button type={item.type ? item.type : 'text'} onClick={(e) => {
          e.stopPropagation()
          if (item.click) {
            item.click(scope, e)
          }
        }}
          icon={item.icon}>
          {item.text}
        </el-button> : ''
      })
    },
    sortable: false
  },
  selection: {
    renderHeader: (h, { store }) => {
      return (
        <el-checkbox
          disabled={store.states.data && store.states.data.length === 0}
          indeterminate={
            store.states.selection.length > 0 && !store.states.isAllSelected
          }
          nativeOn-click={store.toggleAllSelection}
          value={store.states.isAllSelected}
        />
      )
    },
    renderCell: (h, { row, column, store, $index }) => {
      return (
        <el-checkbox
          nativeOn-click={event => event.stopPropagation()}
          value={store.isSelected(row)}
          disabled={
            column.selectable
              ? !column.selectable.call(null, row, $index)
              : false
          }
          on-input={() => {
            store.commit('rowSelectedChanged', row)
          }}
        />
      )
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader: (h, scope) => {
      return <span>{scope.column.label || '#'}</span>
    },
    renderCell: (h, { $index, column }) => {
      let i = $index + 1
      const index = column.index

      if (typeof index === 'number') {
        i = $index + index
      } else if (typeof index === 'function') {
        i = index($index)
      }

      return <div>{i}</div>
    },
    sortable: false
  },

  boolean: {
    renderHeader: (h, scope) => {
      return <span>{scope.column.label || ''}</span>
    },
    renderCell: (h, scope) => {
      let value = getMultistage(scope.row, scope.column.property);
      value = value && typeof (value) == 'object' ? '' : value;
      return <div>
        <el-tag type={value ? 'success' : 'danger'}>
          {value ? '是' : '否'}
        </el-tag>
      </div>
    },
    sortable: false
  },
  date: {
    renderHeader: (h, scope) => {
      return <span>{scope.column.label || ''}</span>
    },
    renderCell: (h, scope) => {
      const myColumn = scope._self.column
      const dateType = checkArrayStringObject(myColumn, 'dateType')
      const index = dateType ? myColumn[dateType.index] : null;
      let value = getMultistage(scope.row, scope.column.property);
      value = value && typeof (value) == 'object' ? '' : value;
      return <div><span>{value ? moment(value).format(index && index.dateType ? index.dateType : 'YYYY-MM-DD') : ''}</span></div>
    },
    sortable: false
  },
  expand: {
    renderHeader: (h, scope) => {
      return <span>{scope.column.label || ''}</span>
    },
    renderCell: (h, { row, store }, proxy) => {
      const expanded = store.states.expandRows.indexOf(row) > -1
      return (
        <div
          class={
            'el-table__expand-icon ' +
            (expanded ? 'el-table__expand-icon--expanded' : '')
          }
          on-click={e => proxy.handleExpandClick(row, e)}
        >
          <i class='el-icon el-icon-arrow-right' />
        </div>
      )
    },
    sortable: false,
    resizable: false,
    className: 'el-table__expand-column'
  }
}


export function checkArrayStringObject(array, typeString) {
  let type = null;
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][typeString]) {
        type = {
          index: i,
          value: array[i][typeString],
        }
        break;
      }
    }
  } else {
    throw new Error('传入的类型错误');
  }
  return type;
}