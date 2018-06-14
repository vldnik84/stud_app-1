/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="row">
        <form class="auth-form s4 col offset-s4" v-on:submit="formHandler">

          <div class="input-field">
            <i class="material-icons prefix">account_circle</i>
            <input id="login" type="email" class="validate"
                   required="" aria-required="true" v-model="register_data.login">
            <label for="login">E-mail address</label>
            <span class="helper-text" data-error="incorrect data">enter your e-mail address</span>
          </div>

          <div class="input-field">
            <i class="material-icons prefix">person</i>
            <input id="first_name" type="text" class="validate"
                   required="" aria-required="true" v-model="register_data.first_name">
            <label for="first_name">First name</label>
            <span class="helper-text" data-error="incorrect data">enter your first name</span>
          </div>

          <div class="input-field">
            <i class="material-icons prefix">person</i>
            <input id="last_name" type="text" class="validate"
                   required="" aria-required="true" v-model="register_data.last_name">
            <label for="last_name">Last name</label>
            <span class="helper-text" data-error="incorrect data">enter your last name</span>
          </div>

          <div class="input-field">
            <i class="material-icons prefix">phone</i>
            <input id="phone" type="tel" class="validate"
                   required="" aria-required="true" v-model="register_data.phone">
            <label for="phone">Phone number</label>
            <span class="helper-text" data-error="incorrect data">enter your phone number</span>
          </div>

          <div class="input-field">
            <i class="material-icons prefix">vpn_key</i>
            <input id="password" type="password" class="validate"
                   required="" aria-required="true" v-model="register_data.password">
            <label for="password">Password</label>
            <span class="helper-text" data-error="incorrect data">enter your password</span>
          </div>

          <div class="input-field">
            <i class="material-icons prefix">vpn_key</i>
            <input id="confirm_password" type="password" class="validate"
                   required="" aria-required="true" v-model="register_data.confirm_password">
            <label for="confirm_password">Confirm password</label>
            <span class="helper-text" data-error="incorrect data">reenter your password</span>
          </div>

          <div class="input-field">
            <button v-on:click="registerAction" type="submit" class="btn btn-max waves-effect waves-light">Register</button>
          </div>

        </form>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    name: 'Register',

    data () {
      return {
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
      })
    },

    methods: {
      formHandler: function (event) {
        event.preventDefault()
      },
      // TODO Send error to Page404
      registerAction: function () {
        return axios.post(this.back_address + 'register', JSON.stringify(this.register_data), {withCredentials: true})
          .then(response => {
            this.$store.dispatch('login', response.data)
            this.$router.push({name: 'AdsList'})
          })
          .catch(error => console.log(error))
      }
    }
  }
</script>
