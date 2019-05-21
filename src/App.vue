<template>
  <div class="app">
    <AppSidebar class="app__sidebar"/>
    <transition name="router" mode="out-in">
      <router-view class="app__content paddings-left--sm"/>
    </transition>
  </div>
</template>

<script>
  import AppSidebar from "./components/app-sidebar/AppSidebar";

  export default {
    name: 'App',
    components: {AppSidebar}
  }
</script>

<style lang="scss" scoped>
  .app {
    display: flex;
    height: 100%;
  }

  .app__sidebar {
    flex-basis: 250px;
    flex-shrink: 0;
  }

  .app__content {
    flex-grow: 1;
    overflow-y: scroll;
  }

  // Router animations

  .router-enter-active, .router-leave-active {
    transition: opacity .3s;
  }

  .router-enter, .router-leave-to {
    opacity: 0;
  }
</style>
