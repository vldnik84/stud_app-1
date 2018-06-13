/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="breadcrumb-wrap d-flex align-items-center">
        <div class="col s12">
          <a class="breadcrumb">First</a>
          <a class="breadcrumb">Second</a>
          <a class="breadcrumb">Third</a>
        </div>
      </div>
      <div class="product-single">
        <form class="product-form" v-on:submit="formHandler">
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

              <div class="input-field">
                <i class="material-icons prefix">person</i>
                <input id="name" type="text" class="validate"
                       required="" aria-required="true" v-model="contact_data.name">
                <label for="name">Your name</label>
                <span class="helper-text" data-error="incorrect data">enter your name</span>
              </div>

              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input id="email" type="email" class="validate" v-model="contact_data.email">
                <label for="email">E-mail address</label>
                <span class="helper-text" data-error="incorrect data">enter your e-mail address</span>
              </div>

              <div class="input-field">
                <i class="material-icons prefix">phone</i>
                <input id="phone" type="tel" class="validate"
                       required="" aria-required="true" v-model="contact_data.phone">
                <label for="phone">Phone number</label>
                <span class="helper-text" data-error="incorrect data">enter your phone number</span>
              </div>

              <div class="input-field">
                <i class="material-icons prefix">message</i>
                <textarea id="textarea" data-length="230" class="materialize-textarea"
                          required="" aria-required="true" v-model="contact_data.message"></textarea>
                <label for="textarea">Your message</label>
                <span class="helper-text" data-error="incorrect data">Type a message to a seller</span>
              </div>

              <button v-on:click="contactAction" type="submit" class="btn waves-effect waves-light">Send Message
                <i class="material-icons sufix">email</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SingleAd',

    data () {
      return {
        contact_data: {
          name: '',
          email: '',
          phone: '',
          message: ''
        }
      }
    },

    methods: {
      formHandler: function (event) {
        event.preventDefault()
      },
      contactAction: function () {
        //this.message_data.message = this.message
        return console.log(JSON.stringify(this.contact_data))
      },
    }
  }
</script>
