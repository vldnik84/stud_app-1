/* eslint-disable indent */
<template>
  <div class="input-field">
    <i class="material-icons prefix">{{ signup.icon }}</i>
    <input v-bind:id="signup.name" v-bind:type="signup.type" class="validate"
           required="" aria-required="true" v-model="return_val">
    <label v-bind:for="signup.name">{{ signup.label }}</label>
    <span class="helper-text" data-error="incorrect data">{{ signup.descr }}</span>
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
        signup: this.value
      }
    },

    computed: {
      return_val: {
        get: function () {
          return this.signup.value
        },
        set: function (val) {
          this.signup.value = val
          return this.$emit('input', val)
        }
      }
    }
  }
</script>
