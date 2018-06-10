/* eslint-disable indent */
<template>
  <label>
    <input class="with-gap" v-bind:name="this.sortParam.name" v-bind:value="this.sortParam.val"
           type="radio" v-bind:checked="this.sortParam.id === 0" />
    <span>{{ this.sortParam.paramName }}</span>
  </label>
</template>

<script>
  export default {
    name: 'SortParam',
    props: ['sortParam']
  }
</script>
