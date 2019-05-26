<template>
    <router-view class="paddings-top--sm"/>
</template>

<script>
  import {labsReviewsActions} from "./labsReviewActions";

  export default {
    name: "LabsReview",

    created() {
      this.$store.dispatch(labsReviewsActions.listenChanges);
    },

    destroyed() {
      this.$store.dispatch(labsReviewsActions.removeChangesListener);
    }
  }
</script>
