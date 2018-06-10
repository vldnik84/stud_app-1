/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="row">
        <!--<form class="auth-form s4 col offset-s4"> <!-- action="" -->

          <Signups task="login" v-bind:signups="signups" v-on:change="loginAction"></Signups>
          <br>
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
  import Signups from './layout/Signups'
  import CFG from './layout/Params'

  export default {
    name: 'Login',

    components: {
      Signups
    },

    data () {
      return {
        signups: CFG['signups'].slice(0, 2)
      }
    },

    methods: {
      loginAction: function (signup_data) {
        console.log(JSON.stringify(signup_data))

        /*return axios.post('http://back.loc:81/login', JSON.stringify(this.$data.login, this.$data.password), {withCredentials: true})
          .then(response => {
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })*/
      }
    }

    /*mounted: function () {
      console.log(this.signup_data)
    }*/
  }
</script>
