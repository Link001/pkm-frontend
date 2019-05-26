<template>
  <nav class="app-navigation">
    <SidebarNavigationLink :to="{ name: 'about-subject' }" name="ГОЛОВНА"/>

    <SidebarNavigationLink :to="{ name: 'about-programs' }" name="СЕРЕДОВИЩЕ РОЗРОБКИ"/>

    <v-expansion-panel class="app-navigation__items-group-wrapper" dark>
      <v-expansion-panel-content class="app-navigation__expand-item transparent">
        <template slot="header">НАВЧАЛЬНІ МАТЕРІАЛИ</template>

        <div class="paddings-bottom--xs">
          <SidebarNavigationLink class="paddings-left--sm" :to="{name: 'lectures'}" name="ЛЕКЦІЇ"/>

          <SidebarNavigationLink class="paddings-left--sm" :to="{name: 'labs'}" name="ЛАБОРАТОРНІ РОБОТИ"/>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <SidebarNavigationLink v-if="isTeacherMode" :to="{ name: 'labs-review' }" name="ВИКОНАНІ ЛАБОРАТОРНІ РОБОТИ"/>

    <SidebarNavigationLink :to="{name: 'contact'}" name="КОНТАКТИ"/>

    <button class="app-navigation__sign-out paddings--xs" type="button" @click="signOut">ВИЙТИ</button>
  </nav>
</template>

<script>
  import SidebarNavigationLink from "./SidebarNavigationLink";
  import {authActions} from "../../auth/auth-actions";

  export default {
    name: "DashboardSidebar",

    components: {SidebarNavigationLink},

    methods: {
      signOut() {
        this.$store.dispatch(authActions.signOut);
      }
    },

    computed: {
      isTeacherMode() {
        return this.$store.state.user.current.role.isTeacher
      }
    }
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

  .app-navigation__sign-out {
    background: none;
    border: none;
    color: #FFF;
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
