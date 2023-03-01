<template>
  <Map />
</template>

<script lang="ts">
  import Map from '../components/google/Map.vue'
  import Vue from 'vue'

  export default Vue.extend({
    name: 'IndexPage',
    components: {
      Map
    }
  })
</script>