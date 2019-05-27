<template>
  <div class="loader-overlay" v-if="isActive">
    <v-progress-circular class="loader" indeterminate size="75" width="5" color="white"/>
  </div>
</template>

<script>
  export default {
    name: "Loader",

    computed: {
      queue() {
        return this.$store.state.loader.queue;
      },

      isActive() {
        return !!Object.keys(this.queue).length;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .loader-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, .8);
    z-index: 999999999;
  }

  .loader {
    margin: auto;
  }
</style>
