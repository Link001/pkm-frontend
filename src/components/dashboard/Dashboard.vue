<template>
  <div class="dashboard">
    <DashboardSidebar class="dashboard__sidebar"/>

    <div class="dashboard__content">
      <transition name="router" mode="out-in">
        <router-view class="dashboard__page align--center paddings-left--sm paddings-right--sm full-width"/>
      </transition>

      <AppFooter class="dashboard__footer"/>
    </div>
  </div>
</template>

<script>
 import DashboardSidebar from "./dashboard-sidebar/DashboardSidebar";
 import AppFooter from "../AppFooter";

  export default {
    components: {AppFooter, DashboardSidebar },
    name: "Dashboard"
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    display: flex;
  }

  .dashboard__sidebar {
    flex-basis: 250px;
    flex-shrink: 0;
  }

  .dashboard__content {
    flex-grow: 1;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .dashboard__page {
    flex-grow: 1;

    @media (min-width: 767px) and (max-width: 1000px) {
      max-width: 500px;
    }

    @media (min-width: 1000px) and (max-width: 1300px) {
      max-width: 650px;
    }

    @media (min-width: 1300px) {
      max-width: 950px;
    }
  }

  .dashboard__footer{

  }
</style>
