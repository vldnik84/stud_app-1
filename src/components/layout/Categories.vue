/* eslint-disable indent */
<template>
  <div>
    <a href="#" data-target="dropdown1" class="dropdown-trigger btn waves-effect waves-light">
      Categories
      <i class="material-icons sufix">menu</i>
    </a>
    <div id="dropdown1" class="dropdown-content">
      <a href="#" class="right all-link" v-if="all" v-on:click.prevent="categoryId(1)">All</a>
      <Category v-for="section in categories"
                v-bind:key="section.id"
                v-bind:category_section="section"
                v-bind:value = "category_id"
                v-on:input="categoryId">
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

    props: {
      value: {
        type: Number,
        required: true
      },
      all: {
        type: Boolean,
        required: true
      }
    },

    data () {
      return {
        category_id: this.value
      }
    },

    computed: {
      ...mapState({
        categories: 'categories'
      })
    },

    methods: {
      categoryId: function (value) {
        console.log(this.$parent)
        this.category_id = Number.parseInt(value)
        this.$emit('input', this.category_id)
      }
    }
  }
</script>
