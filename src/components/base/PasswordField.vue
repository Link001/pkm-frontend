<template>
  <v-text-field
    @input="onInput"
    :value="value"
    :type="type"
    :append-icon="icon"
    @click:append="toggleShowMode"
    v-bind="transparentProps"
  />
</template>

<script>
  export default {
    name: "PasswordField",

    props: ['rules', 'label', 'required'],

    data: () => ({
      show: false,
      value: ''
    }),

    methods: {
      toggleShowMode() {
        this.show = !this.show;
      },

      onInput(value) {
        this.$emit('input', value);
      }
    },

    computed: {
      type() {
        return this.show ? 'text' : 'password';
      },

      icon() {
        return this.show ? 'visibility' : 'visibility_off';
      },

      transparentProps() {
        return this.$props;
      }
    }
  }
</script>

<style scoped>

</style>
