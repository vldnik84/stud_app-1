/* eslint-disable indent */
<template>
  <div id="app">
    <div id="wrapper">
      <Header />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/layout/Header'
  import Footer from './components/layout/Footer'
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    name: 'App',

    components: {
      Header,
      Footer
    },

    computed: {
      ...mapState({
        back_address: 'backAddress'
      })
    },

    created () {
      axios.get(this.back_address + 'categories')
        .then(response => this.$store.dispatch('setCategories', response.data))
        .catch(error => console.log(error))
    }
  }
</script>
