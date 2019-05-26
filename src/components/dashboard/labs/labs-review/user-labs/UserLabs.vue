<template>
  <main v-if="userLabs">
    <h1 class="mt-0" >{{ userLabs.user.name }}:</h1>
    <UserLabsItem v-for="review of userLabs.labs" :key="review.lab.id" :review="review" :uid="uid" class="full-width"/>
  </main>
</template>

<script>
  import UserLabsItem from "./UserLabsItem";

  export default {
    name: "UserLabs",

    components: {UserLabsItem},

    props: {
      uid: {
        type: String,
        required: true
      }
    },

    computed: {
      userLabs() {
        return this.$store.getters.findUserLabs(this.uid);
      }
    }
  }
</script>

<style scoped>

</style>
