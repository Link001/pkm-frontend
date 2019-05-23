<template>
  <div class="dashboard">
    <DashboardSidebar class="dashboard__sidebar"/>

    <div class="dashboard__content paddings-left--sm">
      <transition name="router" mode="out-in">
        <router-view class="dashboard__page align--center"/>
      </transition>

      <footer>FOOTER COMPONENT HERE</footer>
    </div>
  </div>
</template>

<script>
 import DashboardSidebar from "./dashboard-sidebar/DashboardSidebar";

  export default {
    components: { DashboardSidebar },
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
  }

  .dashboard__page {
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
