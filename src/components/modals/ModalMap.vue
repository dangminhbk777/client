<template>
  <div>
    <!--begin::Modal-->
    <div class="modal fade" v-bind:class="classModal" v-bind:style="styleModal" id="m_modal_1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="hide">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body" style="width: 400px">
            <div class="form-group m-form__group row">
              <label class="col-6 col-form-label" for="radius">Bán kính tìm kiếm (Km)</label>
              <div class="col-6">
                <input type="number" min="1" class="form-control" id="radius" v-model="searchArea.radius"/>
              </div>
            </div>
            <!-- MAP: BEGIN -->
            <div id="information-map2">
              <div class="flex-parent relative scroll-hidden">
                <div id="map2" class="flex-child flex-child--grow bg-darken10 viewport-twothirds viewport-full-mm mapboxgl-map" >
                </div>
              </div>
            </div>
            <small class="text-primary">Chọn điểm đầu và điểm cuối hành trình của bạn</small><br>
            <!-- MAP: END -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="hide">
              Hủy bỏ
            </button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="accept">
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--end::Modal-->
  </div>
</template>

<script>
  import { MAPBOX_KEY, URL_MAPBOX_API } from '../../services/variables.js';
  import axios from 'axios';

  export default {
    name: "app-modal",
    props: {
      title: {
        type: String,
        default: 'title'
      },
      content: {
        type: String,
        default: 'content'
      },
      url: {
        type: String,
        default: 'localhost'
      },
      method: {
        type: String,
        default: 'GET'
      },
      showModal: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        dataRating: [],
        searchArea: {
          chooseSearchArea: "Chưa chọn",
          radius: 1,
          beginLongitude: null,
          beginLatitude: null,
          endLongitude: null,
          endLatitude: null
        }
      }
    },
    methods: {
      hide() {
        let self = this;
        self.$emit('hideModal', false);
        self.searchArea.chooseSearchArea = "Chưa chọn";
        self.$emit('searchAdvance', self.searchArea);
      },
      accept() {
        let self = this;
        self.$emit('hideModal', false);
        self.searchArea.chooseSearchArea = "Đã chọn";
        self.$emit('searchAdvance', self.searchArea);
      }
    },
    mounted() {
      let self = this;
      mapboxgl.accessToken = MAPBOX_KEY;
      let map = new mapboxgl.Map({
        container: 'map2',
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
      let geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        zoom: 12,
        placeholder: "Tìm địa điểm",
        mapboxgl: mapboxgl
      });
      map.addControl(geocoder);
      let canvas = map.getCanvasContainer();
      map.on('click', function (e) {
        self.searchArea.beginLongitude = e.lngLat.lng;
        self.searchArea.beginLatitude = e.lngLat.lat;
        if (map.getLayer('customer')) {
          let coordsObj = e.lngLat;
          canvas.style.cursor = '';
          let coords = Object.keys(coordsObj).map(function(key) {
            return coordsObj[key];
          });
          let customer = {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: coords
                }
              }
            ]
          };
          map.getSource('customer').setData(customer);
        } else {
          map.addLayer({
            id: 'customer',
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
        }
      });
      geocoder.on('results', function (response) {
        console.log(response);
      });
      // map.addControl( directions, 'top-left');
      // map.on('load', function() {
      //   $(".mapboxgl-ctrl-geocoder").on('change', function (e) {
      //     let id = $(this).parent('div').attr('id');
      //     if (id === "mapbox-directions-origin-input" && e.target.value != null) {
      //       axios.get(URL_MAPBOX_API + e.target.value + '.json?types=poi&access_token=' + MAPBOX_KEY)
      //           .then(response => {
      //             e.target.value = response.data.features[0].place_name;
      //           })
      //           .catch(e => {
      //             this.errors.push(e)
      //           });
      //     } else if (e.target.value != null) {
      //       axios.get(URL_MAPBOX_API + e.target.value + '.json?types=poi&access_token=' + MAPBOX_KEY)
      //           .then(response => {
      //             e.target.value = response.data.features[0].place_name;
      //           })
      //           .catch(e => {
      //             this.errors.push(e)
      //           });
      //     }
      //   });
      //
      //   directions.on('route', function (ev) {
      //     // console.log(ev.route);
      //   });
      //   directions.on('origin', function (e) {
      //     if (e !=  null) {
      //       self.searchArea.beginLongitude = e.feature.geometry.coordinates[0];
      //       self.searchArea.beginLatitude = e.feature.geometry.coordinates[1];
      //     }
      //   });
      //   directions.on('destination', function (e) {
      //     if (e != null) {
      //       self.searchArea.endLongitude = e.feature.geometry.coordinates[0];
      //       self.searchArea.endLatitude = e.feature.geometry.coordinates[1];
      //     }
      //   });
      // });
      window.onresize = function() {
        map.resize();
      };
    },
    computed: {
      classModal: function () {
        let self = this;
        if (self.showModal) {
          return 'show';
        }
        return null;
      },
      styleModal: function () {
        let self = this;
        if (self.showModal) {
          return 'display: block';
        }
        return 'display: none';
      }
    }
  }
</script>

<style scoped>
  #map2, #information-map2 {
    max-width: 400px;
    min-height: 300px;
    max-height: 300px;
  }
  .modal-content {
    max-width: 400px;
  }
</style>
