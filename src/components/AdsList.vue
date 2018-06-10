/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">

      <div class="row d-flex align-items-center">
        <div class="col s2">
          <Categories v-bind:categories="CFG.categories"></Categories>
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
          <SortOptions v-bind:options="CFG.sortOptions"></SortOptions>
        </div>

        <div class="col s2 text-right"><a href="#!" class="btn btn waves-effect waves-light">Add new<i class="material-icons sufix">add</i></a></div>
      </div>

      <Products v-bind:products="CFG.products"></Products>

      <ul class="pagination">
        <!-- TODO Implement Rendering -->
        <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
        <li v-for="page in CFG.pagination"
            v-bind:key="page.id"
            v-bind:class="page.id === 0 ? 'active' : 'waves-effect'">
          <a href="#!">{{ page.name }}</a>
        </li>
        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
      </ul>
    </div>

    <div class="hello">
      <h1>{{ msg }}</h1>
      <div v-for="item in list" :key="item.id">
        <router-link :to="{name: 'AddForm', params: {id: item.id}}">{{ item.name }}</router-link>
      </div>
    </div>
  </section>
</template>

<script>
  import CFG from './layout/Params'
  import Categories from './layout/Categories'
  import SortOptions from './layout/SortOptions'
  import Products from './layout/Products'
  import { mapState } from 'vuex'

  export default {
    name: 'AdsList',

    components: {
      Categories,
      SortOptions,
      Products
    },

    data () {
      return {
        CFG,
        msg: 'Welcome to AdsList'
      }
    },

    computed: {
      ...mapState({
        list: 'adsList'
      })
    }
  }
</script>
