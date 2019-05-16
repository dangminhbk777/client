<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="m-portlet m-portlet--full-height ">
        <div class="m-portlet__body">
          <div class="m-card-profile">
            <div class="m-card-profile__title m--hide">
              Your Profile
            </div>
            <div class="m-card-profile__pic">
              <div class="m-card-profile__pic-wrapper">
                <img :src="avatar" alt="" />
              </div>
            </div>
            <div class="m-card-profile__details">
              <span class="m-card-profile__name">{{username}}</span>
              <a href="" class="m-card-profile__email m-link">{{email}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-8">
      <div class="m-portlet m-portlet--full-height">
        <!-- HEAD: BEGIN -->
        <div class="m-portlet__head">
          <div class="m-portlet__head-caption">
            <div class="m-portlet__head-title">
              <h3 class="m-portlet__head-text">Thông tin liên hệ</h3>
            </div>
          </div>
        </div>
        <!-- HEAD: END -->
        <div class="m-form m-form--fit m-form--label-align-right">
          <div class="m-portlet__body">
            <div class="form-group m-form__group row">
              <label class="col-2 col-form-label">Tên</label>
              <div class="col-7">
                <input class="form-control m-input" type="text" value="Mark Andre">
              </div>
            </div>
            <div class="form-group m-form__group row">
              <label class="col-2 col-form-label">Email</label>
              <div class="col-7">
                <input class="form-control m-input" type="text" value="CTO">
              </div>
            </div>
            <div class="form-group m-form__group row">
              <label class="col-2 col-form-label">Số điện thoại</label>
              <div class="col-7">
                <input class="form-control m-input" type="text" value="Keenthemes">
              </div>
            </div>
          </div>
          <div class="m-portlet__foot m-portlet__foot--fit">
            <div class="m-form__actions">
              <div class="row">
                <div class="col-2">
                </div>
                <div class="col-7">
                  <button type="reset" class="btn btn-accent m-btn m-btn--air m-btn--custom">Cập nhật</button>
                  &nbsp;&nbsp;
                  <button type="reset" class="btn btn-secondary m-btn m-btn--air m-btn--custom">Hủy bỏ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { URL_AVATAR } from '../../services/variables.js';
  import http from '../../services/http-common.js';
  import toastr from '../../services/toastr.js';

  export default {
    name: "UserProfile",
    data() {
      return {
        username: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
        avatar: URL_AVATAR + localStorage.getItem("image"),
      }
    },
    methods: {
      getUserInformation: function () {
        http.get('/user/detail')
            .then(response => {
              console.log(response.data.metadata);
            })
            .catch(e => {
              console.error(e);
              toastr.error("Error occurred");
            });
      }
    },
    mounted() {
      this.getUserInformation();
    }
  }
</script>

<style scoped>

</style>
