/* eslint-disable indent */
<template>
  <div>
    <div class="input-field"
         v-for="signup in signups"
         v-bind:key="signup.id">
      <i class="material-icons prefix">{{ signup.icon }}</i>
      <input v-bind:id="signup.name" v-bind:type="signup.type" class="validate"
             required="" aria-required="true" v-model="signup_data[signup.name]" v-on:change="emitData">
      <label v-bind:for="signup.name">{{ signup.label }}</label>
      <span class="helper-text" data-error="incorrect data">{{ signup.descr }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Signups',
    props: ['signups'],

    data: function() {
      return {
        signup_data: []
      }
    },

    computed: {
      emitData: function () {
        console.log(this.signup_data)
        return this.$emit('change', this.signup_data)
      }
    }
  }
</script>
