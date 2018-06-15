/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="row">
        <form class="auth-form s4 col offset-s4" v-on:submit.prevent>

          <div class="input-field">
            <i class="material-icons prefix">account_circle</i>
            <input id="login" type="email" class="validate"
                   required="" aria-required="true" v-model="login_data.login">
            <label for="login">E-mail address</label>
            <span class="helper-text" data-error="incorrect data">enter your e-mail address</span>
          </div>

          <div class="input-field">
            <i class="material-icons prefix">vpn_key</i>
            <input id="password" type="password" class="validate"
                   required="" aria-required="true" v-model="login_data.password">
            <label for="password">Password</label>
            <span class="helper-text" data-error="incorrect data">enter your password</span>
          </div>

          <div class="input-field">
            <button type="submit" class="btn btn-max waves-effect waves-light" v-on:click="loginAction">Submit</button>
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
    name: 'Login',

    data () {
      return {
        login_data: {
          login: '',
          password: ''
        }
      }
    },

    computed: {
      ...mapState({
        back_address: 'backAddress'
      })
    },

    methods: {
      // TODO Send error to Page404
      loginAction: function () {
        return axios.post(this.back_address + 'login', JSON.stringify(this.login_data), {withCredentials: true})
          .then(response => {
            this.$store.dispatch('login', response.data)
            this.$router.push({name: 'AdsList'})
          })
          .catch(error => console.log(error))
      }
    }
  }
</script>
