<template>
  <main>
    <h1>Лабораторні роботи</h1>

    <ol class="paddings-bottom--sm">
      <ListLink
        class="paddings-top--xs paddings-left--xs"
        v-for="lab of labs"
        :key="lab.id"
        :name="lab.name"
        :destination="lab.taskDocumentUrl"/>
    </ol>

    <img class="size--max-parent" src="../../../assets/images/Screenshot_2.png" alt="">
  </main>
</template>

<script>
  import ListLink from "../../base/ListLink";

  export default {
    name: "Labs",

    components: { ListLink },

    computed: {
      labs() {
        return this.$store.state.labs.labs;
      }
    }
  }
</script>
