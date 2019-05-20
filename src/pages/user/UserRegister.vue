<template>
  <div>
    <div class="row">
      <div class="col-xl-6">
        <div class="m-portlet m-portlet--full-height ">
          <div class="m-portlet__head">
            <div class="m-portlet__head-caption">
              <div class="m-portlet__head-title">
                <h3 class="m-portlet__head-text">
                  Tạo tài khoản
                </h3>
              </div>
            </div>
          </div>
          <form class="m-form m-form--fit m-form--label-align-right">
            <div class="m-portlet__body">
              <div class="form-group m-form__group row">
                <label class="col-4 col-form-label">Tên người dùng</label>
                <div class="col-8">
                  <input class="form-control m-input" type="text" v-model="username">
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label class="col-4 col-form-label">Email</label>
                <div class="col-8">
                  <input class="form-control m-input" type="email" v-model="email">
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label class="col-4 col-form-label">Mật khẩu</label>
                <div class="col-8">
                  <input class="form-control m-input" type="password" v-model="password">
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label for="image" class="col-4 col-form-label">Ảnh đại diện</label>
                <div class="col-8">
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="image" v-on:change="onImageChange">
                    <label class="custom-file-label" for="image">Chọn ảnh</label>
                  </div>
                  <div v-if="previewImage">
                    <img :src="previewImage" class="img-responsive mr-10 overview-img">
                  </div>
                </div>
              </div>
              <div class="form-group m-form__group row">
                <label class="col-4 col-form-label">Số điện thoại</label>
                <div class="col-8">
                  <input class="form-control m-input" type="tel" v-model="phone">
                </div>
              </div>
              <div class="m-portlet__foot m-portlet__foot--fit">
                <div class="m-form__actions text-right">
                  <button type="button" class="btn btn-primary margin-10" v-on:click="registerUser">Đăng ký</button>
                  <button type="reset" class="btn btn-secondary">Hủy bỏ</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import toastr from '../../services/toastr.js';
  import http from '../../services/http-common.js';

  export default {
    name: "UserRegister",
    data() {
      return {
        // Field request
        username: null,
        email: null,
        password: null,
        phone: null,
        // Form submit and show image
        previewImage: null,
        formData: new FormData()
      }
    },
    methods: {
      onImageChange: function(e) {
        let self = this;
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
          return;
        }
        self.formData.append("image", files[0]);
        self.createImage(files[0]);
      },
      createImage: function(file) {
        let reader = new FileReader();
        let self = this;
        reader.onload = (e) => {
          self.previewImage = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      registerUser: function() {
        let self = this;
        self.setDataToFormRequest();
        http.post('/user/register', self.formData)
            .then(success => {
              console.log(success.data.metadata);
              self.formData = new FormData();
              toastr.success("Create new user SUCCESS");
            })
            .catch(error => {
              console.log(error.response.data);
            });
      },
      setDataToFormRequest: function () {
        this.formData.append("username", this.username);
        this.formData.append("email", this.email);
        this.formData.append("password", this.password);
        this.formData.append("phone", this.phone);
      }
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
</style>
