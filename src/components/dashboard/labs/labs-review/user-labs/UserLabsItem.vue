<template>
  <v-btn :to="reviewPath" class="ma-0">{{ review.lab.name }}</v-btn>
</template>

<script>
  import {LabReview} from "../../../../../models/labs-reviews/lab-review";

  export default {
    name: "UserLabsItem",

    props: {
      review: {
        type: LabReview,
        required: true
      },

      uid: {
        type: String,
        required: true
      }
    },

    computed: {
      reviewPath() {
        return {
          name: 'lab-review',
          params: {
            uid: this.uid,
            labId: this.review.lab.id
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
