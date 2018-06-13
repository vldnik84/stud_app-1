/* eslint-disable indent */
<template>
  <div class="dropdown-section text-align-left">
    <h2 class="dropdown-title"><a>{{ categorySc.name }}</a></h2>
    <ul class="dropdown-list">
      <li v-for="category in categorySc.categories"
          v-bind:key="category.id">
        <a>{{ category.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Category',

    // TODO Set type and required property
    props: ['categorySc']
  }
</script>
