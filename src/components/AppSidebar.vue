<template>
  <div class="app-sidebar">
    <h1>
      <router-link to="/">APP NAME</router-link>
    </h1>
    <nav class="app-navigation">
      <router-link class="app-navigation__link full-width block paddings--xs" :to="{ name: 'about-subject' }">
        Про Предмет
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "AppSidebar"
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
