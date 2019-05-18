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
                <input class="form-control m-input" type="text" v-model="information.username">
              </div>
            </div>

            <div class="form-group m-form__group row">
              <label class="col-2 col-form-label">Mật khẩu</label>
              <div class="col-7">
                <!-- Change Password: BEGIN -->
                <div class="m-accordion m-accordion--default" id="m_accordion_1">
                  <div class="m-accordion__item">
                    <div class="m-accordion__item-head collapsed" role="tab" id="m_accordion_1_item_1_head" data-toggle="collapse" href="#m_accordion_1_item_1_body" aria-expanded="false">
                      <span class="m-accordion__item-icon">
                        <i class="fa flaticon-safe-shield-protection"></i>
                      </span>
                      <span class="m-accordion__item-title">Thay đổi mật khẩu</span>
                      <span class="m-accordion__item-mode"></span>
                    </div>
                    <div class="m-accordion__item-body collapse" id="m_accordion_1_item_1_body" role="tabpanel" aria-labelledby="m_accordion_1_item_1_head" data-parent="#m_accordion_1">
                      <div class="m-accordion__item-content">
                        <span>Nhập mật khẩu cũ</span>
                        <input class="form-control m-input" type="password" v-model="information.password">
                      </div>
                      <div class="m-accordion__item-content">
                        <span>Nhập mật khẩu mới</span>
                        <input class="form-control m-input" type="password" v-model="information.newPassword">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Change Password: END -->
              </div>
            </div>

            <div class="form-group m-form__group row">
              <label class="col-2 col-form-label">Email</label>
              <div class="col-7">
                <input class="form-control m-input" type="text" v-model="information.email">
              </div>
            </div>
            <div class="form-group m-form__group row">
              <label class="col-2 col-form-label">Số điện thoại</label>
              <div class="col-7">
                <input class="form-control m-input" type="text" v-model="information.phone">
              </div>
            </div>
          </div>
          <div class="m-portlet__foot m-portlet__foot--fit">
            <div class="m-form__actions">
              <div class="row">
                <div class="col-2">
                </div>
                <div class="col-7">
                  <button v-on:click="updateInformation" class="btn btn-accent m-btn m-btn--air m-btn--custom">Cập nhật</button>&nbsp;&nbsp;
                  <button v-on:click="resetData" class="btn btn-secondary m-btn m-btn--air m-btn--custom">Hủy bỏ</button>
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
        information: {
          id: null,
          username: null,
          password: null,
          newPassword: null,
          email: null,
          image: null,
          phone: null,
          star: null
        },
        formData: new FormData()
      }
    },
    methods: {
      getUserInformation: function () {
        let self = this;
        http.get('/user/detail')
            .then(response => {
              self.information = JSON.parse(response.data.metadata);
              self.information.password = null;
              self.information.newPassword = null;
            })
            .catch(e => {
              console.error(e);
              toastr.error("Error occurred");
            });
      },
      updateInformation: function () {
        let self = this;
        console.log(self.information);
        self.setDataToFormRequest();
        http.post('/user/update', self.formData)
            .then(response => {
              console.log(JSON.parse(response.data.metadata));
              toastr.success('Cập nhật thông tin thành công');
              this.formData = new FormData();
            })
            .catch(e => {
              console.error(e);
              toastr.error("Cập nhật thông tin thất bại");
              this.formData = new FormData();
            });
      },
      setDataToFormRequest: function () {
        let self = this;
        self.formData.append("id", self.information.id);
        self.formData.append("username", self.information.username);
        self.formData.append("email", self.information.email);
        self.formData.append("password", self.information.password);
        self.formData.append("newPassword", self.information.newPassword);
        self.formData.append("phone", self.information.phone);
      },
      resetData: function () {
        this.getUserInformation();
        this.formData = new FormData();
      }
    },
    mounted() {
      this.getUserInformation();
    }
  }
</script>

<style scoped>

</style>
