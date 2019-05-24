<template>
  <nav class="app-navigation">
    <SidebarNavigationLink :to="{ name: 'dashboard' }" name="ГОЛОВНА"/>
    <SidebarNavigationLink :to="{ name: 'about-subject' }" name="ПРО КУРС"/>
    <SidebarNavigationLink :to="{ name: 'about-programs' }" name="СЕРЕДОВИЩЕ РОЗРОБКИ"/>

      <v-expansion-panel class="app-navigation__items-group-wrapper" dark>
        <v-expansion-panel-content class="app-navigation__expand-item transparent">
          <template slot="header">НАВЧАЛЬНІ МАТЕРІАЛИ</template>

          <div class="paddings--xs paddings-top--none">
            <SidebarNavigationLink :to="{name: 'education-materials'}" name="ЛАБОРАТОРНІ РОБОТИ"/>
            <SidebarNavigationLink :to="{name: 'educatio'}" name="ЛЕКЦІЇ"/>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    <SidebarNavigationLink :to="{name: 'contact'}" name="КОНТАКТИ"/>
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

  .app-navigation__items-group-wrapper {
    box-shadow: none;
  }
</style>

<style lang="scss">
  .app-navigation__expand-item {
    .v-expansion-panel__header {
      padding: 10px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
