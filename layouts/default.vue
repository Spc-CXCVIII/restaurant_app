<template>
  <div>
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script lang="ts">
  import AppFooter from '../components/AppFooter.vue';
  import AppHeader from '../components/AppHeader.vue';
  
  export default {
    name: 'default',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>