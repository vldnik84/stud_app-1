/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="breadcrumb-wrap d-flex align-items-center">
        <div class="col s12"><a href="#!" class="breadcrumb">First</a><a href="#!" class="breadcrumb">Second</a><a href="#!" class="breadcrumb">Third</a></div>
      </div>
      <div class="product-single">
        <form action="lala" class="product-form">
          <div class="row">
            <div class="col s3">
              <div class="product-image"><img src="https://fakeimg.pl/300x300/282828/eae0d0/" alt=""></div>
            </div>
            <div class="col s9">
              <div class="product-title">Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor</div>
              <div class="product-price">Price: 500 $</div>
              <div class="bold">Overview</div>
              <div class="product-text">HHO carbon clean machine is the newest achievement with HHO gas and HHO agent cleaning at the same time.its innovative design and updated spare parts can increase the machine working efficiency to reach safer operation.</div>
              <div class="input-field">
                <input id="first_name" type="text" class="validate">
                <label for="first_name">Your name</label><span class="error"> </span>
              </div>
              <div class="input-field">
                <input id="price" type="text" class="validate">
                <label for="price">Email</label><span class="error"> </span>
              </div>
              <div class="input-field">
                <input id="tel" type="text" class="validate">
                <label for="tel">Tel.</label><span class="error"> </span>
              </div>
              <div class="input-field">
                <textarea id="textarea2" data-length="230" class="materialize-textarea"></textarea>
                <label for="textarea2">Message</label><span class="error"> </span>
              </div>
              <button type="submit" class="btn waves-effect waves-light">Send Message<i class="material-icons sufix">email</i></button>
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
      }
    }
  }
</script>
