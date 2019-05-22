<template>
  <div class="app">
    <AppSidebar class="app__sidebar"/>
    <div class="app__content paddings-left--sm">
      <router-view class="app__page align--center"/>
      <footer>FOOTER COMPONENT HERE</footer>
    </div>
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

  .app__page {
    @media (min-width: 767px) and (max-width: 1000px) {
      max-width: 750px;
    }

    @media (min-width: 1000px) and (max-width: 1300px) {
      max-width: 900px;
    }

    @media (min-width: 1300px) {
      max-width: 1200px;
    }
  }
</style>
