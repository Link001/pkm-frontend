<template>
  <main>
    {{uid}}
    {{labId}}
  </main>
</template>

<script>
  export default {
    name: "LabReview",

    props: {
      uid: {
        type: String,
        required: true
      },
      labId: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
