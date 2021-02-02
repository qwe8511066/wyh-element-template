<template>
  <div id="app" v-loading.fullscreen.lock="initLoading" element-loading-text="拼命加载中">
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState({
      initLoading: (state) => state.app.initLoading,
    }),
  },
}
</script>
