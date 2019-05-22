<template>
  <section class="paddings-bottom--lg">
    <a :href="link" target="_blank">
      <h2>{{heading}}</h2>
    </a>
    <div class="about-program__content">
      <slot name="image"/>
      <div class="paddings-left--sm">
        <slot/>
      </div>
    </div>
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

<style lang="scss" scoped>
  .about-program__content {
    display: flex;
  }
</style>
