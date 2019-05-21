<template>
  <router-link class="app-navigation__link full-width block paddings--xs" :to="to">{{name}}</router-link>
</template>

<script>
  export default {
    name: "AppSidebarNavigationLink",
    props: {
      to: {
        type: Object,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    }
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
