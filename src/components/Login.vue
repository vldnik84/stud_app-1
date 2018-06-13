/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="row">
        <form class="auth-form s4 col offset-s4" v-on:submit="formHandler">

          <Signup v-model="loginVal"></Signup>
          <Signup v-model="passwordVal"></Signup>

          <div class="input-field">
            <button type="submit" class="btn btn-max waves-effect waves-light" v-on:click="loginAction">Submit</button>
          </div>
          <div class="text-center"><a href="#!">Forgot your login data?</a></div>

        </form>
      </div>
    </div>
  </section>
</template>

<script>
  import CFG from './layout/Params'
  import Signup from './layout/Signup'
  import axios from 'axios'
  import { mapState } from 'vuex'

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
        back_address: 'backAddress'
      }),
      loginVal: {
        get: function () {
          return this.login
        },
        set: function (val) {
          this.login.value = val
          this.login_data.login = val
        }
      },
      passwordVal: {
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
      formHandler: function (event) {
        event.preventDefault()
      },
      loginAction: function () {
        return axios.post(this.back_address + 'login', JSON.stringify(this.login_data), {withCredentials: true})
          .then(response => {
            if(response.status === 200) {
              this.$store.dispatch('login', true)
              this.$router.push('/')
            } else {
              console.log(response.status)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>
