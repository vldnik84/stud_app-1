/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="row">

        <!--<form class="auth-form s4 col offset-s4">-->

          <Signups v-bind:signups="signups"></Signups>
          <br>
          <div class="input-field">
            <button v-on:click="registerAction" type="submit" class="btn btn-max waves-effect waves-light">Register</button>
          </div>
        <!--</form>-->
        <br>
      </div>
    </div>
  </section>
</template>

<script>
  import CFG from './layout/Params'
  import Signups from './layout/Signups'

  export default {
    name: 'Register',

    components: {
      Signups
    },

    data () {
      return {
        signups: CFG['signups']
      }
    },

    methods: {
      registerAction: function () {
        console.log(JSON.stringify(this.$data.vlogin, this.$data.vpassword))
        /*return axios.post('http://back.loc:81/register', JSON.stringify(this.login, this.password), {withCredentials: true})
          .then(response => {
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })*/
      }
    },

    mounted: function () {
      console.log("Log:")
    }
  }
</script>
