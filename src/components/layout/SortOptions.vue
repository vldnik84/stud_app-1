/* eslint-disable indent */
<template>
  <div class="input-field">
    <select v-model="sortBy">
      <option v-for="option in options"
              v-bind:key="option.id"
              v-bind:value="option.name">
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
        type: String,
        required: true
      },
      prop_options: {
        type: Array,
        required: true
      }
    },

    data: function () {
      return {
        selected: this.value,
        options: this.prop_options
      }
    },

    computed: {
      sortBy: {
        get: function () {
          return this.selected
        },
        set: function (value) {
          this.selected = value
          this.$emit('input', this.selected)
        }
      }
    }
  }
</script>
