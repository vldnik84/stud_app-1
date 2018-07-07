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
        contact_info: [ ],
        results: [ ]
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
        // TODO Add message system (DB, back, etc)
      },
      getCategory: function () {

        const findKeyValue = (obj, res, fkey, fvalue, found) => {
          let obj_keys = Object.keys(obj)
          let objects = [ ]
          let newObj = { }

          for (let i = 0; i < obj_keys.length; i += 1) {
            let key = obj_keys[i]
            if (obj[key] && typeof obj[key] === 'object') {
              objects.push(obj[key])
            } else {
              newObj = { ...newObj, [key]: obj[key] }
            }
          }

          if (newObj.hasOwnProperty(fkey) && newObj[fkey] === fvalue) {
            console.log('object is', obj, ' newObj is', newObj)
            res.push(newObj)
            found = true
            return found
          }

          if (!found) {
            for (let object of objects) {
              console.log('1')
              if (findKeyValue(object, res, fkey, fvalue, found)) {
                console.log('2')
                break
              } else {
                console.log('3')
                findKeyValue(object, res, fkey, fvalue, found)
              }
              objects.shift()
            }
          }
        }

        let result = [ ]
        findKeyValue(this.categories, result, 'id', 4, false)
        // this.results = result.filter(() => true)
        console.log(result)








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
