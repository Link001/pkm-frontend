<template>
  <main v-if="review">
    <h1>Тема лабораторної роботи "{{review.lab.name}}"</h1>
    <a class="block" target="_blank" :href="review.lab.taskDocumentUrl">Файл з завданням</a>
    <a class="block" target="_blank" :href="review.reportUrl">Файл з виконаним завданням</a>

    <LabReviewComments :comments="review.comments" :comments-path="commentsPath"/>
  </main>
</template>

<script>
  import LabReviewComments from "../lab-review/LabReviewComments";
  export default {
    name: "LabReview",
    components: {LabReviewComments},
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
      },

      commentsPath() {
        return `labs-reviews/${this.uid}/labs/${this.labId}/comments`
      }
    }
  }
</script>

<style scoped>

</style>
