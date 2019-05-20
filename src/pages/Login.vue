<template>
  <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-1" id="m_login" style="background-image: url(/assets/app/media/img/bg/bg-1.jpg);">
    <div class="m-grid__item m-grid__item--fluid m-login__wrapper">
      <div class="m-login__container">
        <div class="m-login__logo">
          <a href="#">
            <img src="/assets/demo/media/img/logo/logo.svg" style="max-height: 100px; min-height: 100px">
          </a>
        </div>
        <!-- LOGIN: BEGIN -->
        <div class="m-login__signin" v-if="showFormLogin">
          <div class="m-login__head">
            <h3 class="m-login__title">Đăng nhập hệ thống hỗ trợ đi chung xe</h3>
          </div>
          <form class="m-login__form m-form">
            <div class="form-group m-form__group">
              <input id="user_name" class="form-control m-input" type="text" placeholder="Email" autocomplete="off">
            </div>
            <div class="form-group m-form__group">
              <input id="pass_word" class="form-control m-input m-login__form-input--last" type="password" placeholder="Password">
            </div>
            <div class="form-group m-form__group">
              <p v-if="messageError" class="m--font-danger message-error">{{messageError}}</p>
            </div>
            <div class="row m-login__form-sub">
              <div class="col m--align-right m-login__form-right">
                <a href="javascript:;" id="m_login_forget_password" class="m-link">Quên mật khẩu ?</a>
              </div>
            </div>
            <div class="m-login__form-action">
              <button type="button" id="button_login_submit" v-on:click="getToken" class="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary">
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
        <!-- LOGIN: END -->
        <!-- REGISTER: BEGIN -->
        <div class="m-login__signup_" v-if="!showFormLogin">
          <div class="m-login__head">
            <h3 class="m-login__title">Đăng ký</h3>
            <div class="m-login__desc">Nhập thông tin chi tiết để tạo tài khoản của bạn</div>
          </div>
          <form class="m-login__form m-form">
            <div class="form-group m-form__group">
              <input class="form-control m-input" type="text" placeholder="Tên của bạn">
            </div>
            <div class="form-group m-form__group">
              <input class="form-control m-input" type="text" placeholder="Email" autocomplete="off">
            </div>
            <div class="form-group m-form__group">
              <input class="form-control m-input" type="password" placeholder="Mật khẩu">
            </div>
            <div class="form-group m-form__group">
              <input class="form-control m-input m-login__form-input--last" type="password" placeholder="Xác nhận mật khẩu">
            </div>
            <div class="form-group m-form__group">
              <input class="form-control m-input" type="text" placeholder="Số điện thoại">
            </div>
            <!--<div class="row form-group m-form__group m-login__form-sub">
              <div class="col m&#45;&#45;align-left">
                <label class="m-checkbox m-checkbox&#45;&#45;light">
                  <input type="checkbox" name="agree">Tôi đồng ý với các điều khoản và điều kiện.
                  <span></span>
                </label>
                <span class="m-form__help"></span>
              </div>
            </div>-->
            <div class="form-group m-form__group row">
                <div class="custom-file col-6">
                  <input type="file" class="custom-file-input" id="image" v-on:change="onImageChange">
                  <label class="custom-file-label form-control m-input m-input--air m-input--pill" for="image" style="padding: 1.0rem 1.5rem; !important;">Ảnh đại diện</label>
                </div>
                <div v-if="previewImage" style="padding-top: 20px;" class="col-6">
                  <img :src="previewImage" class="img-responsive mr-10 overview-img">
                </div>
            </div>
            <div class="m-login__form-action">
              <button class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary">Đăng ký</button>&nbsp;&nbsp;
              <button class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn">Hủy bỏ</button>
            </div>
          </form>
        </div>
        <!-- REGISTER: END -->
        <div class="m-login__account" v-if="showFormLogin">
          <span class="m-login__account-msg">
              Bạn chưa có tài khoản ?
          </span>&nbsp;&nbsp;
          <a href="javascript:;" id="m_login_signup_" v-on:click="showFormRegister" class="m-link m-link--light m-login__account-link">Đăng ký</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../services/http-common.js';
  import {DEFAULT_LOGIN, AUTHORIZATION} from '../services/variables.js';

  export default {
    name: "login",
    data() {
      return {
        messageError: null,
        userLoginResponse: {
          token: null,
          userInformation: {
            userId: null,
            username: null,
            image: null,
            email: null
          }
        },
        showFormLogin: true,
        previewImage: null,
        formData: new FormData()
      }
    },
    methods: {
      getToken() {
        let self = this;
        let dataUserLogin = {
          email: document.getElementById("user_name").value,
          password: document.getElementById("pass_word").value
        };
        http.post("/authentication/token", dataUserLogin)
            .then(success => {
              self.userLoginResponse = JSON.parse(success.data.metadata);
              localStorage.setItem("userId", self.userLoginResponse.userInformation.userId);
              localStorage.setItem("username", self.userLoginResponse.userInformation.username);
              localStorage.setItem("image", self.userLoginResponse.userInformation.image);
              localStorage.setItem("email", self.userLoginResponse.userInformation.email);
              localStorage.setItem(AUTHORIZATION, self.userLoginResponse.token);
              window.location.href = DEFAULT_LOGIN;
            })
            .catch(error => {
              console.error(error);
              this.messageError = error.response.data.message;
            });
      },
      showFormRegister: function () {
        let self = this;
        self.showFormLogin = false;
      },
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
    },
    mounted() {
      let self = this;
      document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          self.getToken();
        }
      })
    }
  }
</script>

<style scoped>
  .message-error {
    padding: 1.5rem 1.5rem;
  }
  .m-login__logo {
    margin: 0 !important;
  }
  .mr-10 {
    margin: 10px 10px 10px 10px;
  }
  .overview-img {
    height: 70px;
    width: 90px;
  }
  .custom-file-label::after {
    position: absolute;
    top: 0.9px;
    right: 0;
    bottom: 0;
    z-index: 3;
    display: block;
    height: 2.95rem;
    padding: 0.85rem 1.15rem;
    line-height: 1.25;
    color: #495057;
    content: "Chọn ảnh" !important;
    background-color: #e9ecef;
    border-left: 1px solid #ced4da;
    border-radius: 15px;
  }
</style>
