/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="breadcrumb-wrap d-flex align-items-center">
        <div class="col s12 breadcrumb">Item information: {{ getCategory() }}</div>
      </div>

      <div class="product-single">
        <div class="row">

          <div class="col s3">
            <div class="product-image"><img :src="product.image" alt=""></div>
          </div>

          <div class="col s9">
            <form class="product-form" @submit.prevent="contactAction">
              <div class="product-title">{{ product.title }}</div>
              <div class="product-price">Price: {{ product.price }} $</div>
              <div class="bold">Description</div>
              <div class="product-text">{{ product.description }}</div>


              <InputInfo v-for="field in fields"
                         :key="field.id"
                         :prop_field="field">
              </InputInfo>

              <div class="input-field">
                <i class="material-icons prefix">{{ message_field[0].icon }}</i>
                <textarea :id="message_field[0].name" :data-length="message_field[0].length" class="materialize-textarea"
                          required="" aria-required="true" v-model="message_field[0].value"></textarea>
                <label :for="message_field[0].name">{{ message_field[0].label }}</label>
                <span class="helper-text" data-error="incorrect data">{{ message_field[0].helper }}</span>
              </div>

              <br>

              <button type="submit" class="btn waves-effect waves-light">Send Message
                <i class="material-icons suffix">email</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  import CFG from './layout/Params'
  import InputInfo from "./layout/InputInfo"

  export default {
    name: 'SingleAd',

    components: {
      InputInfo
    },

    data () {
      return {
        fields: CFG.input_fields.filter(item => (item.name !== 'message')),
        message_field: CFG.input_fields.filter(item => (item.name === 'message')),
        contact_info: [ ]
      }
    },

    computed: {
      ...mapState({
        product: 'addItem',
        categories: 'categories'
      })
    },

    methods: {
      contactAction: function () {
        for (let key in this.fields) {
          /**
           *  If this.contact_info is Object
           *  this.contact_info = {...this.contact_info, [key]: {name: this.fields[key].name, value: this.fields[key].value}}
           *  Object.assign(this.contact_info, { [key]: {name: this.fields[key].name, value: this.fields[key].value} })
           */
          this.contact_info[key] = { name: this.fields[key].name, value: this.fields[key].value }
        }

        console.log(this.contact_info)
        // TODO add message system (DB, back, etc)
      },
      getCategory: function () {

        let findObjectByLabel = function(obj, label) {
          if(obj.label === label) {
            return obj;
          }
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              let foundLabel = findObjectByLabel(obj[key], label)
              if (foundLabel) {
                return foundLabel;
              }
            }
          }
          return null;
        }

        let label = 'category_id'
        console.log(findObjectByLabel(this.categories, label))







      }
    },

    mounted () {
      for (let key in this.fields) {
        this.fields[key].value = ''
      }
      this.message_field[0].value = ''
    },

    created () {
      this.$store.dispatch('loadById', {id: this.$route.params.id})
    }
  }
</script>
