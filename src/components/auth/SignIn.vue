<template>
  <main class="background-image">
    <v-layout>
      <v-flex class="container-login" xs12 sm6 offset-sm3>
        <v-card class="wrap-login">
          <span class="login-form-title p-b-53">Увійти</span>
          <v-card-text>
          <v-form class="wrap-input" ref="form" v-model="form.valid">
            <div class="input">
            <v-text-field v-model="form.email.value" :rules="form.email.rules" label="E-mail" required></v-text-field>
              <span class="focus-input"></span>
            </div>
            <div class="input">
            <PasswordField v-model="form.password.value" :rules="form.password.rules" label="Пароль" required></PasswordField>
              <span class="focus-input"></span>
            </div>
          </v-form>
          </v-card-text>
          <v-card-actions class="container-login-form-btn m-t-17">
            <v-btn class="login-form-btn"  @click="signIn">Sign in</v-btn>
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
  import PasswordField from "../base/PasswordField";

  export default {
    name: "SignIn",

    components: {PasswordField, AppFooter},

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
      validate() {
        this.$refs.form.validate();
      },

      signIn() {
        this.validate();
        if (!this.form.valid) return;

        this.$store.dispatch(authActions.signIn, {
          email: this.form.email.value,
          password: this.form.password.value
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

  .wrap-input {
    width: 100%;
    height: 140px;
    position: relative;
    background-color: #f7f7f7;
    border: 1px solid #e6e6e6;
  }


  .login-form-btn {
    justify-content: right;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 60px;
    background-color: #546E7A;

    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #000000;
    line-height: 1.2;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;

  }

  .login-form-btn::before {
    top: 0;
    left: 0;
    background: #a64bf4;
    background: -webkit-linear-gradient(45deg, #00dbde, #fc00ff);
    background: -o-linear-gradient(45deg, #00dbde, #fc00ff);
    background: -moz-linear-gradient(45deg, #00dbde, #fc00ff);
    background: linear-gradient(45deg, #00dbde, #fc00ff);
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .login-form-btn:hover:before {
    opacity: 1;
  }

  .input {
    font-family: 'Montserrat', sans-serif;
    color: #333333;
    line-height: 1.2;
    font-size: 18px;

    display: block;
    width: 100%;
    background: transparent;
    height: 60px;
    padding: 0 20px;
  }

  .focus-input {
    position: absolute;
    display: block;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
    pointer-events: none;
    border: 1px solid #fc00ff;

    visibility: hidden;
    opacity: 0;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;

    -webkit-transform: scaleX(1.1) scaleY(1.3);
    -moz-transform: scaleX(1.1) scaleY(1.3);
    -ms-transform: scaleX(1.1) scaleY(1.3);
    -o-transform: scaleX(1.1) scaleY(1.3);
    transform: scaleX(1.1) scaleY(1.3);
  }

  .input:focus + .focus-input100 {
    visibility: visible;
    opacity: 1;

    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  .container-login {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;;
  }

  .wrap-login {
    width: 680px;
    background: #fff;
    position: relative;
  }

  .login-form-title {
    width: 100%;
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-size: 39px;
    color: #555555;
    line-height: 1.2;
    text-align: center;
  }
</style>
