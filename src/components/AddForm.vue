/* eslint-disable indent */
<template>
  <div class="form">
    <h1>Editing ad page: </h1>
    <h3>Ad Id: {{ $route.params.id }}</h3>
    <input v-model="item.name"/>
    <br /><br />
    <button @click="save()">Save</button>
     &nbsp;&nbsp;
    <router-link :to="{name: 'AdsList'}">Cancel</router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'AddForm',
    computed: {
      ...mapState({
        item: 'addItem'
      })
    },
    methods: {
      save: function () {
        this.$store.dispatch('save', {item: this.item})
          .then(() => {
            this.$router.push({name: 'AdsList'})
          })
      }
    },
    created () {
      this.$store.dispatch('loadById', {id: this.$route.params.id})
    }
  }
</script>
