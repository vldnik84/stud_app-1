/* eslint-disable indent */
<template>
  <div>
    <a href="#" data-target="dropdown1" class="dropdown-trigger btn waves-effect waves-light">Categories
    <i class="material-icons sufix">menu</i></a>
    <div id="dropdown1" class="dropdown-content">
      <a href="#" class="right all-link" v-on:click.prevent="categoryId('1')">All</a>
      <Category v-for="section in categories"
                v-bind:key="section.id"
                v-bind:category_section="section"
                v-on:click="categoryId">
      </Category>
    </div>
  </div>
</template>

<script>
  import Category from './Category'
  import { mapState } from 'vuex'

  export default {
    name: 'Categories',

    components: {
      Category
    },

    data: function () {
      // FIXME sections is empty
      return {
        sections: this.all_categories
      }
    },

    computed: {
      ...mapState({
        categories: 'categories'
      }),
    },

    methods: {
      categoryId: function (value) {
        this.$store.dispatch('setCategoryId', value)
      }
    }
  }
</script>
