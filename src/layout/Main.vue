/* eslint-disable */
<template>
  <section class="middle">
    <div class="container">

      <div class="row d-flex align-items-center">
        <div class="col s2">
          <Categories v-bind:categories="categories"></Categories>
        </div>

        <div class="col s3">
          <form class="search-form">
            <div class="input-field">
              <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
              <label for="icon_prefix2">Search</label><i class="material-icons sufix">search</i>
            </div>
          </form>
        </div>

        <div class="col s2">
          <div class="switch">
            <label>Inactive
              <input type="checkbox"><span class="lever"></span>Active
            </label>
          </div>
        </div>

        <div class="col s3">
          <SortOptions v-bind:options="sortOptions"></SortOptions>
        </div>

        <div class="col s2 text-right"><a href="#!" class="btn btn waves-effect waves-light">Add new<i class="material-icons sufix">add</i></a></div>
      </div>

      <Products v-bind:products="products"></Products>

      <ul class="pagination">
        <!-- TODO Implement Rendering -->
        <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
        <li v-for="page in pagination"
            v-bind:key="page.id"
            v-bind:class="page.id === 0 ? 'active' : 'waves-effect'">
          <a href="#!">{{ page.name }}</a>
        </li>
        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
      </ul>
    </div>
  </section>
</template>

<script>
  import CFG from './Params'
  import Categories from './Categories'
  import SortOptions from './SortOptions'
  import Products from './Products'

  export default {
    name: 'Main',

    components: {
      Categories,
      SortOptions,
      Products
    },

    data: function () {
      return CFG
    }
  }
</script>
