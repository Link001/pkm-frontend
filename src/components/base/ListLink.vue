<template>
  <li class="list-link">
    <slot name="prepend"/>
    <a :target="target" :title="name" :href="destination">{{ name }}</a>
    <slot name="append"/>
  </li>
</template>

<script>
  export default {
    name: "ListLink",

    props: {
      external: {
        type: Boolean,
        required: false,
        default: true
      },

      name: {
        type: String,
        required: true
      },

      destination: {
        type: String,
        required: true
      }
    },

    computed: {
      target() {
        return this.external ? '_blank' : '_self'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list-link {
    display: flex;
    align-items: center;
  }
</style>
