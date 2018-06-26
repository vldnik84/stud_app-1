/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="breadcrumb-wrap d-flex align-items-center">
        <div class="col s12 breadcrumb">{{ $route.params.id ? 'Ad Id: ' + $route.params.id : 'New Ad: ' + item.title }}</div>
      </div>


      <div class="product-single">
        <form class="product-form" v-on:submit.prevent>
          <div class="row">


            <div class="col s4">
              <div class="file-field input-field">
                <div class="btn"><span>Load image</span>
                  <input type="file">
                </div>

                <div class="file-path-wrapper">
                  <input type="text" class="file-path validate"
                         required="" aria-required="true" v-model="item.image">
                </div>
              </div>

              <br>
              <div class="switch">
                <label>
                  Inactive
                  <input type="checkbox" v-model="checked">
                  <span class="lever"></span>
                  Active
                </label>
              </div>

              <br>
              <div class="left-align">
                <Categories v-bind:all="false" v-model="category_id"></Categories>
              </div>
            </div>


            <div class="col s8">
              <div class="input-field">
                <i class="material-icons prefix">title</i>
                <input id="title" type="text" class="validate"
                       required="" aria-required="true" v-model="item.title">
                <label class="active" for="title">Title</label>
                <span class="helper-text" data-error="incorrect data">Enter item's title</span>
              </div>

              <div class="input-field">
                <i class="material-icons prefix">attach_money</i>
                <input id="price" type="number" class="validate"
                       required="" aria-required="true" v-model="item.price">
                <label class="active" for="price">Price</label>
                <span class="helper-text" data-error="incorrect data">Enter item's price</span>
              </div>

              <div class="input-field">
                <i class="material-icons prefix">info_outline</i>
                <textarea id="descr" data-length="230" class="materialize-textarea validate"
                          required="" aria-required="true" v-model="item.description"></textarea>
                <label class="active" for="descr">Description</label>
                <span class="helper-text" data-error="incorrect data">Enter item's description</span>
              </div>

              <div class="buttons">
                <a class="btn waves-effect waves-light" v-on:click="save()">
                  Save
                  <i class="material-icons suffix">save</i>
                </a>

                <router-link :to="{name: 'AdsList'}">
                  <a class="btn waves-effect waves-light">
                    Cancel
                    <i class="material-icons suffix">cancel</i>
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
  import Categories from './layout/Categories'
  import { mapState } from 'vuex'

  export default {
    name: 'AddForm',

    components: {
      Categories
    },

    data () {
      return {
        category_id: 0
      }
    },

    computed: {
      ...mapState({
        item: 'addItem',
        selected_category: 'categoryId'
      }),
      checked: {
        get: function () {
          return (this.item.active === '1' || this.item.active === undefined)
        },
        set: function (value) {
          value ? this.item.active = '1' : this.item.active = '0'
        }
      }
    },

    methods: {
      save: function () {

        // TODO Implement validator on category_id

        this.item.category_id = this.category_id

        console.log(this.item)

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
