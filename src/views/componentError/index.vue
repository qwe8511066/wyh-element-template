<template>
  <h1>动态 {{componetError}} 组件异常(默认组件,省的老报错)</h1>
</template>

<script>
export default {
  name: 'componentError',
  components: {},
  data() {
    return {
      componetError: this.$route.meta.componetError,
    }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
