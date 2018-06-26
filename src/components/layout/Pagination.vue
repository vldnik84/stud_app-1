/* eslint-disable indent */
<template>
  <ul class="pagination">
    <li v-for="page in (prop_pages + 2)"
        v-bind:key="page"
        v-bind:class="pageMarker(page)">

      <a v-if="page === 1" href="#" v-on:click.prevent="pageHandler(page)">
        <i class="material-icons">chevron_left</i>
      </a>

      <a v-else-if="page === (prop_pages + 2)" href="#" v-on:click.prevent="pageHandler(page)">
        <i class="material-icons">chevron_right</i>
      </a>

      <a v-else href="#" v-on:click.prevent="pageHandler(page)">
        {{ page - 1 }}
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Pagination',

    props: {
      value: {
        type: Number,
        required: true
      },
      prop_pages: {
        type: Number,
        required: true
      }
    },

    data: function () {
      return {
        current_page: this.value
      }
    },

    methods: {
      pageMarker: function (value) {
        if ( (value === 1 && this.current_page === value) ||
          (value === (this.prop_pages + 2) && this.current_page === (value - 2)) ||
          this.prop_pages === 0 ) {
          return 'disabled'
        } else if (this.current_page === (value - 1)) {
          return 'active waves-effect'
        } else {
          return 'waves-effect'
        }
      },
      pageHandler: function (value) {
        if (value === 1 && this.current_page > value) {
          this.current_page = this.current_page - 1
        } else if (value === (this.prop_pages + 2) && this.current_page < this.prop_pages) {
          this.current_page = this.current_page + 1
        } else if (value > 1 && value < (this.prop_pages + 2)) {
          this.current_page = value - 1
        }
        this.$emit('input', this.current_page)
      }
    }
  }
</script>
