<template>
  <main>
    <h1 class="user-list__header">Список студентів із зданими лабораторними роботами</h1>
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

<style lang="scss" scoped>

  .user-list__header{
    font-size: 25px;
  }

</style>
