<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>

    <!-- <div class="app-wrapper">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="[...cachedViews]">
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </div>-->
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 110 = navbar + tags-view = 60 + 50 */
    min-height: calc(100vh - 110px);
    padding: $mainPading;
    background: #efefef;
  }

  .fixed-header + .app-main {
    padding-top: 110px + $mainPading;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
