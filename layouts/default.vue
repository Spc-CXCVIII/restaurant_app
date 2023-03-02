<template>
  <div>
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import AppFooter from '../components/AppFooter.vue';
  
  export default Vue.extend({
    name: 'default',
    components: {
      AppFooter
    },
    data() {
      return {
        restaurantData: [],
      }
    },
    methods: {
      onDataLoaded(data : any) {
        this.restaurantData = data;
      }
    }
  })
</script>