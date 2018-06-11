/* eslint-disable indent */
<template>
  <div class="input-field">
    <i class="material-icons prefix">{{ signup_val.icon }}</i>
    <input v-bind:id="signup_val.name" v-bind:type="signup_val.type" class="validate"
           required="" aria-required="true" v-model="signup_val">
    <label v-bind:for="signup_val.name">{{ signup_val.label }}</label>
    <span class="helper-text" data-error="incorrect data">{{ signup_val.descr }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Signup',

    model: {
      prop: 'sign_val',
      event: 'input'
    },

    props: {
      sign_param: {
        type: Object,
        required: true
      },
      sign_val: {
        type: String,
        required: true
      }
    },

    data: function() {
      return {
        signup: this.sign_param
      }
    },

    computed: {
      signup_val: {
        get: function () {
          return this.signup
        },
        set: function (newValue) {
          console.log(newValue)
          return this.$emit('input', newValue)
        }
      }
    }
  }
</script>
