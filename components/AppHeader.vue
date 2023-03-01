<template>
  <div style="font-family: 'Nunito';">
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <div class="container-fluid">
        <div class="navbar-brand">
          <img class="" src="../assets/images/google-maps.png" alt="Logo" width="30" height="30">
          <a class="navbar-brand" href="#">Restaurants</a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
          <form class="d-flex" @submit.prevent="GetRestaurant">
            <input v-model="keyword" class="form-control me-2" type="search" placeholder="Enter keyword" aria-label="Search">
            <button class="btn btn-primary" >Search</button>
          </form>
        </div>
      </div>
    </nav>
    <Map :restaurant_list_props="restaurant_list" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import restaurant from '../scripts/restaurant';
  import Map from './google/Map.vue';

  export default Vue.extend({
    mixins: [restaurant],
    components: { Map },
    name: 'AppHeader',
    data() {
      return {
        keyword: ''
      };
    },
  })
</script>