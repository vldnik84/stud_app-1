/* eslint-disable indent */
<template>
  <div class="product text-align-left">
    <div class="product-image"><img v-bind:src="single_product.image" alt=""></div>
    <div class="product-body">
      <div class="product-title">
        <span v-if="!loggedIn">{{ single_product.title }}</span>
        <router-link v-if="loggedIn" v-bind:to="{name: 'AddForm', params: {id: single_product.id}}">{{ single_product.title }}</router-link>
      </div>
      <div class="product-price">Price: {{ single_product.price }} $</div>
      <div class="product-text">{{ single_product.description }}</div>
    </div>
    <a v-on:click="clicked" class="btn waves-effect waves-light contact">Contact
      <i class="material-icons sufix">phone</i>
    </a>
  </div>
</template>



<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Product',

    props: {
      single_product: {
        type: Object,
        required: true
      }
    },

    computed: {
      ...mapState({
        loggedIn: 'loginStatus'
      })
    },

    methods: {
      formAction: function () {
        if (this.loggedIn) {
          this.$router.push({name: 'AddForm', params: {id: this.single_product.id}})
        }
      },
      clicked: function () {
        return console.log('123')
      }
    }
  }
</script>
