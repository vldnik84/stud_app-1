/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="breadcrumb-wrap d-flex align-items-center">
        <div class="col s12 breadcrumb">Ad Id: {{ $route.params.id }}</div>
      </div>


      <div class="product-single">
        <form class="product-form" v-on:submit="formHandler">
          <div class="row">


            <div class="col s4">
              <div class="file-field input-field">
                <div class="btn"><span>Load image</span>
                  <input type="file">
                </div>

                <div class="file-path-wrapper">
                  <input type="text" class="file-path validate">
                </div>
              </div>

              <div class="align-items-left">
                <a href="#" data-target="dropdown1" class="dropdown-trigger btn waves-effect waves-light">Categories
                <i class="material-icons sufix">menu</i></a>
                <div id="dropdown1" class="dropdown-content"><a class="right all-link">All</a>
                  <Category v-for="section in categories"
                            v-bind:key="section.id"
                            v-bind:category_section="section">
                  </Category>
                </div>
              </div>
            </div>


            <div class="col s8">
              <div class="input-field">
                <i class="material-icons prefix">title</i>
                <input id="title" type="text" class="validate" v-model="item.name">
                <label for="title">Title</label>
                <span class="helper-text" data-error="incorrect data">Enter item's title</span>
              </div>

              <div class="input-field">
                <i class="material-icons prefix">attach_money</i>
                <input id="price" type="number" class="validate">
                <label for="price">Price</label>
                <span class="helper-text" data-error="incorrect data">Enter item's price</span>
              </div>

              <div class="input-field">
                <i class="material-icons prefix">info_outline</i>
                <textarea id="descr" data-length="230" class="materialize-textarea validate"></textarea>
                <label for="descr">Description</label>
                <span class="helper-text" data-error="incorrect data">Enter item's description</span>
              </div>

              <div class="buttons">
                <a class="btn waves-effect waves-light" v-on:click="save()">
                  Save
                  <i class="material-icons sufix">save</i>
                </a>

                <router-link :to="{name: 'AdsList'}">
                  <a class="btn waves-effect waves-light">
                    Cancel
                    <i class="material-icons sufix">cancel</i>
                  </a>
                </router-link>
              </div>
            </div>


          </div>
        </form>
      </div>
    </div>

  </section>
</template>

<script>
  import Category from './layout/Category'
  import { mapState } from 'vuex'

  export default {
    name: 'AddForm',

    components: {
      Category
    },

    computed: {
      ...mapState({
        item: 'addItem',
        categories: 'categories'
      })
    },

    methods: {
      formHandler: function (event) {
        event.preventDefault()
      },
      save: function () {
        this.$store.dispatch('save', {item: this.item})
          .then(() => {
            this.$router.push({name: 'AdsList'})
          })
      }
    },

    created () {
      this.$store.dispatch('loadById', {id: this.$route.params.id})
    }
  }
</script>
