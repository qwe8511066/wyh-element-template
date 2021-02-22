<template>
  <div class="drawer-container">
    <h3>风格设置</h3>
    <el-form ref="form" label-width="auto" class="myForm autoForm">
      <el-form-item label="固定 Header">
        <el-switch v-model="fixedHeader" class="drawer-switch" />
      </el-form-item>

      <el-form-item label="顶部tabs">
        <el-switch v-model="tagsView" class="drawer-switch" />
      </el-form-item>
      <el-form-item label="菜单头">
        <el-switch v-model="sidebarLogo" class="drawer-switch" />
      </el-form-item>
      <el-form-item label="导航模式">
        <el-radio-group v-model="position" size="mini">
          <el-radio-button label="left">侧边菜单布局</el-radio-button>
          <el-radio-button label="top">顶部菜单布局</el-radio-button>
          <el-radio-button label="topApplication">顶部菜单应用布局</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { checkArrayString } from '@/utils'
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    position: {
      get() {
        return this.$store.state.menu.position
      },
      set(val) {
        this.$store.dispatch('menu/setPosition', val)
        this.$store.dispatch(
          'menu/setActiveRoute',
          checkArrayString(
            this.$store.state.menu.menuModule,
            'meta.title',
            this.$route.meta.fatherNmae
          )
        )
      },
    },
    fixedHeader: {
      get() {
        return this.$store.state.settings.fixedHeader
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'fixedHeader',
          value: val,
        })
      },
    },
    tagsView: {
      get() {
        return this.$store.state.settings.tagsView
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'tagsView',
          value: val,
        })
      },
    },
    sidebarLogo: {
      get() {
        return this.$store.state.settings.sidebarLogo
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'sidebarLogo',
          value: val,
        })
      },
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
  }
}
</style>
