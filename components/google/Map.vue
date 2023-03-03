<template>
  <div>
    <div ref="map" id="map" class="container"></div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {{ errorMessage }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

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
        infoWindow: null,
        errorMessage: '',
        newLat: 0.0,
        newLng: 0.0
      };
    },

    methods: {
      addMarkersandInfo() {
        // clear markers
        this.markers.forEach(marker => marker.setMap(null))

        this.map = new google.maps.Map(this.$refs.map, {
          center: { lat: this.newLat, lng: this.newLng },
          zoom: 14,
        });
        
        this.restaurant_list.forEach((restaurant) => {
          // add new markers
          const marker = new google.maps.Marker({
            position: restaurant.geometry.location,
            map: this.map,
            title: restaurant.name,
          })
          this.markers.push(marker)

          // add info windows


          // click marker
          marker.addListener('click', () => {
            if (this.infoWindow) {
              this.infoWindow.close();
            }

            this.infoWindow = new google.maps.InfoWindow({
              maxWidth: 200,
              content: `
                <div class="info-window">
                  <div class="info-window-header display-flex">
                    <h5 class="info-window-title text-align-center">${restaurant.name}</h5>
                  </div>
                  <div class="text-align-center">
                    <p class="info-window-address">${restaurant.vicinity}</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=${restaurant.geometry.location.lat},${restaurant.geometry.location.lng}" target="_blank">View on Google Maps</a>
                  </div>
                </div>
              `
            });
            this.infoWindow.open(this.map, marker);
          });
        })
      }
    },

    watch: {
      // Watch for changes in restaurant_list_props
      restaurant_list_props(newVal) {
        if( newVal.status === 'ok' )
        {
          this.restaurant_list = newVal.results;
          this.newLat = newVal.lat,
          this.newLng = newVal.lng
          this.addMarkersandInfo();
        }
        else
        {
          this.showErrorModal = true;
          this.errorMessage = newVal.error_description;
          const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
            keyboard: false
          })
          myModal.show();
        }
        console.log(this.errorMessage);
        
      }
    }
  });
</script>
