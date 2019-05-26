<template>
  <main v-if="review">
    <h1>{{review.lab.name}}</h1>
    <a class="block" target="_blank" :href="review.lab.taskDocumentUrl">Файл з завданням</a>
    <a class="block" target="_blank" :href="review.reportUrl">Файл з виконаним завданням</a>

    <div v-for="comment of review.comments">{{comment}}</div>
  </main>
</template>

<script>
  export default {
    name: "LabReview",

    props: {
      uid: {
        type: String,
        required: true
      },
      labId: {
        type: String,
        required: true
      }
    },

    computed: {
      review() {
        return this.$store.getters.findUserLab(this.uid, this.labId);
      }
    }
  }
</script>

<style scoped>

</style>
