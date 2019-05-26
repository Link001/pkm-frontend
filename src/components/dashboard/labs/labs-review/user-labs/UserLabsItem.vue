<template>
  <v-btn class="ma-0">{{ review.lab.name }}</v-btn>
</template>

<script>
  import {LabReview} from "../../../../../models/labs-reviews/lab-review";

  export default {
    name: "UserLabsItem",

    props: {
      review: {
        type: LabReview,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
