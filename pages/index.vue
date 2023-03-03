<template>
  <div>
    <AppHeader @data-loaded="onDataLoaded"/>
    <Map :restaurant_list_props="restaurantData" />   
  </div>

</template>

<script lang="ts">
  import Map from '../components/google/Map.vue'
  import AppHeader from '../components/AppHeader.vue'
  import LoadingModal from '../components/LoadingModal.vue'

  import Vue from 'vue'

  export default Vue.extend({
    name: 'IndexPage',
    components: { Map, AppHeader, LoadingModal },
    data() {
      return {
        restaurantData: {},
        loadind: false
      }
    },

    methods: {
      onDataLoaded(data : Object) {
        this.restaurantData = data;
      }
    }
  })
</script>