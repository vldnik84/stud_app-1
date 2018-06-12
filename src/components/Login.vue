/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="row">
        <!--<form action="" class="auth-form s4 col offset-s4">-->

          <Signup v-model="login_val"></Signup>
          <Signup v-model="password_val"></Signup>

          <div class="input-field">
            <button v-on:click="login_action" type="submit" class="btn btn-max waves-effect waves-light">Submit</button>
          </div>
          <div class="text-center"><a href="#!">Forgot your login data?</a></div>

        <!--</form>-->
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  import CFG from './layout/Params'
  import Signup from './layout/Signup'
  import axios from 'axios'

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
        })[0],
        login_data: {
          login: '',
          password: ''
        }
      }
    },

    computed: {
      ...mapState({
        logged_state: 'loggedIn'
      }),
      login_val: {
        get: function () {
          return this.login
        },
        set: function (val) {
          this.login.value = val
          this.login_data.login = val
        }
      },
      password_val: {
        get: function () {
          return this.password
        },
        set: function (val) {
          this.password.value = val
          this.login_data.password = val
        }
      }
    },

    methods: {
      login_action: function () {
        return axios.post('http://back.loc:81/login', JSON.stringify(this.login_data), {withCredentials: true})
          .then(response => {
            response.status === 200 ? this.$store.dispatch('login', true) : console.log(response.status)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>
