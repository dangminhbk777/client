<template>
  <div id="app">
    <div class="m-page-loader m-page-loader--base"></div>

    <div id="_body" class="m-grid m-grid--hor m-grid--root m-page">
      <login-page v-if="isPageLogin"></login-page>
      <page-not-found v-else-if="isPageNotFound"></page-not-found>
      <!-- Page User: BEGIN -->
      <header-user-app v-if="isUserPage"
          :show="showQuickSidebar"
          v-on:showQuickSidebar="showQuickSidebar = $event">
      </header-user-app>
      <body-user-app v-if="isUserPage"></body-user-app>
      <footer-user-app v-if="isUserPage"></footer-user-app>
      <!-- Page User: END -->
    </div>

    <quick-sidebar-app
        :show="showQuickSidebar"
        v-on:hideQuickSidebar="showQuickSidebar = $event">
    </quick-sidebar-app>

    <!-- begin::Scroll Top -->
    <div id="m_scroll_top" class="m-scroll-top">
      <i class="la la-arrow-up"></i>
    </div>
    <!-- end::Scroll Top -->

    <!-- begin::Quick Nav -->
    <ul class="m-nav-sticky" style="margin-top: 30px;">
      <li class="m-nav-sticky__item" data-toggle="m-tooltip" title="Purchase" data-placement="left">
        <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" target="_blank">
          <i class="la la-cart-arrow-down"></i>
        </a>
      </li>
      <li class="m-nav-sticky__item" data-toggle="m-tooltip" title="Documentation" data-placement="left">
        <a href="https://keenthemes.com/metronic/documentation.html" target="_blank"><i class="la la-code-fork"></i></a>
      </li>
      <li class="m-nav-sticky__item" data-toggle="m-tooltip" title="Chat" data-placement="left">
        <a href="#" id="addClass">
          <i class="la la-comments"></i>
        </a>
      </li>
    </ul>
    <!-- begin::Quick Nav -->

    <!-- Chat box: BEGIN -->
    <div id="shopee-chat-embedded" style="z-index: 1000; position: fixed; right: 10px; bottom: 0;"
        class="shopee-chat-root ember-application">
      <div id="ember306" class="ember-view">
        <div class="shopee-chat-container" id="_shopee-chat-container">
          <div class="buddy-list">
            <div class="chat-header first">
              <div class="chat-input header-search">
                <input type="text" placeholder="Tìm người dùng" class="ember-text-field ember-view">
                <span class="chat-input-prefix">
                  <span class="ic webchat_search"></span>
                </span>
              </div>
            </div>

            <div class="list show-offer">
              <div class="ember-view">
                <div id="ember814" class="ember-view"
                    style="overflow: auto; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); position: absolute; left: 0px; top: 0px; bottom: 0px; right: 0px;">
                  <div style="position: relative; width: 155px; height: 100px;">
                    <div
                        style="position:absolute;top:0;left:0;transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);width:138px;height:50px;">
                      <div id="ember816" class="ember-view">
                        <a href="/chat/136117046" id="ember817" class="buddy-item active ember-view">
                          <div class="shopee-chat__avatar">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAABJlBMVEXP2NxgfYtjf412j5uMoavO19uis7vG0dVxi5fBzNJyjJhjgI56kp5hfoxxi5h5kZ2ouL9ohJGInaipucCHnah3kJyxv8bL1NnM1dlphJGXqrN4kZzM1tqUp7Gnt76InqlkgY6wvsWGnKdrhpOnuL+xwMZ8lJ+3xMvAzNGCmaTFz9Sdr7fN1trN19tlgY5qhZJkgI6/y9COoqzL1dlphJJ0jZp7k566x8y7x81ng5CywMegsrp4kZ14kJyhs7uJn6nH0dZlgY+Fm6bG0daWqrO2xMqzwcfF0NXBzdK3xcu0wsh7k5+qusG0wsmzwchuiJVviZaYq7S7yM2Kn6m8yM6/y9GInqiWqbKNoqxzjJmjtLyqucGfsbmdr7iwv8WKoKpuiZVif42PQ9RwAAABzUlEQVR4Xu3YVZLjShBA0UyBmZmamXuYmZmZ3tv/Jua3Y8JWTdsKKR1zzwruR1aVlDIdAAAAAAAAAAAAAAAAAADyN1t+3fPqfiOTl7kQ1qp6QqkZinmdnP6hcFVs6wY6RtATwx75OlY7K2ZlczpBzmx194ZONOyKTbc0QiAmrWikFTHoIKeRKgdiz7o6LIo919XhophzRp3yYs01dcqINavqtCTWXFAnX6y5ok7nxZqyOhWJNjAeHERzVx6Py7Y6PRZzqnP4wSQ1dajN4U9AIRSDOhqpIyYFGuGs2HRuqBMNR/O3rKlYXjG1dazhbTGsF4yd557YtlFwrHpNCpslPeHZ81DmQj7T8OvFYt9vfM3LPwkAgOzDzMLdUqV/qHqnXymtLmRe3hPD9h/s7RzpGEc7e1v7Yk+4dX/zWCMsbw6eiClPgzV107XPL8SI3cEr/Wuv3+xK+t4ueXoq3rv3kq4PrbKeWvnjtqRn9MnTqXiDkaTkUkGn9uWypKK5rDM4/CYp+K4z+iGJW9SZrSc+z57OzEt6rtsag6ok6qfGYkOS1NJY/JIk/aexyEmS/tdYHEuSNCbzGU000UQTTTQAAAAAAAAAAAAAAAAAAL8BwZgl987F+p8AAAAASUVORK5CYII="
                                width="100%" height="100%">
                            <div
                                style="position: absolute; right: -15%; top: -15%; font-size: 10px; height: 15px; min-width: 15px; line-height: 15px;"
                                class="badge ">
                            </div>
                          </div>
                          <div class="shopee-chat__name">
                            luckyshop06
                          </div>
                          <div class="shopee-chat__close">
                            ✕
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                        style="position:absolute;top:0;left:0;transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 50, 0, 1);width:138px;height:50px;">
                      <div id="ember820" class="ember-view">
                        <a href="/chat/77371462" id="ember821" class="buddy-item ember-view">
                          <div class="shopee-chat__avatar">
                            <img src="//cf.shopee.vn/file/e0c25c8c616bcbd1dcbaa5caffa58dac_tn" width="100%"
                                height="100%">
                            <div
                                style="position: absolute; right: -15%; top: -15%; font-size: 10px; height: 15px; min-width: 15px; line-height: 15px;"
                                class="badge ">
                            </div>
                          </div>
                          <div class="shopee-chat__name">
                            3cworld.vn
                          </div>
                          <div class="shopee-chat__close">
                            ✕
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/offer" id="ember823" class="link-offer ember-view">
              Đã nhận trả giá
              <span class="badge">0</span>
            </a>
          </div>

          <div class="conversation-window">
            <div class="chat-header">
              <a class="shopee-chat-close-button" id="chat-close-button">
                <span></span>
              </a>
              <div class="user-menu ember-view">
                <span style="cursor:pointer;" class="shopee-chat-header-text">
                  luckyshop06
                  <span class="arrow-down "></span>
                </span>
              </div>
            </div>
            <div class="chat-window ember-view">
              <div class="chat-content shopee-chat__scrollable chat-content ember-view">
                <div class="shopee-chat__scrollable-inner"></div>
              </div>
              <div class="chat-panel">
                <textarea placeholder="Gửi tin nhắn ..." maxlength="5000" class="ember-text-area ember-view"></textarea>
                <div class="chat-toolbar">
                  <div class="clearfix">
                    <div class="right">
                      <button class="shopee-chat__primary">Gửi</button>
                    </div>
                  </div>
                </div>
              </div>
              <input type="file" multiple="" accept=".png,.jpg,.jpeg,.gif" style="display:none;">
            </div>
          </div>
        </div>
        <div class="liquid-modal liquid-modal--closed">
          <div class="liquid-child">
            <div class="lm-container">
              <div role="dialog" class="lf-dialog"></div>
            </div>
            <span class="lf-overlay"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- Chat box: END -->

  </div>
</template>

<script>
  import HeaderUser from './components/layouts/user/Header';
  import BodyUser from './components/layouts/user/Body';
  import FooterUser from './components/layouts/user/Footer';
  import QuickSidebar from './components/layouts/QuickSidebar';

  import PageLogin from './pages/Login.vue';
  import PageNotFound from './pages/404.vue';

  export default {
    name: "app",
    components: {
      'header-user-app': HeaderUser,
      'body-user-app': BodyUser,
      'footer-user-app': FooterUser,
      'quick-sidebar-app': QuickSidebar,

      'login-page':PageLogin,
      'page-not-found':PageNotFound
    },
    data() {
      return {
        isPageLogin: this.$route.path.includes('login'),
        isPageNotFound: this.$route.path.includes('page-not-found'),
        isUserPage: !this.$route.path.includes('login') && !this.$route.path.includes('page-not-found'),
        modal: {
          title: 'title - update ',
          content: 'content - update',
          url: 'localhost',
          method: 'POST'
        },
        showQuickSidebar: false
      }
    },
    methods: {
    },
    mounted() {
    }
  };
</script>

<style scoped>
</style>
