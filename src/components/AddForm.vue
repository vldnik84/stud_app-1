<template>
  <div class="hello">
    <h1>Add edit page</h1>
    <div>{{ $route.params.id }}</div>
    <input v-model="item.name"/>
      {{ item }}
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
  mounted () {
    this.$store.dispatch('loadById', {id: this.$route.params.id})
  }
}
</script>
