<template>
  <main v-if="userLabs">
    <h1 class="mt-0">Виконані лабораторні робооти студента {{ userLabs.user.name }}:</h1>
    <h2>Список виконаних робіт:</h2>
    <div>
      <UserLabsItem v-for="review of userLabs.labs" :key="review.lab.id" :review="review" :uid="uid" class="full-width"/>
    </div>
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
