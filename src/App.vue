<template>
  <div class="app">
    <Loader/>
    <transition name="router" mode="out-in">
      <router-view class="app__page"/>
    </transition>
  </div>
</template>

<script>
  import Loader from "./components/loader/Loader";

  export default {
    name: 'App',
    components: {Loader}
  }
</script>

<style lang="scss" scoped>
  .app, .app__page {
    height: 100%;
  }
</style>
