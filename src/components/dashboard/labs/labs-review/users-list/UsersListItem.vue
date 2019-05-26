<template>
  <v-btn :to="labsPath" class="ma-0 user-list-item">
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
    },

    computed: {
      labsPath() {
        return {
          name: 'user-labs',
          params: { uid: this.reviews.user.uid}
        }
      }
    }
  }
</script>
