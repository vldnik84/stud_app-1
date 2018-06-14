/* eslint-disable indent */
<template>
  <header class="header">
    <nav class="header-navbar light-blue">
      <div class="container">
        <div class="nav-wrapper">

          <router-link :to="{name: 'AdsList'}">
            <a class="brand-logo">Home</a>
          </router-link>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li v-if="loggedIn === null">
              <router-link :to="{name: 'Login'}">
                <a>Login</a>
              </router-link>
            </li>

            <li v-if="loggedIn === null">
              <router-link :to="{name: 'Register'}">
                <a>Register</a>
              </router-link>
            </li>

            <li v-if="loggedIn !== null">
              <a v-on:click="logout">Log out</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Header',

    computed: {
      ...mapState({
        loggedIn: 'loginState'
      })
    },

    methods: {
      logout: function () {
        this.$store.dispatch('login', null)
      }
    }
  }
</script>
