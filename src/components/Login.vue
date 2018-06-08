/* eslint-disable */
<template>
  <div class="hello">
    <h1>Login page</h1>
    <div>{{ login }}</div>
    <div>
      <div>
          <input type="text" name="login" v-model="login">
      </div>
      <div>
          <input type="password" name="password" v-model="password">
      </div>
      <div>
          <button v-on:click="loginAction">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Login',

    data () {
      return {
        login: 'test@test.com',
        password: 'test'
      }
    },

    methods: {
      loginAction: function () {
        console.log(JSON.stringify(this.$data))
        return axios.post('http://back.loc:81/login', JSON.stringify(this.$data), {withCredentials: true})
          .then(response => {
            console.log(response.data)
          })
      }
    },

    beforeCreate: function () {
      console.log('beforeCreate')
    }
  }
</script>
