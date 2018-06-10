/* eslint-disable indent */
<template>
  <div>
    <a href="#" data-target="dropdown1" class="dropdown-trigger btn waves-effect waves-light">Categories
      <i class="material-icons sufix">menu</i></a>
    <div id="dropdown1" class="dropdown-content"><a href="#!" class="right all-link">All</a>
      <Category v-for="section in categories"
                v-bind:key="section.id"
                v-bind:categorySc="section">
      </Category>
    </div>
  </div>
</template>

<script>
  import Category from './Category'

  export default {
    name: 'Categories',

    components: {
      Category
    },

    props: ['categories']
  }
</script>
