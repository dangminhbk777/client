<template>
  <div>
    <div class="row">
      <div class="col-xl-12">
        <!--begin:: Widgets/Blog-->
        <div class="m-portlet m-portlet--bordered-semi m-portlet--full-height  m-portlet--rounded-force">
          <div class="m-portlet__head m-portlet__head--fit">
            <div class="m-portlet__head-caption">
              <div class="m-portlet__head-action">
                <button type="button" class="btn btn-sm m-btn--pill  btn-brand">Blog</button>
              </div>
            </div>
          </div>
          <div class="m-portlet__body">
            <div class="m-widget19">
              <div class="m-widget19__pic m-portlet-fit--top m-portlet-fit--sides" style="min-height: 286px">
                <img src="https://www.takescoop.com/static/images/intro/home-bg.jpg" alt="">
                <div class="col-sm-12 text-center" style="position: absolute; display: block; top: 10%; z-index: 1;">
                  <h2 class="m--font-light">Dramatically improve</h2>
                  <h2 class="m--font-light">your commute</h2>
                  <h4 class="m--font-light" style="padding-top: 20px; font-weight: lighter">Convenient carpools with</h4>
                  <h4 class="m--font-light" style="font-weight: lighter">co-workers and neighbors</h4>
                </div>
                <div class="m-widget19__shadow"></div>
              </div>
              <!--<div class="m-widget19__content">
                <div class="m-widget19__header">
                  <div class="m-widget19__user-img">
                    <img class="m-widget19__img" src="assets/app/media/img//users/user1.jpg" alt="">
                  </div>
                  <div class="m-widget19__info">
                  <span class="m-widget19__username">
                      Anna Krox
                  </span><br>
                    <span class="m-widget19__time">
                      UX/UI Designer, Google
                  </span>
                  </div>
                  <div class="m-widget19__stats">
                  <span class="m-widget19__number m&#45;&#45;font-brand">
                      18
                  </span>
                    <span class="m-widget19__comment">
                      Comments
                  </span>
                  </div>
                </div>
                <div class="m-widget19__body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting
                  industry scrambled dummy text of the printing.
                </div>
              </div>
              <div class="m-widget19__action">
                <button type="button" class="btn m-btn&#45;&#45;pill btn-secondary m-btn m-btn&#45;&#45;hover-brand m-btn&#45;&#45;custom">Read More</button>
              </div>-->
            </div>
          </div>
        </div>
        <!--end:: Widgets/Blog-->
      </div>
    </div>
    <div class="row" style="padding-bottom: 40px; padding-top: 60px;">
      <div class="col-sm-12 text-center">
        <h1 class="text-uppercase">What is Scoop?</h1>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-sm-3 col-lg-offset-1 col-lg-3 col-sm-pull-5">
        <div class="wiss-description wiss-description-active" id="wiss-description-0">
          <strong>Carpooling Service:</strong><br class="hidden-xs"> Scoop brings together co-workers and neighbors who are going the same way.
        </div>
        <div class="wiss-description wiss-description-inactive" id="wiss-description-1">
          <strong>Community of Carpoolers:</strong><br class="hidden-xs"> Scoop carpoolers enjoy meeting new people and making the most of their time.
        </div>
        <div class="wiss-description wiss-description-inactive" id="wiss-description-2">
          <strong>Enterprise Solution:</strong><br class="hidden-xs"> Scoop partners with competitive employers to enrich the lives of their employees.
        </div>
      </div>
      <div class="col-sm-5 col-sm-push-3 text-center">
        <img src="https://www.takescoop.com/static/images/what-is-scoop/carpooling-service.png" id="wiss-image-0" class="wiss-image" alt="Carpooling service">
        <img src="https://www.takescoop.com/static/images/what-is-scoop/community-of-carpoolers.png" id="wiss-image-1" class="wiss-image init-hidden" alt="Community of carpoolers">
        <img src="https://www.takescoop.com/static/images/what-is-scoop/enterprise-solution.png" id="wiss-image-2" class="wiss-image init-hidden" alt="An enterprise solution">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    mounted() {
      let element0 = $('#wiss-description-0');
      let element1 = $('#wiss-description-1');
      let element2 = $('#wiss-description-2');

      let image0 = $('#wiss-image-0');
      let image1 = $('#wiss-image-1');
      let image2 = $('#wiss-image-2');

      element0.on('click', function () {
        if (element0.hasClass('wiss-description-inactive')) {
          element0.removeClass('wiss-description-inactive');
          element0.addClass('wiss-description-active');

          image0.removeClass('init-hidden');
        }
        if (element1.hasClass('wiss-description-active')) {
          element1.removeClass('wiss-description-active');
          element1.addClass('wiss-description-inactive');

          image1.addClass('init-hidden');
        }
        if (element2.hasClass('wiss-description-active')) {
          element2.removeClass('wiss-description-active');
          element2.addClass('wiss-description-inactive');

          image2.addClass('init-hidden');
        }
      });
      element1.on('click', function () {
        if (element1.hasClass('wiss-description-inactive')) {
          element1.removeClass('wiss-description-inactive');
          element1.addClass('wiss-description-active');

          image1.removeClass('init-hidden');
        }
        if (element2.hasClass('wiss-description-active')) {
          element2.removeClass('wiss-description-active');
          element2.addClass('wiss-description-inactive');

          image2.addClass('init-hidden');
        }
        if (element0.hasClass('wiss-description-active')) {
          element0.removeClass('wiss-description-active');
          element0.addClass('wiss-description-inactive');

          image0.addClass('init-hidden');
        }
      });
      element2.on('click', function () {
        if (element2.hasClass('wiss-description-inactive')) {
          element2.removeClass('wiss-description-inactive');
          element2.addClass('wiss-description-active');

          image2.removeClass('init-hidden');
        }
        if (element0.hasClass('wiss-description-active')) {
          element0.removeClass('wiss-description-active');
          element0.addClass('wiss-description-inactive');

          image0.addClass('init-hidden');
        }
        if (element1.hasClass('wiss-description-active')) {
          element1.removeClass('wiss-description-active');
          element1.addClass('wiss-description-inactive');

          image1.addClass('init-hidden');
        }
      });
    }
  }
</script>

<style scoped>
  .wiss-description-active {
    border: 2px solid #ffad4e;
  }
  .wiss-description {
    padding: 20px 20px;
    margin-bottom: 30px;
    font-size: 15px;
    border-radius: 4px;
    line-height: 1.4;
    cursor: pointer;
    transition: .3s all;
  }
  .wiss-description-inactive {
    border: 2px solid #dadddd;
    color: #9fa7a6;
  }
  .wiss-description {
    padding: 20px 20px;
    margin-bottom: 30px;
    font-size: 15px;
    border-radius: 4px;
    line-height: 1.4;
    cursor: pointer;
    transition: .3s all;
  }
  .wiss-image {
    width: 500px;
    height: 450px;
  }
  .init-hidden {
    display: none;
  }
  .m-portlet .m-portlet__body {
    padding: 0;
  }
</style>
