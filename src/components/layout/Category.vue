/* eslint-disable indent */
<template>
  <div class="dropdown-section text-align-left">
    <h1 class="dropdown-title"><a href="#" v-on:click.prevent="categoryId(section.id)">{{ section.name }}</a></h1>
    <ul class="dropdown-list">
      <li v-for="category in section.category_list"
          v-bind:key="category.id">
        <a href="#" v-on:click.prevent="categoryId(category.id)">{{ category.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Category',

    props: {
      category_section: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        section: this.category_section
      }
    },

    methods: {
      categoryId: function (value) {
        this.$emit('click', value)
      }
    }
  }
</script>
