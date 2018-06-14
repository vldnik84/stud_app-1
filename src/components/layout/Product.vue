/* eslint-disable indent */
<template>
  <div class="product text-align-left">
    <div class="product-image"><img v-bind:src="product.image" alt=""></div>
    <div class="product-body">
      <div class="product-title">
        <a href="" v-on:click="hrefHandler">{{ product.title }}</a>
      </div>
      <div class="product-price">Price: {{ product.price }} $</div>
      <div class="product-text">{{ product.description }}</div>
    </div>
    <a v-on:click="clicked" class="btn waves-effect waves-light contact">Contact
      <i class="material-icons sufix">phone</i>
    </a>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    name: 'Product',

    props: {
      single_product: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        product: this.single_product
      }
    },

    computed: {
      ...mapState({
        loggedIn: 'loginState',
        back_address: 'backAddress'
      })
    },

    methods: {
      // TODO Send errors to Page404
      hrefHandler: function (event) {
        event.preventDefault()
        if (this.loggedIn !== null) {
          axios.post(this.back_address + 'product/' + this.product.id, JSON.stringify({token: this.loggedIn}), {withCredentials: true})
            .then(response => {
              console.log(response.data)
              if (response.data.access) {
                this.$router.push({name: 'ChangeForm', params: {id: this.product.id}})
              } else {
                this.$router.push({name: 'SingleAd', params: {id: this.product.id}})
              }
            })
            .catch(error => console.log(error))
        }
      },
      // TODO
      /*formAction: function () {
        if (this.loggedIn) {

        }
      },*/
      clicked: function () {
        return console.log('123')
      }
    }
  }
</script>

/*

this.$router.push({name: 'AddForm', params: {id: this.single_product.id}})


this.$store.dispatch('login', response.data)
this.$router.push({name: 'AdsList'})
}

*/


<!--<router-link v-if="loggedIn !== null" v-bind:to="{name: 'AddForm', params: {id: product.id}}">{{ product.title }}</router-link>-->
