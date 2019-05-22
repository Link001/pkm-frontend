<template>
  <div class="app-sidebar">
    <h1>
      <router-link to="/">APP NAME</router-link>
    </h1>
    <nav class="app-navigation">
      <NavigationLink :to="{ name: 'about-subject' }" name="Про Предмет"/>
      <NavigationLink :to="{ name: 'about-programs' }" name="Про Програми"/>
      <NavigationLink :to="{ name: 'about-programs' }" name="Про Програми"/>
    </nav>
  </div>
</template>

<script>
  import NavigationLink from "./NavigationLink";
  export default {
    name: "AppSidebar",
    components: {NavigationLink}
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
