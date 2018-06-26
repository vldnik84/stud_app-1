/* eslint-disable indent */
<template>
  <div class="input-field">
    <i class="material-icons prefix">{{ prop_field.icon }}</i>
    <input :id="prop_field.name" :type="prop_field.type" class="validate"
           required="" aria-required="true" v-model="prop_field.value">
    <label :for="prop_field.name">{{ prop_field.label }}</label>
    <span class="helper-text" data-error="incorrect data">{{ prop_field.helper }}</span>
  </div>
</template>

<script>
  export default {
    name: 'InputInfo',

    props: {
      prop_field: {
        type: Object,
        required: true
      }
    }
  }
</script>
