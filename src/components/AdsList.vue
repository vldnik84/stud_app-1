/* eslint-disable indent */
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="item in list" :key="item.id">
        <router-link :to="{name: 'AddForm', params: {id: item.id}}">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'AdsList',
    data () {
      return {
        msg: 'Welcome to AdsList'
      }
    },
    computed: {
      ...mapState({
        list: 'adsList'
      })
    }
  }
</script>
