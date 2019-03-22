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
                    <label class="custom-file-label" for="image">Choose file</label>
                  </div>
                  <div  v-if="images">
                    <img :src="images" class="img-responsive" height="70" width="90">
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
                  <button class="btn btn-primary margin-10" v-on:click="postNewTrip">Submit</button>
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
  import Select from '../components/selects/SelectPlaceHolder';

  export default {
    name: "Trip",
    components: {
      'select-place-holder': Select
    },
    data() {
      return {
        time: null,
        typeVehicle: null,
        numberSeat: null,
        images: null,
        price: null,
        note: null,
        startPoint: null,
        endPoint: null,
        formData: new FormData(),
        select2: {
          allowClear: true,
          placeHolder: "Select One",
          options: [
            { id: '1', text: 'Xe máy' },
            { id: '2', text: 'Ô tô (nhỏ)' },
            { id: '3', text: 'Ô tô (lớn)' }
          ],
          selected: '1',
        },
      }
    },
    methods: {
      onImageChange: function(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.formData.append('images', files[0]);
        this.createImage(files[0]);
      },
      createImage: function(file) {
        let reader = new FileReader();
        let vm = this;
        reader.onload = (e) => {
          vm.images = e.target.result;
          console.log(vm.images);
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
        this.formData.append("time", this.time);
        this.formData.append("typeVehicle", this.typeVehicle);
        this.formData.append("numberSeat", this.numberSeat);
        this.formData.append("images", this.images);
        this.formData.append("price", this.price);
        this.formData.append("note", this.note);
        this.formData.append("startPoint", this.startPoint);
        this.formData.append("endPoint", this.endPoint);
      }
    }
  }
</script>

<style scoped>
  .margin-10 {
    margin: 0 10px 0 10px;
  }
</style>
