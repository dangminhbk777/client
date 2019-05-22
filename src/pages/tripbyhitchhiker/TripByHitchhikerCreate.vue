<template>
  <div>
    <div class="row">
      <div class="col-xl-6" id="information-driver">
        <div class="m-portlet m-portlet--brand m-portlet--bordered">
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
                  <input class="form-control m-input" type="number" min="1" v-model="position.numberSeat">
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label class="col-4 col-form-label">Giá dự kiến (VND)</label>
                <div class="col-8">
                  <input class="form-control m-input" type="number" min="1" v-model="position.price">
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
                  <button type="button" class="btn btn-primary margin-10" v-on:click="postNewTrip">Gửi đăng ký</button>
                  <button type="reset" class="btn btn-secondary">Hủy bỏ</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-xl-6" id="information-map">
        <div class="flex-parent viewport-full relative scroll-hidden" style="max-height: 510px">
          <div class="flex-child flex-child--grow bg-darken10 viewport-twothirds viewport-full-mm mapboxgl-map" id="map">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import toastr from '../../services/toastr.js';
  import http from '../../services/http-common.js';
  import { URL_MAPBOX_API, MAPBOX_KEY } from '../../services/variables.js';
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
          description: null,
          descriptionOrigin: null,
          descriptionDestination: null,
        }
      }
    },
    methods: {
      postNewTrip: function() {
        let self = this;
        self.position.description = self.position.descriptionOrigin + ' &#8658; '
            + self.position.descriptionDestination;
        http.post('/trip-by-hitchhiker/new-trip', this.position)
            .then(response => {
              self.position = null;
              toastr.success('Tạo chuyến đi tìm xe thành công');
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
        this.position.description = null;
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
        let self = this;
        mapboxgl.accessToken = MAPBOX_KEY;
        let map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v10',
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
        map.on('load', function() {
          $(".mapboxgl-ctrl-geocoder").on('change', function (e) {
            let id = $(this).parent('div').attr('id');
            if (id === "mapbox-directions-origin-input" && e.target.value != null) {
              axios.get(URL_MAPBOX_API + e.target.value + '.json?types=poi&access_token=' + MAPBOX_KEY)
                  .then(response => {
                    e.target.value = response.data.features[0].place_name;
                    self.position.descriptionOrigin = e.target.value;
                  })
                  .catch(e => {
                    console.error(e);
                  });
            } else if (e.target.value != null) {
              axios.get(URL_MAPBOX_API + e.target.value + '.json?types=poi&access_token=' + MAPBOX_KEY)
                  .then(response => {
                    e.target.value = response.data.features[0].place_name;
                    self.position.descriptionDestination = e.target.value;
                  })
                  .catch(e => {
                    console.error(e);
                  });
            }
          });

          directions.on('route', function (ev) {
            // console.log(ev.route);
          });
          directions.on('origin', function (e) {
            if (e !=  null) {
              self.position.startLongitude = e.feature.geometry.coordinates[0];
              self.position.startLatitude = e.feature.geometry.coordinates[1];
            }
          });
          directions.on('destination', function (e) {
            if (e != null) {
              self.position.endLongitude = e.feature.geometry.coordinates[0];
              self.position.endLatitude = e.feature.geometry.coordinates[1];
            }
          });
        });
        window.onresize = function() {
          self.setupSize();
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
  #map, #information-map {
    max-height: 510px;
  }
</style>
