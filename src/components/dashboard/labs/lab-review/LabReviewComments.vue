<template>
  <div>
    <div v-for="comment of comments">{{comment.text}}</div>
    <div>
      <v-text-field v-model="newCommentText" label="Коммертар"/>
      <v-btn @click="sendNewComment">SEND</v-btn>
    </div>
  </div>
</template>

<script>
  import {labReviewCommentsActions} from "./lab-review-comments-actions";

  export default {
    name: "LabReviewComments",

    props: {
      comments: {
        type: Array,
        required: true
      },

      commentsPath: {
        type: String,
        required: true
      }
    },

    data: () => ({
      newCommentText: ''
    }),

    methods: {
      sendNewComment() {
        this.$store.dispatch(labReviewCommentsActions.send, {
          text: this.newCommentText,
          path: this.commentsPath
        });
      }
    }
  }
</script>

<style scoped>

</style>
