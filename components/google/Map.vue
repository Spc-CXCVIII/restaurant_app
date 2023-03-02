<template>
  <div>
    <div ref="map" id="map" class="container"></div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Error</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>{{ errorMessage }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <ErrorModal v-if="showErrorModal" :errormsg="errorMessage" @modal-mounted="showModal" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import ErrorModal from '../ErrorModal.vue';

  export default Vue.extend({
    // Create map after component is mounted
    async mounted() {
      const map = new google.maps.Map(this.$refs.map, {
        center: { lat: 13.736717, lng: 100.523186 },
        zoom: 10,
      });
      this.map = map;
      console.log('Map mounted');
    },

    name: 'Map',

    // props from API
    props: {
      restaurant_list_props: {
        type: Object,
        default: () => {},
      }
    },

    components: {
      ErrorModal
    },

    data() {
      return {
        markers: [],
        restaurant_list: [],
        map: null,
        showErrorModal: false,
        errorMessage: ''
      };
    },

    methods: {
      showModal() {
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
          keyboard: false
        })
        myModal.show();
      },
      // Add markers to map
      addMarkers() {
        this.markers.forEach(marker => marker.setMap(null))

        this.restaurant_list.forEach((restaurant) => {
          const marker = new google.maps.Marker({
            position: restaurant.geometry.location,
            map: this.map,
            title: restaurant.name,
          })
          this.markers.push(marker)
        })
      }
    },

    watch: {
      // Watch for changes in restaurant_list_props
      restaurant_list_props(newVal) {
        if( newVal.status === 'ok' )
        {
          this.restaurant_list = newVal.results;
          this.addMarkers();
        }
        else
        {
          this.showErrorModal = true;
          this.errorMessage = newVal.error_description;
        }
        console.log(this.errorMessage);
        
      }
    }
  });
</script>
