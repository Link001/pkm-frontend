<template>
  <section>
    <a :href="link" target="_blank">
      <h2>{{heading}}</h2>
    </a>
    <slot/>
  </section>
</template>

<script>
  export default {
    name: "AboutProgram",
    props: {
      heading: {
        type: String,
        required: true
      },
      link:{
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
