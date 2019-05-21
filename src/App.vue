<template>
  <div class="app">
    <AppSidebar class="app__sidebar"/>
    <router-view class="app__content paddings-left--sm"/>
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
</style>
