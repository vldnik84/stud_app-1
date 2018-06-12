/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="row">
        <!--<form action="" class="auth-form s4 col offset-s4">-->

          <Signup v-model="login_val"></Signup>
          <Signup v-model="first_name_val"></Signup>
          <Signup v-model="last_name_val"></Signup>
          <Signup v-model="phone_val"></Signup>
          <Signup v-model="password_val"></Signup>
          <Signup v-model="confirm_password_val"></Signup>

          <div class="input-field">
            <button v-on:click="register_action" type="submit" class="btn btn-max waves-effect waves-light">Register</button>
          </div>

        <!--</form>-->
      </div>
    </div>
  </section>
</template>

<script>
  import CFG from './layout/Params'
  import Signup from './layout/Signup'
  //import axios from 'axios'

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
      /*...mapState({
        logged_state: 'loggedIn'
      }),*/
      login_val: {
        get: function () {
          return this.login
        },
        set: function (val) {
          this.login.value = val
          this.register_data.login = val
        }
      },
      first_name_val: {
        get: function () {
          return this.first_name
        },
        set: function (val) {
          this.first_name.value = val
          this.register_data.first_name = val
        }
      },
      last_name_val: {
        get: function () {
          return this.last_name
        },
        set: function (val) {
          this.last_name.value = val
          this.register_data.last_name = val
        }
      },
      phone_val: {
        get: function () {
          return this.phone
        },
        set: function (val) {
          this.phone.value = val
          this.register_data.phone = val
        }
      },
      password_val: {
        get: function () {
          return this.password
        },
        set: function (val) {
          this.password.value = val
          this.register_data.password = val
        }
      },
      confirm_password_val: {
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
      register_action: function () {

        return axios.post('http://back.loc:81/register', JSON.stringify(this.register_data), {withCredentials: true})
          .then(response => {
            console.log(response)
            //response.status === 200 ?  : console.log(response.status)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>
