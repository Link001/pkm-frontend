<template>
  <main>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required/>
            <v-text-field v-model="password" :rules="passwordRules" label="Password" required/>
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

  export default {
    name: "SignIn",

    components: {AppFooter},

    data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      checkbox: false
    }),

    methods: {
      login() {
        this.$store.dispatch(authActions.login)
      }
    }
  }
</script>

<style lang="scss" scoped></style>
