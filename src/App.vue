<template>
  <div id="app">
    <div id="wrapper">
      <Header></Header>
      <Main></Main>
      <router-view/>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Header from './layout/Header'
  import Main from './layout/Main'
  import Footer from './layout/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>
