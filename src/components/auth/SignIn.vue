<template>
  <main>
    <button type="button" @click="login">login</button>
    <AppFooter/>
  </main>
</template>

<script>
  import AppFooter from "../AppFooter";
  import {authActions} from "./auth-actions";

  export default {
    name: "SignIn",

    components: {AppFooter},

    methods: {
      login() {
        this.$store.dispatch(authActions.login)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
