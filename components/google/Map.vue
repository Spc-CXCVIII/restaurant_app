<template>
  <div>
    <div ref="map" id="map" class="container"></div>
    <div class="modal fade" id="errorModal" tabindex="-1" aria-labelledby="errorModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="errorModalLabel">Error</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {{ errorMessage }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { MarkerClusterer } from "@googlemaps/markerclusterer";
  import ErrorModal from '../ErrorModal.vue';


  export default Vue.extend({
    name: 'Map',
    data() {
      return {
        markers: Array<google.maps.Marker>(),
        infoWindow: new google.maps.InfoWindow,
        restaurant_list: Array<any>(),
        errorMessage: String,
        newLat: 0.0,
        newLng: 0.0
      };
    },
    components: { ErrorModal },
    
    // props from API
    props: {
      restaurant_list_props: {
        type: Object,
        default: () => {},
      }
    },

    // Create map after component is mounted
    async mounted() {
      const center: google.maps.LatLngLiteral = { lat: 13.736717, lng: 100.523186 };
      new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center,
        zoom: 10,
        gestureHandling : 'auto',
        streetViewControl: false,
      });
    },

    methods: {
      addMarkersandInfo() {
        // clear markers
        this.markers.forEach(marker => marker.setMap(null))
        this.markers = []

        // set map to new center
        const center: google.maps.LatLngLiteral = { lat: this.newLat, lng: this.newLng };
        let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center,
          zoom: 14,
          gestureHandling : 'auto',
          streetViewControl: false,
        });
        
        this.restaurant_list.forEach((restaurant: any) => {
          // add new markers
          const marker = new google.maps.Marker({
            position: restaurant.geometry.location,
            map: map,
            title: restaurant.name,
          })
          this.markers.push(marker)

          // click marker
          marker.addListener('click', () => {
            if (this.infoWindow) {
              this.infoWindow.close();
            }
            
            // add info window
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
            this.infoWindow.open(map, marker);
          });

          // add marker clusterer
          new MarkerClusterer({
            map: map,
            markers: this.markers,
          })
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
          this.errorMessage = newVal.error_description;
          $('#errorModal').modal('show');
        }

      }
    }
  });
</script>
