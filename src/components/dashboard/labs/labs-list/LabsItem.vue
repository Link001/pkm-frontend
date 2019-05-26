<template>
  <ListLink :name="lab.name" :destination="lab.taskDocumentUrl">
    <template slot="prepend">
        <v-btn class="ma-0 mr-1" icon small>
          <label class="cursor--pointer">
            <v-icon>check</v-icon>
            <input type="file" hidden ref="completedTaskFile" @change="uploadCompletedTask">
          </label>
        </v-btn>
    </template>
  </ListLink>
</template>

<script>
  import {Lab} from "../../../../models/lab";
  import ListLink from '../../../base/ListLink';
  import {labsActions} from "../labs-actions";

  export default {
    name: "LabsItem",

    components: { ListLink },

    props: {
      lab: {
        type: Lab,
        required: true
      }
    },

    methods: {
      uploadCompletedTask() {
        const [file] = this.$refs.completedTaskFile.files;
        this.$refs.completedTaskFile.value = '';

        if (!file) return;

        this.$store.dispatch(labsActions.completeTask, { file, lab: this.lab });
      }
    },
  }
</script>
