<template>
  <main>
    <h1>Лабораторні роботи</h1>

    <ol class="paddings-bottom--sm paddings-left--xs">
      <LabsItem v-for="lab of labs" class="paddings-top--xxs" :key="lab.id" :lab="lab"/>
    </ol>

    <img class="size--max-parent" src="../../../../assets/images/Screenshot_2.png" alt="">
  </main>
</template>

<script>
  import ListLink from "../../../base/ListLink";
  import LabsItem from "./LabsItem";

  export default {
    name: "Labs",

    components: {LabsItem, ListLink },

    computed: {
      labs() {
        return this.$store.state.labs.labs;
      }
    }
  }
</script>
