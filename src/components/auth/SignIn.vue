<template>
  <main>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
          <v-form ref="form" v-model="form.valid">
            <v-text-field v-model="form.email.value" :rules="form.email.rules" label="E-mail" required></v-text-field>
            <v-text-field v-model="form.password.value" :rules="form.password.rules" label="Пароль" required></v-text-field>
          </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="black" @click="login">Sign in</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <AppFooter/>
  </main>
</template>

<script>
  import AppFooter from "../AppFooter";
  import {authActions} from "./auth-actions";
  import {minLength, required} from "../../validations";

  export default {
    name: "SignIn",

    components: {AppFooter},

    data: () => ({
      form: {
        valid: true,
        email: {
          value: '',
          rules: [ required('E-Mail') ]
        },
        password: {
          value: '',
          rules: [ required('Пароль'), minLength('Пароль', 6) ]
        }
      }
    }),

    methods: {
      login() {
        this.$store.dispatch(authActions.login)
      }
    }
  }
</script>

<style lang="scss" scoped></style>
