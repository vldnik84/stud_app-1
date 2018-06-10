/* eslint-disable indent */
<template>
  <div class="input-field">
    <i class="material-icons prefix">{{ signupVal.icon }}</i>
    <input v-bind:id="signupVal.name" v-bind:type="signupVal.type" class="validate"
           required="" aria-required="true" v-model="signupVal">
    <label v-bind:for="signupVal.name">{{ signupVal.label }}</label>
    <span class="helper-text" data-error="incorrect data">{{ signupVal.descr }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Signup',

    props: {
      value: {
        type: Object,
        required: true
      }
    },

    data: function() {
      return {
        signup: Object
      }
    },

    created: function () {
      let signup = this.value
    },

    computed: {
      signupVal: {
        get: function () {
          return signup
        },
        set: function (newValue) {
          console.log(newValue)
          return this.$emit('signup-value', newValue)
        }
      }
    }
  }
</script>
