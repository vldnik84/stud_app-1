/* eslint-disable indent */
<template>
  <div class="product text-align-left">
    <div class="product-image"><img :src="product.image" alt=""></div>
    <div class="product-body">
      <div class="product-title">
        <a href="#" @click.prevent="productHandler">{{ product.title }}</a>
      </div>
      <div class="product-price">Price: {{ product.price }} $</div>
      <div class="product-text">{{ product.description }}</div>
    </div>
    <a href="#" class="btn waves-effect waves-light contact" v-if="!product.empty" @click.prevent="productHandler">Contact
      <i class="material-icons suffix">phone</i>
    </a>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    name: 'Product',

    props: {
      value: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        product: this.value
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
      productHandler: function () {
        if (this.loggedIn !== null) {
          axios.post(this.back_address + 'product/' + this.product.id, JSON.stringify({token: this.loggedIn}), {withCredentials: true})
            .then(response => {
              if (response.data.access) {
                this.$router.push({name: 'ChangeForm', params: {id: this.product.id}})
              } else {
                this.$router.push({name: 'SingleAd', params: {id: this.product.id}})
              }
            })
            .catch(error => console.log(error))
        } else {
          this.$router.push({name: 'SingleAd', params: {id: this.product.id}})
        }
      }
    }
  }
</script>
