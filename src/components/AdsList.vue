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
              <label for="icon_prefix2">Search</label>
              <i class="material-icons sufix">search</i>
            </div>
          </form>
        </div>

        <div class="col s2">
          <div class="switch">
            <label>
              Inactive
              <input type="checkbox">
              <span class="lever"></span>
              Active
            </label>
          </div>
        </div>

        <div class="col s3">
          <SortOptions v-bind:options="CFG.sortOptions"></SortOptions>
        </div>

        <div class="col s2 text-right">
          <!--<router-link :to="{name: 'AddForm'}">
            <a class="btn btn waves-effect waves-light">
              <span>Add new</span>
              <i class="material-icons sufix">add</i>
            </a>
          </router-link>-->
        </div>
      </div>



      <div class="product-list">
        <Product
          v-for="product in list"
          v-bind:key="product.id"
          v-bind:single_product="product">
        </Product>
        <div class="divider"></div>
      </div>

      <!--<router-link :to="{name: 'AddForm', params: {id: item.id}}">{{ item.name }}</router-link>
      <Products v-bind:products="list"></Products>-->




      <ul class="pagination">
        <!-- TODO Implement Rendering -->
        <li class="disabled">
          <a><i class="material-icons">chevron_left</i></a>
        </li>

        <li v-for="page in CFG.pagination"
            v-bind:key="page.id"
            v-bind:class="page.id === 0 ? 'active' : 'waves-effect'">
          <a>{{ page.name }}</a>
        </li>

        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
      </ul>
    </div>

    <!--<div class="hello">
      <div v-for="item in list" :key="item.id">
        <router-link :to="{name: 'AddForm', params: {id: item.id}}">{{ item.name }}</router-link>
      </div>
    </div>-->
  </section>
</template>

<script>
  import CFG from './layout/Params'
  import Categories from './layout/Categories'
  import SortOptions from './layout/SortOptions'
  import Product from './layout/Product'
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    name: 'AdsList',

    components: {
      Categories,
      SortOptions,
      Product
    },

    data () {
      return {
        CFG,
        products: null
      }
    },

    computed: {
      ...mapState({
        list: 'adsList',
        back_address: 'backAddress'
      })
    },

    methods: {

    },

    created () {
      axios.get(this.back_address + 'products')
        .then(response => this.$store.dispatch('setList', response.data.products))
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>
