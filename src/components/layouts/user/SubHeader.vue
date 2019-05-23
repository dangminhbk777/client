<template>
  <!-- BEGIN: Subheader -->
  <div class="m-subheader ">
    <div class="d-flex align-items-center">
      <div class="mr-auto" v-if="titlePage">
        <h3 class="m-subheader__title m-subheader__title--separator">{{titlePage}}</h3>
        <ul class="m-subheader__breadcrumbs m-nav m-nav--inline">
          <li class="m-nav__item m-nav__item--home">
            <a href="#" class="m-nav__link m-nav__link--icon">
              <i class="m-nav__link-icon la la-home"></i>
            </a>
          </li>
          <li class="m-nav__separator">-</li>
          <li class="m-nav__item">
            <a href="" class="m-nav__link">
              <span class="m-nav__link-text">Hỗ trợ</span>
            </a>
          </li>
          <li class="m-nav__separator">-</li>
          <li class="m-nav__item">
            <a href="" class="m-nav__link">
              <span class="m-nav__link-text">Đi chung xe</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- END: Subheader -->
</template>

<script>
  export default {
    name: "SubHeader",
    data() {
      return {
        titlePage: null
      }
    },
    mounted() {
      let self = this;
      if (self.$route.path.includes('/home')) {
        self.titlePage = 'Trang chủ';
      } else if (self.$route.path.includes('/user/register')) {
        self.titlePage = 'Tạo tài khoản'
      } else if (self.$route.path.includes('/user/profile')) {
        self.titlePage = 'Trang cá nhân'
      } else if (self.$route.path.includes('/trip-by-driver')) {
        self.titlePage = 'Chuyến đi chủ xe đăng'
      } else if (self.$route.path.includes('/trip-by-driver/create')
          || self.$route.path.includes('/trip-by-hitchhiker/create')) {
        self.titlePage = 'Tạo chuyến đi'
      } else if (self.$route.path === '/trip-by-driver/:driverId'
          || self.$route.path.includes('/trip-by-hitchhiker/:hitchhikerId')) {
        self.titlePage = 'Chi tiết chuyến đi'
      } else if (self.$route.path.includes('/trip-by-driver/:driverId/update')) {
        self.titlePage = 'Chỉnh sửa thông tin chuyến đi'
      } else if (self.$route.path.includes('/trip-by-driver/:driverId/list-register')) {
        self.titlePage = 'Người đi chung đăng ký'
      } else if (self.$route.path.includes('/trip-by-hitchhiker')) {
        self.titlePage = 'Chuyến đi người đi chung đăng'
      } else if (self.$route.path.includes('/trip-by-hitchhiker/:hitchhikerId/list-register')) {
        self.titlePage = 'Chủ xe đăng ký'
      } else if (self.$route.path === '/my-driver') {
        self.titlePage = 'Chuyến đi của bạn'
      } else if (self.$route.path.includes('/my-driver-register')) {
        self.titlePage = 'Chuyến đi chung đã đăng ký'
      } else if (self.$route.path.includes('/my-driver-complete')) {
        self.titlePage = 'Chuyến đi đã hoàn thành'
      }
    }
  }
</script>

<style scoped>

</style>
