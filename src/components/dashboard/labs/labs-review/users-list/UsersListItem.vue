<template>
  <v-btn class="ma-0 user-list-item">
    {{reviews.user.name}}
  </v-btn>
</template>

<script>
  import {UserLabs} from "../../../../../models/labs-reviews/user-labs";

  export default {
    name: "UsersListItem",

    props: {
      reviews: {
        type: UserLabs,
        required: true
      }
    }
  }
</script>
