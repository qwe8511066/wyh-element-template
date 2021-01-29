<template>
  <div>
    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            复杂的下拉框多选人(下拉框的唯一值和列表的唯一值
            <span style="color:red">不匹配</span>)
          </span>
        </div>
        <dialogWyhElementChooseSelect
          :checkboxAttribute="checkboxAttribute"
          type="checkbox"
          typeLabel="name"
          typeValue="id"
          listLabel="user.name"
          listValue="user.id"
          :listServe="listServe"
          :checkList="checkList"
          @close="closeFnCheckbox"
          :column="leftColumn"
          :rightColumn="rightColumn"
        ></dialogWyhElementChooseSelect>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            简单的下拉框多选人(下拉框的唯一值和列表的唯一值
            <span style="color:red">匹配</span>)
          </span>
        </div>
        <dialogWyhElementChooseSelect
          :checkboxAttribute="checkboxAttribute"
          type="checkbox"
          typeLabel="user.name"
          typeValue="user.id"
          listLabel="user.name"
          listValue="user.id"
          :listServe="listServe"
          :checkList="checkList1"
          @close="closeFnCheckbox1"
          :column="leftColumn"
          :rightColumn="rightColumn"
        ></dialogWyhElementChooseSelect>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            复杂的下拉框单选人(下拉框的唯一值和列表的唯一值
            <span style="color:red">不匹配</span>)
          </span>
        </div>
        <dialogWyhElementChooseSelect
          :checkLabel="checkLabel"
          :checkValue="checkValue"
          type="radio"
          typeLabel="name"
          typeValue="id"
          listLabel="user.name"
          listValue="user.id"
          :listServe="listServe"
          @close="closeFnRadio"
          :column="leftColumn"
          :rightColumn="rightColumn"
        ></dialogWyhElementChooseSelect>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            复杂的下拉框单选人(下拉框的唯一值和列表的唯一值
            <span style="color:red">匹配</span>)
          </span>
        </div>
        <dialogWyhElementChooseSelect
          :checkLabel="checkLabel1"
          :checkValue="checkValue1"
          type="radio"
          typeLabel="user.name"
          typeValue="user.id"
          listLabel="user.name"
          listValue="user.id"
          :listServe="listServe"
          @close="closeFnRadio1"
          :column="leftColumn"
          :rightColumn="rightColumn"
        ></dialogWyhElementChooseSelect>
      </el-card>
    </div>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
          &lt;dialogWyhElementChoose
      :checkboxAttribute=&quot;checkboxAttribute&quot;
      type=&quot;checkbox&quot;
      :listServe=&quot;listServe&quot;
      :column=&quot;leftColumn&quot;
      :rightColumn=&quot;rightColumn&quot;
    &gt;&lt;/dialogWyhElementChoose&gt; 
  data() {
    return {
      //checkbox 的判断
      checkboxAttribute: {
        //判断的属性 唯一值来判断
        type: &#x27;user.id&#x27;,

        //默认值   外部传默认值进来
        value: [],
      },
      listServe: &#x27;/getList1&#x27;,

      leftColumn: [
        {
          prop: &#x27;user.name&#x27;,
          label: &#x27;名称&#x27;,
        },
        {
          type: &#x27;date&#x27;,
          prop: &#x27;user.mtime&#x27;,
          label: &#x27;年月日&#x27;,
        },
      ],

      rightColumn: [
        {
          prop: &#x27;user.name&#x27;,
          label: &#x27;名称&#x27;,
        },
      ],
    }
  },
  </pre>
      </el-card>
    </div>
  </div>
</template>

<script>
import { selectChoiceValue } from '@/utils/index'
export default {
  name: 'dialogWyhElementChooseIndex',
  components: {},
  data() {
    return {
      checkLabel: '张三',
      checkValue: 11,

      checkLabel1: '李四',
      checkValue1: 15,
      checkList: [
        {
          name: '张三',
          id: '11',
        },
        {
          name: '李四',
          id: '12',
        },
      ],

      checkList1: [
        {
          user: {
            name: '张三',
            id: '11',
          },
        },
        {
          user: {
            name: '李四',
            id: '12',
          },
        },
      ],
      //checkbox 的判断
      checkboxAttribute: {
        //判断的属性 唯一值来判断
        type: 'user.id',

        //默认值   外部传默认值进来
        value: [],
      },
      listServe: '/getList1',

      leftColumn: [
        {
          prop: 'user.name',
          label: '名称',
        },
        {
          type: 'date',
          prop: 'user.mtime',
          label: '年月日',
        },
      ],

      rightColumn: [
        {
          prop: 'user.name',
          label: '名称',
        },
      ],
    }
  },
  methods: {
    closeFnCheckbox1(value) {
      this.checkList1 = value
      this.$message('选中了' + JSON.stringify(this.checkList1))
    },
    closeFnCheckbox(value) {
      this.checkList = value
      this.$message('选中了' + JSON.stringify(this.checkList))
    },
    closeFnRadio(value) {
      this.checkLabel = selectChoiceValue(value, 'user.name')
      this.checkValue = selectChoiceValue(value, 'user.id')
      this.$message('选中了' + this.checkLabel + '---' + this.checkValue)
    },
    closeFnRadio1(value) {
      this.checkLabel1 = selectChoiceValue(value, 'user.name')
      this.checkValue1 = selectChoiceValue(value, 'user.id')
      this.$message('选中了' + this.checkLabel1 + '---' + this.checkValue1)
    },
  },
  created() {},
}
</script>
<style scoped lang="scss">
.box-card {
  margin-bottom: 18px;
}
.myForm {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
}
</style>
