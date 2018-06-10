/* eslint-disable indent */
<template>
  <div class="sort-options">{{ sortCriterion.title }}<br>
    <SortParam
      v-for="item in this.sortCriterion.params"
      v-bind:key="item.id"
      v-bind:sortParam="item">
    </SortParam>
    <div class="divider"></div>
  </div>
</template>

<script>
  import SortParam from './SortParam'

  export default {
    name: 'SortCriterion',

    components: {
      SortParam
    },

    props: ['sortCriterion']
  }
</script>
