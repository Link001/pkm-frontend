<template>
  <div class="app-sidebar">
    <h1>
      <router-link to="/">APP NAME</router-link>
    </h1>
    <nav class="app-navigation">
      <AppSidebarNavigationLink :to="{ name: 'about-subject' }" name="Про Предмет"/>
      <AppSidebarNavigationLink :to="{ name: 'about-programs' }" name="Про Програми"/>
    </nav>
  </div>
</template>

<script>
  import AppSidebarNavigationLink from "./AppSidebarNavigationLink";
  export default {
    name: "AppSidebar",
    components: {AppSidebarNavigationLink}
  }
</script>

<style lang="scss" scoped>
  .app-navigation {
    background-color: #E9E9E9;
  }



  .app-navigation__link {

    &.router-link-exact-active {
      background-color: #dfdfdf;
    }
  }
</style>
