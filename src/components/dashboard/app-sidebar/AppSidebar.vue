<template>
  <nav class="app-navigation">
    <NavigationLink :to="{ name: 'dashboard' }" name="APP NAME"/>
    <NavigationLink :to="{ name: 'about-subject' }" name="Про Предмет"/>
    <NavigationLink :to="{ name: 'about-programs' }" name="Про Програми"/>
    <NavigationLink :to="{name: 'education-materials'}" name="Лекції та лабораторні роботи"/>
  </nav>
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
    width: 250px;
    background-color: #202020;
    box-shadow: 4px 7px 10px rgba(0, 0, 0, .4);
  }

</style>
