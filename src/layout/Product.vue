/* eslint-disable indent */
<template>
  <div class="product text-align-left">
    <div class="product-image"><img v-bind:src="productPr.image" alt=""></div>
    <div class="product-body">
      <div class="product-title">{{ productPr.name }}</div>
      <div class="product-price">Price: {{ productPr.price }} $</div>
      <div class="product-text">{{ productPr.descr }}</div>
    </div><a v-on:click="clicked" href="#!" class="btn waves-effect waves-light">Contact<i class="material-icons sufix">phone</i></a>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    props: ['productPr'],
    methods: {
      clicked: function () {
        return console.log('123')
      }
    }
  }
</script>
