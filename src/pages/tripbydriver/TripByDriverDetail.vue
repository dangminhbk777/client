<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="m-portlet m-portlet--mobile">
          <!-- HEAD: BEGIN -->
          <div class="m-portlet__head">
            <div class="m-portlet__head-caption">
              <div class="m-portlet__head-title">
                <h3 class="m-portlet__head-text">
                  TRIP Data Detail<small>data loaded from remote service</small>
                </h3>
              </div>
            </div>
          </div>
          <!-- HEAD: END -->
          <!-- BODY: BEGIN -->
          <div class="m-portlet__body">
            <div class="row">
              <div class="col-lg-5">
                {{tripDetail}}
              </div>
              <div class="col-lg-7">
                <slide-show :images="tripDetail.images"></slide-show>
              </div>
            </div>
            <div class="row __padding-top-bottom">
              <div class="col-lg-12">
                <!-- MAP: BEGIN -->
                <div id="information-map">
                  <div class="flex-parent relative scroll-hidden">
                    <div id="map" class="flex-child flex-child--grow bg-darken10 viewport-twothirds viewport-full-mm mapboxgl-map" >
                      <div class="mapboxgl-canary" style="visibility: hidden;">
                      </div>
                      <!-- MAP BOX CONTAINER: BEGIN -->
                      <div class="mapboxgl-control-container">
                        <div class="mapboxgl-ctrl-top-left">
                          <div class="mapboxgl-ctrl-directions mapboxgl-ctrl">
                            <div class="directions-control directions-control-inputs">
                              <div class="mapbox-directions-component mapbox-directions-inputs">
                                <div class="mapbox-directions-component-keyline">
                                  <!-- INPUT ORIGIN: BEGIN -->
                                  <div class="mapbox-directions-origin">
                                    <label class="mapbox-form-label">
                                      <span class="directions-icon directions-icon-depart"></span>
                                    </label>
                                    <div id="mapbox-directions-origin-input">
                                      <div class="mapboxgl-ctrl-geocoder">
                                        <span class="geocoder-icon geocoder-icon-search"></span>
                                        <input type="text" placeholder="Choose a starting place">
                                        <ul class="suggestions" style="display: none;"></ul>
                                        <div class="geocoder-pin-right">
                                          <button class="geocoder-icon geocoder-icon-close"></button>
                                          <span class="geocoder-icon geocoder-icon-loading"></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <!-- INPUT ORIGIN: END -->
                                  <button class="directions-icon directions-icon-reverse directions-reverse js-reverse-inputs" title="Reverse origin &amp; destination">
                                  </button>
                                  <!-- INPUT DESTINATION: BEGIN -->
                                  <div class="mapbox-directions-destination">
                                    <label class="mapbox-form-label">
                                      <span class="directions-icon directions-icon-arrive"></span>
                                    </label>
                                    <div id="mapbox-directions-destination-input">
                                      <div class="mapboxgl-ctrl-geocoder">
                                        <span class="geocoder-icon geocoder-icon-search"></span>
                                        <input type="text" placeholder="Choose destination">
                                        <ul class="suggestions" style="display: none;"></ul>
                                        <div class="geocoder-pin-right">
                                          <button class="geocoder-icon geocoder-icon-close"></button>
                                          <span class="geocoder-icon geocoder-icon-loading"></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <!-- INPUT DESTINATION: END -->
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- MAP BOX CONTAINER: END -->
                    </div>
                  </div>
                </div>
                <!-- MAP: END -->
              </div>
            </div>
          </div>
          <!-- BODY: END -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../services/http-common.js';
  import SlideShow from '../../components/other/SlideShow.vue';

  export default {
    name: "TripByDriverDetail",
    components: {
      "slide-show": SlideShow
    },
    props: {
      driverId: {
        type: String,
        default: null
      },
    },
    data() {
      return {
        tripDetail: {
          userId: null,
          name: null,
          avatar: null,
          phone: null,
          star: null,
          createdAt: null,
          driverId: null,
          startLongitude: null,
          endLongitude: null,
          startLatitude: null,
          endLatitude: null,
          time: null,
          typeVehicle: null,
          numberSeat: null,
          images: null,
          price: null,
          isShipping: null,
          note: null
        }
      }
    },
    methods: {
      initMap: function () {
        let vm = this;
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuZ21pbmhiazc3NyIsImEiOiJjanRsM2ltZmwzMm81NDVtdWhhM3RhYmJsIn0.6VYmuY3xP3IgEvT_Vc3pRQ';
        let map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [105.859979061677,21.007181634883864],
          zoom: 12
        });
        let directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          steps: false,
          geometries: 'polyline',
          controls: {instructions: false}
        });
        map.addControl( directions, 'top-left');

        // After the map style has loaded on the page, add a source layer and default
        // styling for a single point.
        map.on('load', function() {
          $(".mapboxgl-ctrl-geocoder").on('change', function (e) {
            let id = $(this).parent('div').attr('id');
            if (id === "mapbox-directions-origin-input") {
              vm.descriptionOrigin = e.target.value;
            } else {
              vm.descriptionDestination = e.target.value;
            }
            console.log(vm.descriptionOrigin);
            console.log(vm.descriptionDestination);
          });

          // Listen for the `directions.route` event that is triggered when a user
          // makes a selection and add a symbol that matches the result.
          directions.on('route', function (ev) {
            console.log(ev.route);
            // let styleSpec = ev.route;
            // let styleSpecBox = document.getElementById('json-response');
            // let styleSpecText = JSON.stringify(styleSpec, null, 2);
            // let syntaxStyleSpecText = syntaxHighlight(styleSpecText);
            // styleSpecBox.innerHTML = syntaxStyleSpecText;
          });
          directions.on('origin', function (e) {
            if (e !=  null) {
              vm.startLatitude = e.feature.geometry.coordinates[0];
              vm.startLongitude = e.feature.geometry.coordinates[1];
            }
          });
          directions.on('destination', function (e) {
            if (e != null) {
              vm.endLatitude = e.feature.geometry.coordinates[0];
              vm.endLongitude = e.feature.geometry.coordinates[1];
            }
          });
        });
        window.onresize = function() {
          map.resize();
        };
      }
    },
    mounted() {
      let vm = this;
      http.get('/trip-by-driver/' + this.driverId)
          .then(response => {
            this.tripDetail = JSON.parse(response.data.metadata);
            vm.initMap();
          })
          .catch(e => {
            console.error(e);
          });
    }
  }
</script>

<style scoped>
  .carousel-inner img {
    width: 100%;
    height: 100%;
  }
  .__padding-top-bottom {
    padding-top: 2.2rem;
  }
  #map, #information-map {
    min-height: 350px;
    max-height: 450px;
  }
</style>
