/* eslint-disable indent */
<template>
  <div class="product-list">
    <Product
      v-for="product in this.products"
      v-bind:key="product.id"
      v-bind:productPr="product">
    </Product>
    <div class="divider"></div>
  </div>
</template>

<script>
  import Product from './Product'

  export default {
    name: 'Products',

    components: {
      Product
    },

    props: ['products']
  }
</script>
