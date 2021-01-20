<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <!-- <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 v-else class="sidebar-title">{{ title }} </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 class="sidebar-title">{{ title }} </h1>
      </router-link>-->
      <div class="flexBox width100 height100">
        <div class="flexContent sidebarDiv">
          <img src="~public/images/img.jpg" class="sidebar-logo" />
        </div>
        <div v-if="!collapse" class="flex1 flexLeftContent">权限菜单模板</div>
      </div>

      <!-- <el-image src="/images/logo.png" fit="fill" class="width100"></el-image> -->
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.sidebarLogoFade-enter-active {
  transition: opacity 12.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}
.sidebarDiv {
  width: 54px;
}

.sidebar-logo {
  width: 32px;
  vertical-align: middle;
  margin-right: 12px;
}
.sidebar-logo-container {
  color: white;
  font-size: 20px;
  font-weight: 600;
  height: $headHeight;
  background: $headBg;
}
</style>
