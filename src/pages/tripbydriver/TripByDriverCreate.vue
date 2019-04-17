<template>
  <div class="row">
    <!-- FORM INFORMATION: BEGIN -->
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
                <input class="form-control m-input" type="datetime-local" v-model="time">
              </div>
            </div>
            <div class="form-group m-form__group row">
              <label class="col-4 col-form-label">Phương tiện</label>
              <div class="col-8">
                <select-place-holder
                  :options="select2.options"
                  :placeHolder="select2.placeHolder"
                  :allowClear="select2.allowClear"
                  v-model="select2.selected">
                  <option disabled value="0">Select One</option>
                </select-place-holder>
              </div>
            </div>
            <div class="form-group m-form__group row">
              <label class="col-4 col-form-label">Số chỗ trống</label>
              <div class="col-8">
                <input class="form-control m-input" type="number" v-model="numberSeat">
              </div>
            </div>
            <div class="form-group m-form__group row">
              <label class="col-4 col-form-label">Giá dự kiến (VND)</label>
              <div class="col-8">
                <input class="form-control m-input" type="number" v-model="price">
              </div>
            </div>
            <div class="form-group m-form__group row">
              <label for="image" class="col-4 col-form-label">Ảnh mô tả</label>
              <div class="col-8">
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="image" v-on:change="onImageChange" multiple>
                  <label class="custom-file-label" for="image">Chọn ảnh</label>
                </div>
                <div v-if="previewImages">
                  <img v-for="image in previewImages" :src="image" class="img-responsive mr-10 overview-img">
                </div>
              </div>
            </div>
            <div class="form-group m-form__group row">
              <label class="col-4 col-form-label">Chú thích</label>
              <div class="col-8">
                <textarea class="form-control m-input" rows="3" v-model="note"></textarea>
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
    <!-- FORM INFORMATION: END -->
    <!-- MAP: BEGIN -->
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
    <!-- MAP: END -->
  </div>
</template>

<script>
  import http from '../../services/http-common.js';
  import Select from '../../components/selects/SelectPlaceHolder';

  export default {
    name: "TripByDriverCreate",
    components: {
      'select-place-holder': Select
    },
    data() {
      return {
        // Field request
        startLongitude: null,
        endLongitude: null,
        startLatitude: null,
        endLatitude: null,
        time: null,
        typeVehicle: null,
        numberSeat: null,
        price: null,
        isShipping: null,
        note: null,
        descriptionOrigin: null,
        descriptionDestination: null,
        // Form submit and show image
        previewImages: [],
        formData: new FormData(),
        select2: {
          allowClear: true,
          placeHolder: "Select One",
          options: [
            { id: '1', text: 'Xe máy' },
            { id: '2', text: 'Ô tô (nhỏ)' },
            { id: '3', text: 'Ô tô (lớn)' }
          ],
          selected: null,
        },
      }
    },
    methods: {
      onImageChange: function(e) {
        let vm = this;
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
          return;
        }
        Array.from(files).forEach(function(file) {
          vm.formData.append("images[]", file);
          vm.createImage(file);
        });
      },
      createImage: function(file) {
        let reader = new FileReader();
        let vm = this;
        reader.onload = (e) => {
          vm.previewImages.push(e.target.result);
        };
        reader.readAsDataURL(file);
        vm.setupSize();
      },
      postNewTrip: function() {
        let vm = this;
        this.setDataToFormRequest();
        http.post('/trip-by-driver/new-trip', this.formData)
            .then(response => {
              console.log(response);
              vm.formData = new FormData();
            })
            .catch(e => {
              console.error(e);
              vm.formData = new FormData();
            });
      },
      setDataToFormRequest: function () {
        this.typeVehicle = this.select2.selected;
        this.formData.append("startLongitude", this.startLongitude);
        this.formData.append("endLongitude", this.endLongitude);
        this.formData.append("startLatitude", this.startLatitude);
        this.formData.append("endLatitude", this.endLatitude);
        this.formData.append("time", this.time);
        this.formData.append("typeVehicle", this.typeVehicle);
        this.formData.append("numberSeat", this.numberSeat);
        this.formData.append("price", this.price);
        this.formData.append("isShipping", this.isShipping);
        this.formData.append("note", this.note);
      },
      setupSize: function (){
        // let offsetHeight = document.getElementById('information-driver').offsetHeight;
        let offsetWidth = document.getElementById('information-driver').offsetWidth;
        // document.getElementById('information-map').style.maxHeight = offsetHeight + 'px';
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
        this.time = year + '-' + month + '-' + dateTime + 'T' + hour + ':' + minute + ":00";
      },
      initMap: function () {
        let vm = this;
        console.log(this);
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
  .mr-10 {
    margin: 10px 10px 10px 10px;
  }
  .overview-img {
    height: 70px;
    width: 90px;
  }
  #map, #information-map {
    max-height: 650px;
  }
</style>
