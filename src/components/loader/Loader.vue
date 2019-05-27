<template>
  <transition name="loader">
    <div class="loader-overlay" v-show="isActive" :duration="150">
      <v-progress-circular class="loader" indeterminate size="75" width="5" color="white"/>
    </div>
  </transition>
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

  .loader-enter-active, .loader-leave-active {
    transition: opacity .15s;
  }

  .loader-enter, .loader-leave-to {
    opacity: 0;
  }
</style>
