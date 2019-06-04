<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="m-portlet m-portlet--mobile">
        <!-- HEAD: BEGIN -->
        <div class="m-portlet__head">
          <div class="m-portlet__head-caption">
            <div class="m-portlet__head-title">
              <h3 class="m-portlet__head-text">
                Chi tiết chuyến đi
              </h3>
            </div>
          </div>
          <div class="m-portlet__head-tools">
            <ul class="m-portlet__nav">
              <li class="m-portlet__nav-item">
                <button v-if="!editFlag" v-on:click="actionUpdate" class="m-portlet__nav-link btn btn-info m-btn m-btn--custom">
                  Chỉnh sửa
                </button>
                <button v-if="editFlag" v-on:click="actionCancel" class="m-portlet__nav-link btn btn-warning m-btn m-btn--custom" style="margin-right: 5px">
                  Hủy bỏ
                </button>
                <button v-if="editFlag" v-on:click="updateTrip" class="m-portlet__nav-link btn btn-brand m-btn m-btn--custom">
                  Gửi thông tin
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
              <div class="m-widget4">
                <div class="m-widget4__item">
                  <div class="m-widget4__ext">
                    <span class="m-widget4__icon">
                      <i class="flaticon-lock m--font-brand"></i>
                    </span>
                  </div>
                  <div class="m-widget4__info">
                    <span class="m-widget4__text">
                      <span class="text-dark">Mã chuyến đi</span>&nbsp;&nbsp;{{tripDetail.driverId}}
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
                      <span class="text-dark">Tên tài xế</span>&nbsp;&nbsp;{{tripDetail.username}}
                    </span>
                  </div>
                </div>
                <div class="m-widget4__item">
                  <div class="m-widget4__ext">
                    <span class="m-widget4__icon">
                      <i class="flaticon-calendar-with-a-clock-time-tools m--font-brand"></i>
                    </span>
                  </div>
                  <div class="m-widget4__info">
                    <span class="m-widget4__text">
                      <div v-if="!editFlag">
                        <span class="text-dark">Thời gian xuất phát</span>&nbsp;&nbsp;{{timeFake}}
                      </div>
                      <div v-else class="m-form__group row">
                        <label class="col-6 col-form-label text-dark">Thời gian xuất phát</label>
                        <div class="col-6">
                          <input class="form-control m-input" type="datetime-local" v-model="tripDetail.time">
                        </div>
                      </div>
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
                      <span class="text-dark">Số điện thoại</span>&nbsp;&nbsp;{{tripDetail.phone}}
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
                      <span class="text-dark">Đánh giá</span>&nbsp;&nbsp;{{tripDetail.star}} / 5
                      <i class="flaticon-star" style="color: darkgrey;"></i>
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
                      <div v-if="!editFlag">
                        <span class="text-dark">Số chỗ còn trống</span>&nbsp;&nbsp;{{tripDetail.numberSeat}}
                      </div>
                      <div v-else class="m-form__group row">
                        <label class="col-6 col-form-label text-dark">Số chỗ còn trống</label>
                        <div class="col-6">
                          <input class="form-control m-input" type="number" min="0" v-model="tripDetail.numberSeat">
                        </div>
                      </div>
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
                      <div v-if="!editFlag">
                        <span class="text-dark">Giá</span>&nbsp;&nbsp;{{tripDetail.price}}.000 (VNĐ)
                      </div>
                      <div v-else class="m-form__group row">
                        <label class="col-6 col-form-label text-dark">Giá (VNĐ)</label>
                        <div class="col-6">
                          <input class="form-control m-input" type="number" min="0" v-model="tripDetail.price">
                        </div>
                      </div>
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
                        <span class="text-dark">Chú thích</span>&nbsp;&nbsp;
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
                <button v-on:click="clearRouteStep" class="m-portlet__nav-link btn btn-primary m-btn m-btn--custom __btn-clear">
                  Xóa lộ trình
                </button>
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
        editFlag: false,
        timeFake: null,
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
        dataBackup: null,
        routeStep: [],
        //urlPageListRegister:  'localhost:4200/trip-by-driver/' + this.driverId + "/list-register",
        indexWayPoint: 0,
        map: null,
        directions: null,
        steps: []
      }
    },
    methods: {
      initMap: function () {
        let self = this;
        mapboxgl.accessToken = MAPBOX_KEY;
        self.map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [105.859979061677,21.007181634883864],
          zoom: 12
        });
        self.directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          steps: false,
          geometries: 'polyline',
          profile: 'driving',
          interactive: true,
          controls: {
            inputs: true,
            instructions: false,
            profileSwitcher: false
          }
        });
        self.map.addControl(self.directions, 'top-left');

        self.map.on('click', function (e) {
          if (self.indexWayPoint > 5) {
            toastr.warning('Max route step');
          } else {
            self.map.addLayer({
              id: 'step' + self.indexWayPoint,
              type: 'circle',
              source: {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: [{
                    type: 'Feature',
                    properties: {
                      id: 'marker',
                    },
                    geometry: {
                      type: 'Point',
                      coordinates: [e.lngLat.lng, e.lngLat.lat]
                    }
                  }]
                }
              },
              paint: {
                'circle-radius': 10,
                'circle-color': '#f30'
              }
            });
            self.directions.addWaypoint(self.indexWayPoint, [e.lngLat.lng,e.lngLat.lat]);
            self.routeStep.push({
              longitude: e.lngLat.lng,
              latitude: e.lngLat.lat
            });
            self.indexWayPoint = self.indexWayPoint + 1;
          }
        });
        self.map.on('load', function() {
          let initSearch = true;
          $(".mapboxgl-ctrl-geocoder").on('change', function (e) {
            let id = $(this).parent('div').attr('id');
            if (id === "mapbox-directions-origin-input" && e.target.value != null && initSearch) {
              axios.get(URL_MAPBOX_API + self.tripDetail.startLongitude + ',' + self.tripDetail.startLatitude
                  + '.json?types=poi&access_token=' + MAPBOX_KEY)
                  .then(response => {
                    e.target.value = response.data.features[0].place_name;
                    initSearch = false;
                  })
                  .catch(e => {
                    this.errors.push(e);
                    initSearch = false;
                  });
            } else if (e.target.value != null && initSearch) {
              axios.get(URL_MAPBOX_API + self.tripDetail.endLongitude + ',' + self.tripDetail.endLatitude + '.json?types=poi&access_token=' + MAPBOX_KEY)
                  .then(response => {
                    e.target.value = response.data.features[0].place_name;
                    initSearch = false;
                  })
                  .catch(e => {
                    this.errors.push(e);
                    initSearch = false;
                  });
            }
          });
          self.directions.setOrigin([self.tripDetail.startLongitude, self.tripDetail.startLatitude]);

          // Set route step your trip
          self.routeStep.forEach(function (element) {
            self.map.addLayer({
              id: 'step' + self.indexWayPoint,
              type: 'circle',
              source: {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: [{
                    type: 'Feature',
                    properties: {
                      id: 'marker',
                      "marker-symbol": "monument",
                      "title": "Mapbox DC",
                    },
                    geometry: {
                      type: 'Point',
                      coordinates: [element.longitude, element.latitude]
                    }
                  }]
                }
              },
              paint: {
                'circle-radius': 3,
                'circle-color': '#000'
              }
            });
            self.directions.addWaypoint(self.indexWayPoint, [element.longitude, element.latitude]);
            self.indexWayPoint = self.indexWayPoint + 1;
          });

          self.directions.setDestination([self.tripDetail.endLongitude, self.tripDetail.endLatitude]);
          self.directions.on('destination', function (e) {
            if (e != null) {
              if (self.directions.getDestination().geometry.coordinates[0].toString() !== self.tripDetail.endLongitude
                  && self.directions.getDestination().geometry.coordinates[1].toString() !== self.tripDetail.endLatitude) {
                self.directions.setDestination([self.tripDetail.endLongitude, self.tripDetail.endLatitude]);
                initSearch = true;
              }
            }
          });
        });
        window.onresize = function() {
          self.map.resize();
        };
      },
      getTripDetail: function () {
        let self = this;
        http.get('/trip-by-driver/' + this.driverId)
            .then(response => {
              self.tripDetail = JSON.parse(response.data.metadata);
              self.tripDetail.images = JSON.parse(this.tripDetail.images);
              self.setupTime();
              self.dataBackup = self.copyObject(self.tripDetail);
              self.initMap();
            })
            .catch(e => {
              console.error(e);
            });
      },
      getRouteStep: function() {
        let self = this;
        http.get('/trip-by-driver/' + this.driverId + '/route-step')
            .then(response => {
              if (response.data.metadata) {
                self.steps = JSON.parse(JSON.parse(response.data.metadata).steps);
                self.routeStep = self.routeStep.concat(self.steps);
              }
            })
            .catch(e => {
              console.error(e);
            });
      },
      clearRouteStep: function () {
        let self = this;
        let index;
        for(index = 0; index < self.indexWayPoint; index++) {
          let nameRemove = 'step' + index;
          if (self.map.getLayer(nameRemove)){
            self.map.removeLayer(nameRemove);
          }
          if (self.map.getSource(nameRemove)){
            self.map.removeSource(nameRemove);
          }
          self.directions.removeWaypoint(self.indexWayPoint - index - 1);
        }
        self.indexWayPoint = 0;
        self.routeStep = [];
      },
      actionUpdate: function() {
        let self = this;
        self.editFlag = true;
      },
      actionCancel: function () {
        let self = this;
        self.editFlag = false;
        self.tripDetail = self.dataBackup;
      },
      updateTrip: function () {
        let self = this;
        let requestBody = {
          driverId: self.driverId,
          time: self.tripDetail.time,
          numberSeat: self.tripDetail.numberSeat,
          price: self.tripDetail.price,
          note: null,
          routeStep: JSON.stringify(self.routeStep)
        };
        http.post('/trip-by-driver/update-trip', requestBody)
            .then(response => {
              toastr.success('Cập nhật thông tin chuyến đi thành công');
              self.editFlag = false;
              self.dataBackup = self.copyObject(self.tripDetail);
              self.setupTime();
            })
            .catch(e => {
              console.error(e);
              toastr.error('Cập nhật thông tin chuyến đi thất bại');
            });
      },
      setupTime: function() {
        // setup current time
        let self = this;
        let timeStart = new Date(self.tripDetail.time);
        let year = timeStart.getFullYear();
        let month = timeStart.getMonth() + 1;
        if (month < 10) {
          month = '0' + month;
        }
        let dateTime = timeStart.getDate();
        if (dateTime < 10) {
          dateTime = '0' + dateTime;
        }
        let hour = timeStart.getHours();
        if (hour < 10) {
          hour = '0' + hour;
        }
        let minute = timeStart.getMinutes();
        if (minute < 10) {
          minute = '0' + minute;
        }
        self.tripDetail.time = year + '-' + month + '-' + dateTime + 'T' + hour + ':' + minute + ":00";
        self.timeFake = hour + ':' + minute + ' ngày ' + dateTime + ' tháng ' + month + ' năm ' + year;
      },
      copyObject: function (object) {
        return JSON.parse(JSON.stringify(object));
      }
    },
    mounted() {
      this.getRouteStep();
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
  .__btn-clear {
    top: 10px;
    left: 85%;
    position: absolute;
    display: block;
    z-index: 90;
  }
  .flaticon-star:before {
    content: "\f1b3";
    width: 10px !important;
    height: 10px !important;
  }
</style>
