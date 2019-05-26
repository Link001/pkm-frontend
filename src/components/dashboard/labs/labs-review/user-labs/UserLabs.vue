<template>
  <main>
    <UserLabsItem v-for="review of userLabs" :key="review.lab.id" :review="review" :uid="uid" class="full-width"/>
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
        const userLabs = this.$store.getters.findUserLabs(this.uid);
        return userLabs ? userLabs.labs : [];
      }
    }
  }
</script>

<style scoped>

</style>
