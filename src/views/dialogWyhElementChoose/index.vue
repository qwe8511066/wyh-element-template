<template>
  <div>
    <dialogWyhElementChoose
      :checkboxAttribute="checkboxAttribute"
      type="checkbox"
      :listServe="listServe"
      :column="leftColumn"
      :rightColumn="rightColumn"
    ></dialogWyhElementChoose>

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
export default {
  name: 'dialogWyhElementChooseIndex',
  components: {},
  data() {
    return {
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
  methods: {},
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
