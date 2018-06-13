/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="row">
        <form class="auth-form s4 col offset-s4" v-on:submit="formHandler">

          <Signup v-model="loginVal"></Signup>
          <Signup v-model="firstNameVal"></Signup>
          <Signup v-model="lastNameVal"></Signup>
          <Signup v-model="phoneVal"></Signup>
          <Signup v-model="passwordVal"></Signup>
          <Signup v-model="confirmPasswordVal"></Signup>

          <div class="input-field">
            <button v-on:click="registerAction" type="submit" class="btn btn-max waves-effect waves-light">Register</button>
          </div>

        </form>
      </div>
    </div>
  </section>
</template>

<script>
  import CFG from './layout/Params'
  import Signup from './layout/Signup'
  import axios from 'axios'

  export default {
    name: 'Register',

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
        first_name: [].filter.call(CFG['signups'], function(item) {
          if (item.name === 'first_name') {
            return item
          }
        })[0],
        last_name: [].filter.call(CFG['signups'], function(item) {
          if (item.name === 'last_name') {
            return item
          }
        })[0],
        phone: [].filter.call(CFG['signups'], function(item) {
          if (item.name === 'phone') {
            return item
          }
        })[0],
        password: [].filter.call(CFG['signups'], function(item) {
          if (item.name === 'password') {
            return item
          }
        })[0],
        confirm_password: [].filter.call(CFG['signups'], function(item) {
          if (item.name === 'confirm_password') {
            return item
          }
        })[0],
        register_data: {
          login: '',
          first_name: '',
          last_name: '',
          phone: '',
          password: '',
          confirm_password: ''
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
          this.register_data.login = val
        }
      },
      firstNameVal: {
        get: function () {
          return this.first_name
        },
        set: function (val) {
          this.first_name.value = val
          this.register_data.first_name = val
        }
      },
      lastNameVal: {
        get: function () {
          return this.last_name
        },
        set: function (val) {
          this.last_name.value = val
          this.register_data.last_name = val
        }
      },
      phoneVal: {
        get: function () {
          return this.phone
        },
        set: function (val) {
          this.phone.value = val
          this.register_data.phone = val
        }
      },
      passwordVal: {
        get: function () {
          return this.password
        },
        set: function (val) {
          this.password.value = val
          this.register_data.password = val
        }
      },
      confirmPasswordVal: {
        get: function () {
          return this.confirm_password
        },
        set: function (val) {
          this.confirm_password.value = val
          this.register_data.confirm_password = val
        }
      }
    },

    methods: {
      formHandler: function (event) {
        event.preventDefault()
      },
      registerAction: function () {
        return axios.post(this.back_address + 'register', JSON.stringify(this.register_data), {withCredentials: true})
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
