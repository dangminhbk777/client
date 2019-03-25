<template>
  <div>
    <div class="row">
      <div class="col-xl-6">
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
                  <input class="form-control m-input" type="datetime-local" value="2011-08-19T13:45:00">
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
      <div class="col-xl-6">
          <div id='map'></div>
          <div id='inputs'></div>
          <div id='errors'></div>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../services/http-common.js';
  import Select from '../components/selects/SelectPlaceHolder';

  export default {
    name: "Trip",
    components: {
      'select-place-holder': Select
    },
    data() {
      return {
        // Field request
        startPosition: null,
        endPosition: null,
        startPoint: null,
        endPoint: null,
        time: null,
        typeVehicle: null,
        numberSeat: null,
        price: null,
        note: null,
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
      },
      postNewTrip: function() {
        this.setDataToFormRequest();
        http.post('/user/upload',this.formData)
            .then(response => {
              console.log(response);
            })
            .catch(e => {
              console.error(e);
            });
      },
      setDataToFormRequest: function () {
        this.formData.append("startPosition", this.startPosition);
        this.formData.append("endPosition", this.endPosition);
        this.formData.append("startPoint", this.startPoint);
        this.formData.append("endPoint", this.endPoint);
        this.formData.append("time", this.time);
        this.formData.append("typeVehicle", this.typeVehicle);
        this.formData.append("numberSeat", this.numberSeat);
        this.formData.append("price", this.price);
        this.formData.append("note", this.note);
      },
      
      initMap: function () {
        L.mapbox.accessToken = 'pk.eyJ1IjoiZGFuZ21pbmhiazc3NyIsImEiOiJjanRsM2ltZmwzMm81NDVtdWhhM3RhYmJsIn0.6VYmuY3xP3IgEvT_Vc3pRQ';
        let map = L.mapbox.map('map', null, {zoomControl: false})
            .setView([21.003, 105.847], 15)
            .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));

        // move the attribution control out of the way
        map.attributionControl.setPosition('bottomleft');

        // create the initial directions object, from which the layer
        // and inputs will pull data.
        let directions = L.mapbox.directions();
        console.log(directions);

        let directionsLayer = L.mapbox.directions.layer(directions)
            .addTo(map);

        let directionsInputControl = L.mapbox.directions.inputControl('inputs', directions)
            .addTo(map);
      }
    },
    mounted() {
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
  #map {
    position: absolute;
    top: 0;
    bottom: 30px;
    left: 15px;
    right: 15px;
    width: 95%;
    margin-right: 15px;
  }
  #inputs,
  #errors {
    position: absolute;
    width: 33.3333%;
    max-width: 300px;
    min-width: 200px;
  }
  #inputs {
    z-index: 10;
    top: 10px;
    left: 25px;
  }
  #errors {
    z-index: 8;
    opacity: 0;
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background: rgba(0,0,0,.25);
    top: 90px;
    left: 10px;
  }
</style>
