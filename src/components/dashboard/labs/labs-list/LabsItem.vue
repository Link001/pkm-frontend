<template>
  <ListLink :name="lab.name" :destination="lab.taskDocumentUrl">
    <template slot="prepend">
      <v-btn icon class="ma-0 mr-1" small>
        <v-icon>check</v-icon>
      </v-btn>
    </template>
  </ListLink>
</template>

<script>
  import {Lab} from "../../../../models/lab";
  import ListLink from '../../../base/ListLink';

  export default {
    name: "LabsItem",

    components: { ListLink },

    props: {
      lab: {
        type: Lab,
        required: true
      }
    }
  }
</script>
