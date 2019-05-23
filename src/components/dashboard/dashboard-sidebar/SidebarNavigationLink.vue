<template>
  <router-link class="app-navigation__link full-width block paddings--xs" :to="to">{{name}}</router-link>
</template>

<script>
  export default {
    name: "SidebarNavigationLink",
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

  .app-navigation__link {
    color: #FFF;
    text-decoration: none;

    &.router-link-exact-active {
      background-color: rgba(255, 255, 255, .15);
    }
  }
</style>
