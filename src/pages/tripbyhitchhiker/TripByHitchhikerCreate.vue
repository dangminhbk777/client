<template>
  <div>
    <div class="row">
      <div class="col-xl-6" id="information-driver">
        <div class="m-portlet m-portlet--brand m-portlet--head-solid-bg m-portlet--bordered">
          <div class="m-portlet__head">
            <div class="m-portlet__head-caption">
              <div class="m-portlet__head-title">
                <h3 class="m-portlet__head-text">
                  Nhập thông tin chuyến đi
                </h3>
              </div>
            </div>
          </div>
          <form class="m-form m-form--fit m-form--label-align-right">
            <div class="m-portlet__body">
              <div class="form-group m-form__group row">
                <label class="col-4 col-form-label">Thời gian xuất phát</label>
                <div class="col-8">
                  <input class="form-control m-input" type="datetime-local" v-model="position.time">
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label class="col-4 col-form-label">Số chỗ trống</label>
                <div class="col-8">
                  <input class="form-control m-input" type="number" v-model="position.numberSeat">
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label class="col-4 col-form-label">Giá dự kiến (VND)</label>
                <div class="col-8">
                  <input class="form-control m-input" type="number" v-model="position.price">
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label class="col-4 col-form-label">Chú thích</label>
                <div class="col-8">
                  <textarea class="form-control m-input" rows="3" v-model="position.note"></textarea>
                </div>
              </div>
            </div>
            <div class="m-portlet__foot m-portlet__foot--fit">
              <div class="m-form__actions text-right">
                  <button type="button" class="btn btn-primary margin-10" v-on:click="postNewTrip">Submit</button>
                  <button type="reset" class="btn btn-secondary">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-xl-6" id="information-map">
        <div class="flex-parent viewport-full relative scroll-hidden">
          <div class="flex-child flex-child--grow bg-darken10 viewport-twothirds viewport-full-mm mapboxgl-map" id="map">
            <div class="mapboxgl-canary" style="visibility: hidden;">
            </div>
            <div class="mapboxgl-control-container">
              <div class="mapboxgl-ctrl-top-left">
                <div class="mapboxgl-ctrl-directions mapboxgl-ctrl">
                  <div class="directions-control directions-control-inputs">
                    <div class="mapbox-directions-component mapbox-directions-inputs">
                      <div class="mapbox-directions-component-keyline">
                        <div class="mapbox-directions-origin">
                          <label class="mapbox-form-label">
                            <span class="directions-icon directions-icon-depart"></span>
                          </label>
                          <div id="mapbox-directions-origin-input"><div class="mapboxgl-ctrl-geocoder"><span class="geocoder-icon geocoder-icon-search"></span><input type="text" placeholder="Choose a starting place"><ul class="suggestions" style="display: none;"></ul><div class="geocoder-pin-right"><button class="geocoder-icon geocoder-icon-close"></button><span class="geocoder-icon geocoder-icon-loading"></span></div></div></div>
                        </div>

                        <button class="directions-icon directions-icon-reverse directions-reverse js-reverse-inputs" title="Reverse origin &amp; destination">
                        </button>

                        <div class="mapbox-directions-destination">
                          <label class="mapbox-form-label">
                            <span class="directions-icon directions-icon-arrive"></span>
                          </label>
                          <div id="mapbox-directions-destination-input"><div class="mapboxgl-ctrl-geocoder"><span class="geocoder-icon geocoder-icon-search"></span><input type="text" placeholder="Choose destination"><ul class="suggestions" style="display: none;"></ul><div class="geocoder-pin-right"><button class="geocoder-icon geocoder-icon-close"></button><span class="geocoder-icon geocoder-icon-loading"></span></div></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../services/http-common.js';
  import Select from '../../components/selects/SelectPlaceHolder';

  export default {
    name: "TripByHitchhikerCreate",
    components: {
      'select-place-holder': Select
    },
    data() {
      return {
        position: {
          startLongitude: null,
          endLongitude: null,
          startLatitude: null,
          endLatitude: null,
          time: null,
          numberSeat: null,
          price: null,
          note: null,
          descriptionOrigin: null,
          descriptionDestination: null,
        }
      }
    },
    methods: {
      postNewTrip: function() {
        let vm = this;
        http.post('/trip-by-hitchhiker/new-trip', this.position)
            .then(response => {
              console.log(response);
              vm.position = null;
            })
            .catch(e => {
              console.error(e);
            });
      },
      reset: function () {
        this.position.startLongitude = null;
        this.position.endLongitude = null;
        this.position.startLatitude = null;
        this.position.endLatitude = null;
        this.position.time = null;
        this.position.numberSeat = null;
        this.position.price = null;
        this.position.note = null;
        this.position.descriptionOrigin = null;
        this.position.descriptionDestination = null;
      },
      setupSize: function (){
        let offsetHeight = document.getElementById('information-driver').offsetHeight;
        let offsetWidth = document.getElementById('information-driver').offsetWidth;
        document.getElementById('information-map').style.height = offsetHeight + 'px';
        document.getElementById('information-map').style.width = offsetWidth + 'px';
        // setup current time
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        if (month < 10) {
          month = '0' + month;
        }
        let dateTime = today.getDate();
        if (dateTime < 10) {
          dateTime = '0' + dateTime;
        }
        let hour = today.getHours();
        if (hour < 10) {
          hour = '0' + hour;
        }
        let minute = today.getMinutes();
        if (minute < 10) {
          minute = '0' + minute;
        }
        this.position.time = year + '-' + month + '-' + dateTime + 'T' + hour + ':' + minute + ":00";
      },
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
              vm.position.descriptionOrigin = e.target.value;
            } else {
              vm.position.descriptionDestination = e.target.value;
            }
            console.log(vm.position.descriptionOrigin);
            console.log(vm.position.descriptionDestination);
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
              vm.position.startLatitude = e.feature.geometry.coordinates[0];
              vm.position.startLongitude = e.feature.geometry.coordinates[1];
            }
          });
          directions.on('destination', function (e) {
            if (e != null) {
              vm.position.endLatitude = e.feature.geometry.coordinates[0];
              vm.position.endLongitude = e.feature.geometry.coordinates[1];
            }
          });
        });
        window.onresize = function() {
          vm.setupSize();
        };
      }
    },
    mounted() {
      this.setupSize();
      this.initMap();
    }
  }
</script>

<style scoped>
  .margin-10 {
    margin: 0 10px 0 10px;
  }
</style>
