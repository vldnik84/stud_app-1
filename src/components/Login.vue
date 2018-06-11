/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="row">
        <!--<form action="" class="auth-form s4 col offset-s4">--><!--v-bind:value="signup"-->

          <Signup v-for="(signup, i) in signups"
                  v-bind:key="signup.id"
                  v-bind:sign_param="signup"
                  v-on:model="sign_val[i]">
          </Signup>

          <div class="input-field">
            <button v-on:click="loginAction" type="submit" class="btn btn-max waves-effect waves-light">Submit</button>
          </div>
          <div class="text-center"><a href="#!">Forgot your login data?</a></div>

        <!--</form>-->
        <br>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import Signup from './layout/Signup'
  import CFG from './layout/Params'

  export default {
    name: 'Login',

    components: {
      Signup
    },

    data () {
      return {
        signups: CFG['signups'].slice(0, 2),
        sign_val: ['login', 'password']
      }
    },

    /*computed: {
      getValue: {
        get: function (obj) {
          return obj
        },
        set: function (newValue) {
          console.log(newValue)
        }
      }
    },*/

    methods: {
      loginAction: function () {
        console.log(JSON.stringify(this.$data.resVal))

        /*return axios.post('http://back.loc:81/login', JSON.stringify(this.$data.login, this.$data.password), {withCredentials: true})
          .then(response => {
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })*/
      }
    }
  }
</script>
