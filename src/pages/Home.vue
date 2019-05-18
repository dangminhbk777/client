<template>
  <div class="_body-home">
    <div class="row __banner">
      <div class="col-xl-12">
        <!--begin:: Widgets/Blog-->
        <div class="m-portlet m-portlet--bordered-semi m-portlet--full-height  m-portlet--rounded-force">
          <div class="m-portlet__head m-portlet__head--fit">
            <div class="m-portlet__head-caption">
              <div class="m-portlet__head-action">
              </div>
            </div>
          </div>
          <div class="m-portlet__body">
            <div class="m-widget19">
              <div class="m-widget19__pic m-portlet-fit--top m-portlet-fit--sides" style="min-height: 286px">
                <img src="http://hi.gocar.my/wp-content/uploads/2018/12/gocar-background-14.jpg" alt="">
                <div class="col-sm-12 text-center" style="position: absolute; display: block; top: 10%; z-index: 1;">
                  <h2 class="m--font-light">Cải thiện đáng kể</h2>
                  <h2 class="m--font-light">quãng đường đi lại của bạn</h2>
                  <h4 class="m--font-light" style="padding-top: 20px; font-weight: lighter">Đi chung xe tiện lợi với</h4>
                  <h4 class="m--font-light" style="font-weight: lighter">mọi người xung quanh</h4>
                </div>
                <div class="m-widget19__shadow"></div>
              </div>
            </div>
          </div>
        </div>
        <!--end:: Widgets/Blog-->
      </div>
    </div>
    <div class="row" style="padding-bottom: 50px; padding-top: 100px;">
      <div class="col-sm-12 text-center">
        <h1 class="text-uppercase">ĐI CHUNG XE LÀ GÌ?</h1>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-sm-5 col-lg-offset-1 col-lg-3 col-sm-pull-7">
        <div :class="descriptionCss1" v-on:click="switchShow(1)">
          <span class="font-weight-bold">Dịch vụ đi chung xe:</span>
          <br class="hidden-xs"> Tập hợp các đồng nghiệp và hàng xóm đang đi cùng một con đường.
        </div>
        <div :class="descriptionCss2" v-on:click="switchShow(2)">
          <span class="font-weight-bold">Cộng đồng những người đi chung xe:</span>
          <br class="hidden-xs"> Người đi chung xe thích gặp gỡ những người mới và tận dụng tối đa thời gian của họ.
        </div>
        <div :class="descriptionCss3" v-on:click="switchShow(3)">
          <span class="font-weight-bold"> Giải pháp doanh nghiệp:</span>
          <br class="hidden-xs"> Hợp tác với các nhà tuyển dụng cạnh tranh để làm phong phú thêm cuộc sống của nhân viên của họ.
        </div>
      </div>
      <div class="col-sm-7 col-sm-push-5 text-center">
        <img src="https://www.takescoop.com/static/images/what-is-scoop/carpooling-service.png" :class="imageCss1" alt="Carpooling service">
        <img src="https://www.takescoop.com/static/images/what-is-scoop/community-of-carpoolers.png" :class="imageCss2" alt="Community of carpoolers">
        <img src="https://www.takescoop.com/static/images/what-is-scoop/enterprise-solution.png" :class="imageCss3" alt="An enterprise solution">
      </div>
    </div>
    <div class="row" style="padding-bottom: 50px; padding-top: 100px; background-color: #F7F7F7">
      <div class="col-sm-12 text-center">
        <h1 class="text-uppercase">Dưới đây là cách thức hoạt động</h1>
      </div>
    </div>
    <div class="row justify-content-md-center" style="background-color: #F7F7F7">
      <div class="col-xs-12 col-sm-5 col-sm-offset-2">
        <img src="https://www.takescoop.com/static/images/how-it-works/see-your-community.png" class="home-image-md" alt="">
      </div>
      <div class="col-xs-12 col-sm-5">
        <h2>Là một phần của cộng đồng</h2>
        <p class="home-description-part">Là một phần của cộng đồng
          Truy cập website và gặp những người đi chung xe đang đi theo cùng một tuyến đường.</p>
      </div>
    </div>
    <div class="row justify-content-md-center" style="background-color: #F7F7F7; padding-top: 50px">
      <div class="col-xs-12 col-sm-5" style="padding-top: 50px">
        <h2>Lên lịch đi chung xe</h2>
        <p class="home-description-part">
          Các chuyến đi sáng  và chiều riêng biệt để phù hợp với lịch trình làm việc không thể đoán trước của bạn. Đi xe hoặc lái xe để đáp ứng nhu cầu hàng ngày của bạn.
        </p>
      </div>
      <div class="col-xs-12 col-sm-5 col-sm-offset-2">
        <img src="https://www.takescoop.com/static/images/how-it-works/request-a-trip.png" class="home-image-md" alt="">
      </div>
    </div>
    <div class="row justify-content-md-center" style="background-color: #F7F7F7; padding-top: 50px">
      <div class="col-xs-12 col-sm-5 col-sm-offset-2">
        <img src="https://www.takescoop.com/static/images/how-it-works/get-matched.png" class="home-image-md" alt="">
      </div>
      <div class="col-xs-12 col-sm-5" style="padding-top: 50px">
        <h2>Được kết hợp</h2>
        <p class="home-description-part">
          Xác định chuyến đi hiệu quả nhất dựa trên tuyến đường nhanh nhất, xe chở khách gần đó
        </p>
      </div>
    </div>
    <div class="row justify-content-md-center" style="background-color: #F7F7F7; padding-top: 50px">
      <div class="col-xs-12 col-sm-5" style="padding-top: 50px">
        <h2>Tận hưởng đi lại dễ dàng</h2>
        <p class="home-description-part">
          Gặp gỡ những người mới, có nhiều năng lượng hơn mỗi ngày và tận dụng tối đa thời gian của bạn.
        </p>
      </div>
      <div class="col-xs-12 col-sm-5 col-sm-offset-2">
        <img src="https://www.takescoop.com/static/images/how-it-works/enjoy.png" class="home-image-md" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        descriptionCss1: 'home-description home-description-active',
        descriptionCss2: 'home-description home-description-inactive',
        descriptionCss3: 'home-description home-description-inactive',
        imageCss1: 'home-image',
        imageCss2: 'home-image init-hidden',
        imageCss3: 'home-image init-hidden',
        descriptionActive: 'home-description home-description-active',
        descriptionInActive: 'home-description home-description-inactive',
        image: 'home-image',
        imageHidden: 'home-image init-hidden',
      }
    },
    methods: {
      switchShow: function (id) {
        let self = this;
        if (id === 1) {
          // Set css for description
          self.descriptionCss1 = self.descriptionActive;
          self.descriptionCss2 = self.descriptionInActive;
          self.descriptionCss3 = self.descriptionInActive;
          // Set css image
          self.imageCss1 = self.image;
          self.imageCss2 = self.imageHidden;
          self.imageCss3 = self.imageHidden;
        } else if (id === 2) {
          // Set css for description
          self.descriptionCss1 = self.descriptionInActive;
          self.descriptionCss2 = self.descriptionActive;
          self.descriptionCss3 = self.descriptionInActive;
          // Set css image
          self.imageCss1 = self.imageHidden;
          self.imageCss2 = self.image;
          self.imageCss3 = self.imageHidden;
        } else if (id === 3) {
          // Set css for description
          self.descriptionCss1 = self.descriptionInActive;
          self.descriptionCss2 = self.descriptionInActive;
          self.descriptionCss3 = self.descriptionActive;
          // Set css image
          self.imageCss1 = self.imageHidden;
          self.imageCss2 = self.imageHidden;
          self.imageCss3 = self.image;
        }
      }
    }
  }
</script>

<style scoped>
  .__banner {
    margin-right: -80px;
    margin-left: -80px;
  }
  .home-description-active {
    border: 2px solid #ffad4e;
  }
  .home-description {
    padding: 20px 20px;
    margin-bottom: 30px;
    font-size: 15px;
    border-radius: 4px;
    line-height: 1.4;
    cursor: pointer;
    transition: .3s all;
  }
  .home-description-inactive {
    border: 2px solid #dadddd;
    color: #9fa7a6;
  }
  .home-description {
    padding: 20px 20px;
    margin-bottom: 30px;
    font-size: 15px;
    border-radius: 4px;
    line-height: 1.4;
    cursor: pointer;
    transition: .3s all;
  }
  .home-image {
    width: 500px;
    height: 450px;
  }
  .home-image-md {
    width: 330px;
    height: 330px;
  }
  .init-hidden {
    display: none;
  }
  .m-portlet .m-portlet__body {
    padding: 0;
  }
  .home-description-part {
    font-size: 16px;
    line-height: 1.9;
  }
</style>
