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
      value: {
        type: Number,
        required: true
      },
      category_section: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        section: this.category_section,
        category_id: this.value
      }
    },

    methods: {
      categoryId: function (value) {
        this.$emit('input', Number.parseInt(value))
      }
    }
  }
</script>
