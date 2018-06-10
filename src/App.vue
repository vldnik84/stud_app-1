/* eslint-disable indent */
<template>
  <div id="app">
    <div id="wrapper">
      <Header></Header>
      <router-view />
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Header from './components/layout/Header'
  import Footer from './components/layout/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>
