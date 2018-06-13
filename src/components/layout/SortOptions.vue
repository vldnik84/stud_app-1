/* eslint-disable indent */
<template>
  <div>
    <select v-model="selected">
      <option v-for="option in this.options"
              v-bind:key="option.id"
              v-bind:value="option.id === 0 ? true : option.id"
              v-bind:disabled="option.id === 0"
              v-bind:selected="option.id === 0">{{ option.name }}</option>
    </select>
    <label>Materialize Select</label>
  </div>
</template>

<script>
  export default {
    name: 'SortOptions',

    // TODO Set type and required property
    props: ['options'],

    data: function () {
      return {
        /* TODO move to state */
        selected: ''
      }
    }
  }
</script>
