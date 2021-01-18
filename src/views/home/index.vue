<template>
  <div>
    <h1>home</h1>
    <input v-model="test" />
  </div>
</template>

<script>
export default {
  name: 'home2222',
  data() {
    return {
      test: '',
    }
  },
  created() {
    console.log('home')
  },
}
</script>

<style>
</style>