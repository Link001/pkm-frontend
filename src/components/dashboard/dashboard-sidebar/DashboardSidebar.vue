<template>
  <nav class="app-navigation">
    <SidebarNavigationLink :to="{ name: 'dashboard' }" name="APP NAME"/>
    <SidebarNavigationLink :to="{ name: 'about-subject' }" name="Про Предмет"/>
    <SidebarNavigationLink :to="{ name: 'about-programs' }" name="Про Програми"/>
    <SidebarNavigationLink :to="{name: 'education-materials'}" name="Лекції та лабораторні роботи"/>
  </nav>
</template>

<script>
  import SidebarNavigationLink from "./SidebarNavigationLink";
  export default {
    name: "DashboardSidebar",
    components: {SidebarNavigationLink}
  }
</script>

<style lang="scss" scoped>
  .app-navigation {
    width: 250px;
    background-color: #202020;
    box-shadow: 4px 7px 10px rgba(0, 0, 0, .4);
  }

</style>
