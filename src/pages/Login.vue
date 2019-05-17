<template>
  <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-1" id="m_login" style="background-image: url(/assets/app/media/img/bg/bg-1.jpg);">
    <div class="m-grid__item m-grid__item--fluid m-login__wrapper">
      <div class="m-login__container">
        <div class="m-login__logo">
          <a href="#">
            <img src="/assets/demo/media/img/logo/logo.svg" style="max-height: 100px; min-height: 100px">
          </a>
        </div>
        <div class="m-login__signin">
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
        <div class="m-login__account">
          <span class="m-login__account-msg">
              Bạn chưa có tài khoản ?
          </span>&nbsp;&nbsp;
          <a href="javascript:;" id="m_login_signup" class="m-link m-link--light m-login__account-link">Đăng ký</a>
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
        }
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
      }
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
</style>
