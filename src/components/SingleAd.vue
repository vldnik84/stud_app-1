/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="breadcrumb-wrap d-flex align-items-center">
        <div class="col s12"><a href="#!" class="breadcrumb">First</a><a href="#!" class="breadcrumb">Second</a><a href="#!" class="breadcrumb">Third</a></div>
      </div>
      <div class="product-single">
        <!--<form action="" class="product-form">-->
          <div class="row">

            <div class="col s3">
              <div class="product-image"><img src="https://fakeimg.pl/300x300/282828/eae0d0/" alt=""></div>
            </div>

            <div class="col s9">
              <div class="product-title">Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor</div>
              <div class="product-price">Price: 500 $</div>
              <div class="bold">Overview</div>
              <div class="product-text">HHO carbon clean machine is the newest achievement with HHO gas and HHO agent
                cleaning at the same time.its innovative design and updated spare parts can increase the machine working
                efficiency to reach safer operation.</div>

              <Signup v-model="name_val"></Signup>
              <Signup v-model="email_val"></Signup>
              <Signup v-model="phone_val"></Signup>

              <div class="input-field">
                <i class="material-icons prefix">message</i>
                <textarea id="textarea" data-length="230" class="materialize-textarea"
                          required="" aria-required="true" v-model="message_data.message"></textarea>
                <label for="textarea">Message</label>
                <span class="helper-text" data-error="incorrect data">Type a message to a seller</span>
              </div>

              <button v-on:click="message_action" type="submit" class="btn waves-effect waves-light">Send Message
                <i class="material-icons sufix">email</i>
              </button>
            </div>
          </div>
        <!--</form>-->
      </div>
    </div>
  </section>
</template>

<script>
  import CFG from './layout/Params'
  import Signup from './layout/Signup'

  export default {
    name: 'SingleAd',

    components: {
      Signup
    },

    data () {
      return {
        name: [].filter.call(CFG['signups'], function(item) {
          if (item.name === 'first_name') {
            return item
          }
        })[0],
        email: [].filter.call(CFG['signups'], function(item) {
          if (item.name === 'login') {
            return item
          }
        })[0],
        phone: [].filter.call(CFG['signups'], function(item) {
          if (item.name === 'phone') {
            return item
          }
        })[0],
        message_data: {
          email: '',
          name: '',
          phone: ''
        }

      }
    },

    computed: {
      name_val: {
        get: function () {
          return this.name
        },
        set: function (val) {
          this.name.value = val
          this.message_data.name = val
        }
      },
      email_val: {
        get: function () {
          return this.email
        },
        set: function (val) {
          this.email.value = val
          this.message_data.email = val
        }
      },
      phone_val: {
        get: function () {
          return this.phone
        },
        set: function (val) {
          this.phone.value = val
          this.message_data.phone = val
        }
      }
    },

    methods: {
      message_action: function () {
        //this.message_data.message = this.message
        return console.log(JSON.stringify(this.message_data))
      }
    }
  }
</script>
