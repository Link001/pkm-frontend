<template>
  <main>
    <UsersListItem
      v-for="reviews of usersReviews"
      :key="reviews.user.uid"
      :reviews="reviews"
      class="full-width"/>
  </main>
</template>

<script>
  import UsersListItem from "./UsersListItem";
  export default {
    name: "UsersList",
    components: {UsersListItem},
    computed: {
      usersReviews() {
        return this.$store.state.labs.reviews.labsReviews;
      }
    }
  }
</script>

<style scoped>

</style>
