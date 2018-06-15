/* eslint-disable indent */
<template>
  <div class="input-field">
    <select v-model="sortOption">
      <option v-for="option in sort_options"
              v-bind:key="option.id"
              v-bind:value="option.id">
        {{ option.name }}
      </option>
    </select>
    <label>Sort by</label>
  </div>
</template>

<script>
  export default {
    name: 'SortOptions',

    props: {
      options: {
        type: Array,
        required: true
      }
    },

    data: function () {
      return {
        /* TODO move to state */
        selected: 0,
        sort_options: this.options
      }
    },

    computed: {
      sortOption: {
        get: function () {
          return this.selected
        },
        set: function (value) {
          this.selected = value
          this.$store.dispatch('setSortBy', value)
        }
      }
    }
  }
</script>
