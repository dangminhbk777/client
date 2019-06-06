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
                <div class="__show-actions" v-if="showButton === '03'">
                  <button v-on:click="redirectListRegister" class="m-portlet__nav-link btn btn-primary m-btn m-btn--custom">
                    Danh sách đăng ký
                  </button>
                </div>
                <div class="__show-actions" v-else-if="showButton === '01'">
                  <a href="#" class="btn btn-outline-info m-btn m-btn--icon" v-on:click="showChat">
                    <span>
                      <i class="fa flaticon-chat-1"></i>
                      <span>Nhắn tin</span>
                    </span>
                  </a>&nbsp;
                  <button v-on:click="registerTrip" class="m-portlet__nav-link btn btn-primary m-btn m-btn--custom">
                    Đăng ký
                  </button>
                </div>
                <div class="__show-actions" v-else-if="showButton === '04'">
                  <a href="#" class="btn btn-outline-info m-btn m-btn--icon" v-on:click="showChat">
                    <span>
                      <i class="fa flaticon-chat-1"></i>
                      <span>Nhắn tin</span>
                    </span>
                  </a>&nbsp;
                  <button class="m-portlet__nav-link btn btn-primary m-btn m-btn--custom" disabled="disabled">
                    Đã được chấp nhận
                  </button>
                </div>
                <div class="__show-actions" v-else>
                  <a href="#" class="btn btn-outline-info m-btn m-btn--icon" v-on:click="showChat">
                    <span>
                      <i class="fa flaticon-chat-1"></i>
                      <span>Nhắn tin</span>
                    </span>
                  </a>&nbsp;
                  <button class="m-portlet__nav-link btn btn-primary m-btn m-btn--custom" disabled="disabled">
                    Đã đăng ký
                  </button>
                </div>
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
                      <span class="text-dark">Mã chuyến đi</span>&nbsp;&nbsp;{{tripDetail.hitchhikerId}}
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
                      <span class="text-dark">Tên người đi chung</span>&nbsp;&nbsp;{{tripDetail.username}}
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
                        <span class="text-dark">Thời gian xuất phát</span>&nbsp;&nbsp;{{timeFake}}
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
                    </span>
                    <a href="javascript:;" v-on:click="showRating" style="float: right">Xem các đánh giá</a>
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
                        <span class="text-dark">Số chỗ cần</span>&nbsp;&nbsp;{{tripDetail.numberSeat}}
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
                        <span class="text-dark">Giá</span>&nbsp;&nbsp;{{tripDetail.price}}.000 (VNĐ)
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
    <modal-app v-if="hitchhikerId"
        title="DANH SÁCH ĐÁNH GIÁ"
        :showModal="showModal"
        :driverId="hitchhikerId"
        v-on:hideModal="showModal = $event">
    </modal-app>
  </div>
</template>

<script>
  import axios from 'axios';
  import http from '../../services/http-common.js';
  import toastr from '../../services/toastr.js';
  import { URL_MAPBOX_API, MAPBOX_KEY } from '../../services/variables.js';
  import Modal from '../../components/modals/ModalText.vue';

  export default {
    name: "TripByHitchhikerDetail",
    components: {
      'modal-app': Modal
    },
    props: {
      hitchhikerId: {
        type: String,
        default: null
      },
      path: {
        type: String,
        default: "/trip-by-hitchhiker/"
      },
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
          hitchhikerId: null,
          startLongitude: null,
          endLongitude: null,
          startLatitude: null,
          endLatitude: null,
          time: null,
          numberSeat: null,
          price: null,
          note: null,
          isSubmitter: null,
          status: null
        },
        /*
        * show register trip : 01
        * show registered    : 02
        * show list register : 03
        * */
        showButton: null,
        timeFake: null,
        showModal: false
      }
    },
    methods: {
      initMap: function () {
        let self = this;
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuZ21pbmhiazc3NyIsImEiOiJjanRsM2ltZmwzMm81NDVtdWhhM3RhYmJsIn0.6VYmuY3xP3IgEvT_Vc3pRQ';
        let map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [105.859979061677,21.007181634883864],
          zoom: 11
        });
        let directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          steps: false,
          geometries: 'polyline',
          interactive: false,
          controls: {instructions: false}
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
              axios.get(URL_MAPBOX_API + self.tripDetail.endLongitude + ',' + self.tripDetail.endLatitude
                  + '.json?types=poi&access_token=' + MAPBOX_KEY)
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
      getTripDetail: function () {
        let self = this;
        http.get('/trip-by-hitchhiker/status/' + self.hitchhikerId)
            .then(response => {
              let userDriver = JSON.parse(response.data.metadata);
              if (userDriver === null) {
                self.showButton = "01";
              } else if (userDriver.isSubmitter) {
                self.showButton = "03";
              } else if (userDriver.status === "02") {
                self.showButton = "04";
              } else {
                self.showButton = "02";
              }
            })
            .catch(e => {
              console.error(e);
            });
        http.get('/trip-by-hitchhiker/' + self.hitchhikerId)
            .then(response => {
              self.tripDetail = JSON.parse(response.data.metadata);
              // check show button
              self.initMap();
              self.setupTime();
            })
            .catch(e => {
              console.error(e);
            });
      },
      registerTrip: function () {
        http.post("trip-by-hitchhiker/register-with-hitchhiker/" + this.hitchhikerId)
            .then(response => {
              this.showButton = "02";
              toastr.success('Đăng ký đi chung thành công');
            })
            .catch(e => {
              console.error(e);
              toastr.success('Đăng ký đi chung thất bại');
            });
      },
      redirectListRegister() {
        window.location.href = "/trip-by-hitchhiker/" + this.hitchhikerId + "/list-register";
      },
      setupTime: function() {
        // setup format time
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
      showChat: function () {
        let self = this;
        $('#addClass').click();
        let userConversation = {
          email: 'xx',
          image: self.tripDetail.avatar,
          userId: self.tripDetail.userId,
          username: self.tripDetail.username
        };
        eventBus.$emit('addUserConversation', JSON.stringify(userConversation));
      },
      showRating: function () {
        let self = this;
        self.showModal = true;
      }
    },
    mounted() {
      this.getTripDetail();
    }
  }
</script>

<style scoped>
  #map, #information-map {
    max-height: 450px;
  }
</style>
