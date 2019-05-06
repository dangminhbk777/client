<template>
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
          <div class="m-portlet__head-tools">
            <ul class="m-portlet__nav">
              <li class="m-portlet__nav-item">
                <button v-if="showButton === '03'" v-on:click="redirectListRegister" class="m-portlet__nav-link btn btn-primary m-btn m-btn--custom">
                  Show list register
                </button>
                <button v-else-if="showButton === '01'" v-on:click="registerTrip" class="m-portlet__nav-link btn btn-primary m-btn m-btn--custom">
                  Register trip
                </button>
                <button v-else class="m-portlet__nav-link btn btn-primary m-btn m-btn--custom" disabled="disabled">
                  Registered
                </button>
              </li>
            </ul>
          </div>
        </div>
        <!-- HEAD: END -->
        <!-- BODY: BEGIN -->
        <div class="m-portlet__body">
          <div class="row">
            <div class="col-lg-6">
              <!--{{tripDetail}}-->
              <div class="m-widget4">
                <div class="m-widget4__item">
                  <div class="m-widget4__ext">
                    <span class="m-widget4__icon">
                      <i class="flaticon-lock m--font-brand"></i>
                    </span>
                  </div>
                  <div class="m-widget4__info">
                    <span class="m-widget4__text">
                      <span class="text-dark">ID</span>&nbsp;&nbsp;{{tripDetail.driverId}}
                    </span>
                  </div>
                </div>
                <div class="m-widget4__item">
                  <div class="m-widget4__ext">
                    <span class="m-widget4__icon">
                      <i class="flaticon-avatar m--font-brand"></i>
                    </span>
                  </div>
                  <div class="m-widget4__info">
                    <span class="m-widget4__text">
                      <span class="text-dark">Name</span>&nbsp;&nbsp;{{tripDetail.username}}
                    </span>
                  </div>
                </div>
                <div class="m-widget4__item">
                  <div class="m-widget4__ext">
                    <span class="m-widget4__icon">
                      <i class="flaticon-support m--font-brand"></i>
                    </span>
                  </div>
                  <div class="m-widget4__info">
                    <span class="m-widget4__text">
                        <span class="text-dark">Phone</span>&nbsp;&nbsp;{{tripDetail.phone}}
                    </span>
                  </div>
                </div>
                <div class="m-widget4__item">
                  <div class="m-widget4__ext">
                    <span class="m-widget4__icon">
                      <i class="flaticon-customer m--font-brand"></i>
                    </span>
                  </div>
                  <div class="m-widget4__info">
                    <span class="m-widget4__text">
                        <span class="text-dark">Quality service</span>&nbsp;&nbsp;{{tripDetail.star}}
                    </span>
                  </div>
                </div>
                <div class="m-widget4__item">
                  <div class="m-widget4__ext">
                    <span class="m-widget4__icon">
                      <i class="flaticon-users m--font-brand"></i>
                    </span>
                  </div>
                  <div class="m-widget4__info">
                    <span class="m-widget4__text">
                        <span class="text-dark">Number of seats</span>&nbsp;&nbsp;{{tripDetail.numberSeat}}
                    </span>
                  </div>
                </div>
                <div class="m-widget4__item">
                  <div class="m-widget4__ext">
                    <span class="m-widget4__icon">
                      <i class="flaticon-price-tag m--font-brand"></i>
                    </span>
                  </div>
                  <div class="m-widget4__info">
                    <span class="m-widget4__text">
                        <span class="text-dark">Price</span>&nbsp;&nbsp;{{tripDetail.price}}.000 (VNĐ)
                    </span>
                  </div>
                </div>
                <div class="m-widget4__item">
                  <div class="m-widget4__ext">
                    <span class="m-widget4__icon">
                      <i class="flaticon-notes m--font-brand"></i>
                    </span>
                  </div>
                  <div class="m-widget4__info">
                    <span class="m-widget4__text">
                        <span class="text-dark">Note</span>&nbsp;&nbsp;
                    </span>
                    <span class="m-widget4__text">
                        {{tripDetail.note}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <slide-show :images="tripDetail.images"
                          :type-image="path">
              </slide-show>
            </div>
          </div>
          <div class="row __padding-top">
            <div class="col-lg-12">
              <!-- MAP: BEGIN -->
              <div id="information-map">
                <div class="flex-parent relative scroll-hidden">
                  <div id="map" class="flex-child flex-child--grow bg-darken10 viewport-twothirds viewport-full-mm mapboxgl-map" >
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
</template>

<script>
  import axios from 'axios';
  import http from '../../services/http-common.js';
  import toastr from '../../services/toastr.js';
  import { URL_MAPBOX_API, MAPBOX_KEY } from '../../services/variables.js';
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
      path: {
        type: String,
        default: "/trip-by-driver/"
      }
    },
    data() {
      return {
        tripDetail: {
          userId: null,
          username: null,
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
          note: null,
          isSubmitter: null,
          status: null
        },
        //urlPageListRegister:  'localhost:4200/trip-by-driver/' + this.driverId + "/list-register",
        /*
        * show register trip : 01
        * show registered    : 02
        * show list register : 03
        * */
        showButton: null
      }
    },
    methods: {
      initMap: function () {
        let self = this;
        mapboxgl.accessToken = MAPBOX_KEY;
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
          interactive: false,
          controls: {
            inputs : true,
            instructions: false
          }
        });
        map.addControl( directions, 'top-left');
        map.on('load', function() {
          $(".mapboxgl-ctrl-geocoder").on('change', function (e) {
            let id = $(this).parent('div').attr('id');
            if (id === "mapbox-directions-origin-input" && e.target.value != null) {
              axios.get(URL_MAPBOX_API + self.tripDetail.startLongitude + ',' + self.tripDetail.startLatitude
                  + '.json?types=poi&access_token=' + MAPBOX_KEY)
                  .then(response => {
                    e.target.value = response.data.features[0].place_name;
                  })
                  .catch(e => {
                    this.errors.push(e)
                  });
            } else if (e.target.value != null) {
              axios.get(URL_MAPBOX_API + self.tripDetail.endLongitude + ',' + self.tripDetail.endLatitude + '.json?types=poi&access_token=' + MAPBOX_KEY)
                  .then(response => {
                    e.target.value = response.data.features[0].place_name;
                  })
                  .catch(e => {
                    this.errors.push(e)
                  });
            }
          });
          directions.setOrigin([self.tripDetail.startLongitude, self.tripDetail.startLatitude]);
          directions.setDestination([self.tripDetail.endLongitude, self.tripDetail.endLatitude]);
        });
        window.onresize = function() {
          map.resize();
        };
      },
      registerTrip: function () {
        http.post("trip-by-driver/register-with-driver/" + this.driverId)
            .then(response => {
              console.log(JSON.parse(response.data.metadata));
              toastr.success('Register trip SUCCESS');
              this.showButton = "02";
            })
            .catch(e => {
              console.error(e);
            });
      },
      getTripDetail: function () {
        let self = this;
        http.get('/trip-by-driver/status/' + this.driverId)
            .then(response => {
              let userDriver = JSON.parse(response.data.metadata);
              if (userDriver === null) {
                self.showButton = "01";
              } else if (userDriver.isSubmitter) {
                self.showButton = "03";
              } else {
                self.showButton = "02";
              }
            })
            .catch(e => {
              console.error(e);
            });
        http.get('/trip-by-driver/' + this.driverId)
            .then(response => {
              self.tripDetail = JSON.parse(response.data.metadata);
              self.tripDetail.images = JSON.parse(this.tripDetail.images);
              // check show button
              self.initMap();
            })
            .catch(e => {
              console.error(e);
            });
      },
      redirectListRegister() {
        window.location.href = "/trip-by-driver/" + this.driverId + "/list-register";
      }
    },
    mounted() {
      this.getTripDetail();
    }
  }
</script>

<style scoped>
  .carousel-inner img {
    width: 100%;
    height: 100%;
  }
  .__padding-top {
    padding-top: 2.2rem;
  }
  #map, #information-map {
    min-height: 350px;
    max-height: 450px;
  }
</style>
