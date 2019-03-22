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
                <label for="startTime" class="col-4 col-form-label">Thời gian xuất phát</label>
                <div class="col-8">
                  <input class="form-control m-input" type="datetime-local" value="2011-08-19T13:45:00" id="startTime">
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label for="typeVehicle" class="col-4 col-form-label">Phương tiện</label>
                <div class="col-8">
                  <select class="form-control m-input" id="typeVehicle">
                    <option>Xe máy</option>
                    <option>Ô tô (nhỏ)</option>
                    <option>Ô tô (lớn)</option>
                  </select>
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label for="numberSeat" class="col-4 col-form-label">Số chỗ trống</label>
                <div class="col-8">
                  <input class="form-control m-input" type="number" id="numberSeat">
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label for="price" class="col-4 col-form-label">Giá dự kiến (VND)</label>
                <div class="col-8">
                  <input class="form-control m-input" type="number" id="price">
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label for="image" class="col-4 col-form-label">Ảnh mô tả</label>
                <div class="col-8">
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="image" v-on:change="onImageChange" multiple>
                    <label class="custom-file-label" for="image">Choose file</label>
                  </div>
                  <div  v-if="image">
                    <img :src="image" class="img-responsive" height="70" width="90">
                  </div>
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label for="exampleTextarea" class="col-4 col-form-label">Chú thích</label>
                <div class="col-8">
                  <textarea class="form-control m-input" id="exampleTextarea" rows="3"></textarea>
                </div>
              </div>
            </div>
            <div class="m-portlet__foot m-portlet__foot--fit">
              <div class="m-form__actions text-right">
                  <button type="reset" class="btn btn-primary margin-10">Submit</button>
                  <button type="reset" class="btn btn-secondary">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../services/http-common.js';

  export default {
    name: "Trip",
    data() {
      return {
        image: null
      }
    },
    methods: {
      onImageChange: function(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
      },
      createImage: function(file) {
        let reader = new FileReader();
        let vm = this;
        reader.onload = (e) => {
          vm.image = e.target.result;
          console.log(vm.image);
        };
        reader.readAsDataURL(file);
      },
      postNewTrip: function() {
        http.post('/image/store',{image: this.image})
            .then(response => {
              console.log(response);
            })
            .catch(e => {
              console.error(e);
            });
      }
    }
  }
</script>

<style scoped>
  .margin-10 {
    margin: 0 10px 0 10px;
  }
</style>