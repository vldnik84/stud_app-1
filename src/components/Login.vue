/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="row">
        <!--<form action="" class="auth-form s4 col offset-s4">--><!--v-bind:value="signup"-->

          <Signup v-model="login_val"></Signup>
          <Signup v-model="password_val"></Signup>

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
        login: [].filter.call(CFG['signups'], function(item) {
          if (item.name === 'login') {
            return item
          }
        })[0],
        password: [].filter.call(CFG['signups'], function(item) {
          if (item.name === 'password') {
            return item
          }
        })[0]
      }
    },

    computed: {
      login_val: {
        get: function () {
          return this.login
        },
        set: function (val) {
          this.login.value = val
          return val
        }
      },
      password_val: {
        get: function () {
          return this.password
        },
        set: function (val) {
          this.password.value = val
          return val
        }
      }
    },

    methods: {
      loginAction: function () {
        console.log(JSON.stringify(this.login.value))

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
