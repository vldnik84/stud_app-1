/* eslint-disable indent */
<template>
  <header class="header">
    <nav class="header-navbar light-blue">
      <div class="container">
        <div class="nav-wrapper">

          <router-link :to="{name: 'AdsList'}">
            <a href="#" class="brand-logo">Home</a>
          </router-link>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <router-link :to="{name: 'Login'}">
                <a href="#!">Login</a>
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'Register'}">
                <a href="#!">Register</a>
              </router-link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>
