/* eslint-disable */
<template>
  <div>
    <h2>Sort by</h2>
    <SortCriterion
      v-for="item in this.CFG.sortCriteriaList"
      v-bind:key="item.id"
      v-bind:sortCriterion="item">
    </SortCriterion>
  </div>
</template>

<script>
  import CFG from './Params'
  import SortCriterion from './SortCriterion'

  export default {
    name: 'SortList',

    components: {
      SortCriterion
    },

    data: function () {
      return {
        CFG
      }
    }
  }
</script>
