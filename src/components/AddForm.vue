/* eslint-disable indent */
<template>
  <section class="middle">
    <div class="container">
      <div class="breadcrumb-wrap d-flex align-items-center">
        <div class="col s12">Ad Id: {{ $route.params.id }}</div>
      </div>


      <div class="product-single">
        <form action="lala" class="product-form">
          <div class="row">


            <div class="col s4">
              <div class="file-field input-field">
                <div class="btn"><span>File</span>
                  <input type="file">
                </div>

                <div class="file-path-wrapper">
                  <input type="text" class="file-path validate">
                </div>
              </div>
            </div>


            <div class="col s8">
              <div class="input-field">
                <input id="title" type="text" value="Large Industrial Ultrasonic Cleaning Washing Machine for Engine Filter Carburetor" class="validate" v-model="item.name">
                <label for="title">Title</label><span class="error"> </span>
              </div>

              <div class="input-field">
                <input id="price" type="text" value="500" class="validate">
                <label for="price">Price</label><span class="error"> </span>
              </div>

              <div class="input-field">
                <textarea id="textarea2" data-length="230" class="materialize-textarea">HHO carbon clean machine is the newest achievement with HHO gas and HHO agent cleaning at the same time.its innovative design and updated spare parts can increase the machine working efficiency to reach safer operation.</textarea>
                <label for="textarea2">Overview</label><span class="error"> </span>
              </div>

              <div class="buttons">
                <a href="#!" class="btn waves-effect waves-light" v-on:click="save()">
                  Save
                  <i class="material-icons sufix">
                    save
                  </i>
                </a>
                <router-link :to="{name: 'AdsList'}">
                  <a href="#!" class="btn waves-effect waves-light">
                    Cancel
                    <i class="material-icons sufix">
                      cancel
                    </i>
                  </a>
                </router-link>
              </div>
            </div>


          </div>
        </form>
      </div>
    </div>

  </section>



  <!--<div class="form">
    <h1>Editing ad page: </h1>
    <h3>Ad Id: {{ $route.params.id }}</h3>
    <input v-model="item.name"/>
    <br /><br />
    <button @click="save()">Save</button>
     &nbsp;&nbsp;
    <router-link :to="{name: 'AdsList'}">Cancel</router-link>
  </div>-->
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'AddForm',
    computed: {
      ...mapState({
        item: 'addItem'
      })
    },
    methods: {
      save: function () {
        this.$store.dispatch('save', {item: this.item})
          .then(() => {
            this.$router.push({name: 'AdsList'})
          })
      }
    },
    created () {
      this.$store.dispatch('loadById', {id: this.$route.params.id})
    }
  }
</script>
