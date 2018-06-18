/* eslint-disable indent */
<template>
  <div class="input-field">
    <select v-model="sortBy">
      <option v-for="option in options"
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
      value: {
        type: Number,
        required: true
      },
      sort_options: {
        type: Array,
        required: true
      }
    },

    data: function () {
      return {
        selected: this.value,
        options: this.sort_options
      }
    },

    computed: {
      sortBy: {
        get: function () {
          return this.selected
        },
        set: function (value) {
          this.selected = Number.parseInt(value)
          this.$emit('input', this.selected)
        }
      }
    }
  }
</script>
