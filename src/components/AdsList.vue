/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">

      <div class="row d-flex align-items-center">
        <div class="col s2">
          <Categories v-bind:all="true" v-model="categoryId"></Categories>
        </div>

        <div class="col s3">
          <form class="search-form" v-on:submit.prevent="sortList">
            <div class="input-field">
              <i class="material-icons suffix">search</i>
              <input id="search" type="text" class="validate" v-model="search">
              <label for="search">Search</label>
            </div>
          </form>
        </div>

        <div class="col s2">
          <div class="switch">
            <label>
              Inactive
              <input type="checkbox" v-model="isActive">
              <span class="lever"></span>
              Active
            </label>
          </div>
        </div>

        <div class="col s3">
          <SortOptions v-bind:prop_options="CFG.sort_options" v-model="sortBy"></SortOptions>
        </div>

        <div class="col s2 text-right">
          <router-link :to="{name: 'AddForm'}">
            <a class="btn btn waves-effect waves-light">
              <span>Add new</span>
              <i class="material-icons suffix">add</i>
            </a>
          </router-link>
        </div>
      </div>

      <div class="product-list">
        <Product
          v-for="product in list"
          v-bind:key="product.id"
          v-bind:value="product">
        </Product>
        <Product v-if="!Array.isArray(list) || !list.length" v-bind:value="CFG.empty_product"></Product>
        <div class="divider"></div>
      </div>

      <Pagination v-if="pages > 1" v-bind:prop_pages="pages" v-model="currentPage"></Pagination>
    </div>
  </section>
</template>

<script>
  import CFG from './layout/Params'
  import Categories from './layout/Categories'
  import SortOptions from './layout/SortOptions'
  import Pagination from './layout/Pagination'
  import Product from './layout/Product'
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    name: 'AdsList',

    components: {
      Categories,
      SortOptions,
      Pagination,
      Product
    },

    data () {
      return {
        CFG,
        sort_by: 'newest',
        category_id: 1,
        active: 1,
        pages: 0,
        current_page: 1,
        search: ''
      }
    },

    computed: {
      ...mapState({
        list: 'adsList',
        back_address: 'backAddress',
        loggedIn: ''
      }),
      categoryId: {
        get: function () {
          return this.category_id
        },
        set: function (value) {
          this.category_id = value
          this.sortList()
        }
      },
      sortBy: {
        get: function () {
          return this.sort_by
        },
        set: function (value) {
          this.sort_by = value
          this.sortList()
        }
      },
      isActive: {
        get: function () {
          return this.active
        },
        set: function (value) {
          this.active = Number(value)
          this.sortList()
        }
      },
      currentPage: {
        get: function () {
          return this.current_page
        },
        set: function (value) {
          this.current_page = Number(value)
          this.sortList()
        }
      }
    },

    methods: {
      sortList: function () {

        let other = '?state=1' +
          '&sort_by=' + this.sort_by +
          '&category_id=' + this.category_id +
          '&page=' + this.current_page +
          '&active=' + this.active +
          '&search=' + this.search

        axios.get(this.back_address + 'products' + other)
          .then(response => {
            this.pages = response.data.pages
            this.$store.dispatch('setList', response.data.products)
          })
          .catch(error => console.log(error))
      }
    },

    created () {
      this.sortList()
    }
  }
</script>
