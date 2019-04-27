<template>
  <!-- begin::Header -->
  <header id="m_header" class="m-grid__item m-header " m-minimize="minimize" m-minimize-mobile="minimize" m-minimize-offset="200" m-minimize-mobile-offset="200">
    <div class="m-container m-container--fluid m-container--full-height">
      <div class="m-stack m-stack--ver m-stack--desktop  m-header__wrapper">

        <!-- BEGIN: Brand -->
        <div class="m-stack__item m-brand m-brand--mobile">
          <div class="m-stack m-stack--ver m-stack--general">
            <div class="m-stack__item m-stack__item--middle m-brand__logo">
              <a href="index.html" class="m-brand__logo-wrapper">
                <img alt="" src="/assets/demo/media/img/logo/logo.png"/>
              </a>
            </div>
            <div class="m-stack__item m-stack__item--middle m-brand__tools">
              <!-- BEGIN: Responsive Header Menu Toggler -->
              <a id="m_aside_header_menu_mobile_toggle" href="javascript:;" class="m-brand__icon m-brand__toggler">
                <span></span>
              </a>
              <!-- END -->
              <!-- BEGIN: Topbar Toggler -->
              <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" class="m-brand__icon">
                <i class="flaticon-more"></i>
              </a>
              <!--  END: Topbar Toggler -->
            </div>
          </div>
        </div>

        <!-- END: Brand -->
        <div class="m-stack__item m-stack__item--middle m-stack__item--left m-header-head" id="m_header_nav">
          <div class="m-stack m-stack--ver m-stack--desktop">
            <div class="m-stack__item m-stack__item--fluid">
              <!-- BEGIN: Horizontal Menu -->
              <button class="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark " id="m_aside_header_menu_mobile_close_btn"><i class="la la-close"></i></button>
              <div id="m_header_menu" class="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark ">
                <ul class="m-menu__nav  m-menu__nav--submenu-arrow ">
                  <!-- Menu DashBoard: BEGIN -->
                  <li class="m-menu__item  m-menu__item--active  m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" aria-haspopup="true">
                    <a href="javascript:;" class="m-menu__link m-menu__toggle" title="Non functional dummy link">
                      <span class="m-menu__item-here"></span>
                      <i class="m-menu__link-icon flaticon-analytics"></i>
                      <span class="m-menu__link-text">Dashboard</span>
                      <i class="m-menu__hor-arrow la la-angle-down"></i>
                      <i class="m-menu__ver-arrow la la-angle-right"></i>
                    </a>
                    <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">
                      <span class="m-menu__arrow m-menu__arrow--adjust"></span>
                      <ul class="m-menu__subnav">
                        <li class="m-menu__item  m-menu__item--active " aria-haspopup="true">
                          <a href="inner.html" class="m-menu__link ">
                            <i class="m-menu__link-icon flaticon-diagram"></i>
                            <span class="m-menu__link-title">
                              <span class="m-menu__link-wrap">
                                <span class="m-menu__link-text">Generate Reports</span>
                                <span class="m-menu__link-badge">
                                  <span class="m-badge m-badge--success">2</span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <!-- Menu DashBoard: END -->
                  <!-- Menu TRIP: BEGIN -->
                  <li class="m-menu__item  m-menu__item--active  m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" aria-haspopup="true">
                    <a href="javascript:;" class="m-menu__link m-menu__toggle" title="Non functional dummy link">
                      <span class="m-menu__item-here"></span>
                      <i class="m-menu__link-icon fa fa-road"></i>
                      <span class="m-menu__link-text">Trip</span>
                      <i class="m-menu__hor-arrow la la-angle-down"></i>
                      <i class="m-menu__ver-arrow la la-angle-right"></i>
                    </a>
                    <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">
                      <span class="m-menu__arrow m-menu__arrow--adjust"></span>
                      <ul class="m-menu__subnav">
                        <!-- MY TRIP: BEGIN -->
                        <li class="m-menu__item  m-menu__item--submenu" m-menu-submenu-toggle="hover" m-menu-link-redirect="1" aria-haspopup="true">
                          <a href="javascript:;" class="m-menu__link m-menu__toggle" title="Non functional dummy link">
                            <i class="m-menu__link-icon fa fa-shoe-prints"></i>
                            <span class="m-menu__link-text">My Trip</span>
                            <i class="m-menu__hor-arrow la la-angle-right"></i>
                            <i class="m-menu__ver-arrow la la-angle-right"></i>
                          </a>
                          <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--right">
                            <span class="m-menu__arrow "></span>
                            <ul class="m-menu__subnav">
                              <li class="m-menu__item" m-menu-link-redirect="1" aria-haspopup="true">
                                <a href="/my-driver" class="m-menu__link ">
                                  <span class="m-menu__link-text">Driver</span>
                                </a>
                              </li>
                              <li class="m-menu__item" m-menu-link-redirect="1" aria-haspopup="true">
                                <a href="/my-hitchhiker" class="m-menu__link ">
                                  <span class="m-menu__link-text">Hitchhiker</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <!-- MY TRIP: END -->
                        <!-- TRIP BY DRIVERS: BEGIN -->
                        <li class="m-menu__item  m-menu__item--submenu" m-menu-submenu-toggle="hover" m-menu-link-redirect="1" aria-haspopup="true">
                          <a href="javascript:;" class="m-menu__link m-menu__toggle" title="Non functional dummy link">
                            <i class="m-menu__link-icon fa fa-car"></i>
                            <span class="m-menu__link-text">Trip By Drivers</span>
                            <i class="m-menu__hor-arrow la la-angle-right"></i>
                            <i class="m-menu__ver-arrow la la-angle-right"></i>
                          </a>
                          <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--right">
                            <span class="m-menu__arrow"></span>
                            <ul class="m-menu__subnav">
                              <li class="m-menu__item" m-menu-link-redirect="1" aria-haspopup="true">
                                <a href="/trip-by-driver" class="m-menu__link ">
                                  <span class="m-menu__link-text">List Trip</span>
                                </a>
                              </li>
                              <li class="m-menu__item" m-menu-link-redirect="1" aria-haspopup="true">
                                <a href="/trip-by-driver/create" class="m-menu__link ">
                                  <span class="m-menu__link-text">New Trip</span>
                                </a>
                              </li>
                              <li class="m-menu__item  m-menu__item--submenu" m-menu-submenu-toggle="hover" m-menu-link-redirect="1" aria-haspopup="true">
                                <a href="javascript:;" class="m-menu__link m-menu__toggle" title="Non functional dummy link">
                                  <i class="m-menu__link-icon flaticon-business"></i>
                                  <span class="m-menu__link-text">Delivered Orders</span>
                                  <i class="m-menu__hor-arrow la la-angle-right"></i>
                                  <i class="m-menu__ver-arrow la la-angle-right"></i>
                                </a>
                                <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--right"><span class="m-menu__arrow "></span>
                                  <ul class="m-menu__subnav">
                                    <li class="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true"><a href="inner.html" class="m-menu__link "><span class="m-menu__link-text">Latest Orders</span></a></li>
                                    <li class="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true"><a href="inner.html" class="m-menu__link "><span class="m-menu__link-text">Pending Orders</span></a></li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <!-- TRIP BY DRIVERS: END -->
                        <!-- TRIP BY HITCHHIKER: BEGIN -->
                        <li class="m-menu__item  m-menu__item--submenu" m-menu-submenu-toggle="hover" m-menu-link-redirect="1" aria-haspopup="true">
                          <a href="javascript:;" class="m-menu__link m-menu__toggle" title="Non functional dummy link">
                            <i class="m-menu__link-icon fa fa-user-friends"></i>
                            <span class="m-menu__link-text">Trip By Hitchhikers</span>
                            <i class="m-menu__hor-arrow la la-angle-right"></i>
                            <i class="m-menu__ver-arrow la la-angle-right"></i>
                          </a>
                          <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--right">
                            <span class="m-menu__arrow "></span>
                            <ul class="m-menu__subnav">
                              <li class="m-menu__item" m-menu-link-redirect="1" aria-haspopup="true">
                                <a href="/trip-by-hitchhiker" class="m-menu__link ">
                                  <span class="m-menu__link-text">List Trip</span>
                                </a>
                              </li>
                              <li class="m-menu__item" m-menu-link-redirect="1" aria-haspopup="true">
                                <a href="/trip-by-hitchhiker/create" class="m-menu__link ">
                                  <span class="m-menu__link-text">New Trip</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <!-- TRIP BY HITCHHIKER: END -->
                      </ul>
                    </div>
                  </li>
                  <!-- Menu TRIP: END -->
                </ul>
              </div>
              <!-- END: Horizontal Menu -->
            </div>
          </div>
        </div>
        <div class="m-stack__item m-stack__item--middle m-stack__item--center">
          <!-- BEGIN: Brand -->
          <a href="index.html" class="m-brand m-brand--desktop">
            <img alt="" src="/assets/demo/media/img/logo/logo.png" />
          </a>
          <!-- END: Brand -->
        </div>
        <div class="m-stack__item m-stack__item--right">

          <!-- BEGIN: Topbar -->
          <div id="m_header_topbar" class="m-topbar  m-stack m-stack--ver m-stack--general">
            <div class="m-stack__item m-topbar__nav-wrapper">
              <ul class="m-topbar__nav m-nav m-nav--inline">
                <li class="m-nav__item m-nav__item--focus m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light	m-list-search m-list-search--skin-light" m-dropdown-toggle="click"
                    m-dropdown-persistent="1" id="m_quicksearch" m-quicksearch-mode="dropdown">
                  <a href="#" class="m-nav__link m-dropdown__toggle">
                    <span class="m-nav__link-icon"><span class="m-nav__link-icon-wrapper"><i class="flaticon-search-1"></i></span></span>
                  </a>
                  <div class="m-dropdown__wrapper">
                    <span class="m-dropdown__arrow m-dropdown__arrow--center"></span>
                    <div class="m-dropdown__inner ">
                      <div class="m-dropdown__header">
                        <form class="m-list-search__form">
                          <div class="m-list-search__form-wrapper">
                            <span class="m-list-search__form-input-wrapper">
                              <input id="m_quicksearch_input" autocomplete="off" type="text" name="q" class="m-list-search__form-input" value="" placeholder="Search...">
                            </span>
                            <span class="m-list-search__form-icon-close" id="m_quicksearch_close">
                              <i class="la la-remove"></i>
                            </span>
                          </div>
                        </form>
                      </div>
                      <div class="m-dropdown__body">
                        <div class="m-dropdown__scrollable m-scrollable" data-scrollable="true" data-height="300" data-mobile-height="200">
                          <div class="m-dropdown__content">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="m-nav__item m-nav__item--accent m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--align-center 	m-dropdown--mobile-full-width" m-dropdown-toggle="click" m-dropdown-persistent="1">
                  <a href="#" class="m-nav__link m-dropdown__toggle" id="m_topbar_notification_icon">
                    <span class="m-nav__link-icon">
                      <span class="m-nav__link-icon-wrapper">
                        <i class="flaticon-alarm"></i>
                        <span class="m-badge m-badge--success">0</span>
                      </span>
                    </span>
                  </a>
                  <div class="m-dropdown__wrapper">
                    <span class="m-dropdown__arrow m-dropdown__arrow--center"></span>
                    <div class="m-dropdown__inner">
                      <div class="m-dropdown__body">
                        <div class="m-dropdown__content">
                          <div class="tab-content">
                            <div class="tab-pane active" id="topbar_notifications_notifications" role="tabpanel">
                              <div class="m-scrollable" data-scrollable="true" data-height="250" data-mobile-height="200">
                                <div class="m-list-timeline m-list-timeline--skin-light">
                                  <div class="m-list-timeline__items">
                                    <div v-for="notification in notifications" class="m-list-timeline__item">
                                      <span class="m-list-timeline__badge -m-list-timeline__badge--state-success"></span>
                                      <span class="m-list-timeline__text">{{notification.content}}</span>
                                      <span class="m-list-timeline__time">{{notification.createdAt}}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="m-nav__item m-dropdown m-dropdown--medium m-dropdown--arrow  m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                  <a href="#" class="m-nav__link m-dropdown__toggle">
                    <span class="m-topbar__username m--hidden-mobile">{{username}}</span>
                    <span class="m-topbar__userpic">
                      <img src="/assets/app/media/img/users/user4.jpg" class="m--img-rounded m--marginless m--img-centered" alt="" />
                    </span>
                    <span class="m-nav__link-icon m-topbar__usericon  m--hide">
                      <span class="m-nav__link-icon-wrapper"><i class="flaticon-user-ok"></i></span>
                    </span>
                  </a>
                  <div class="m-dropdown__wrapper">
                    <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                    <div class="m-dropdown__inner">
                      <div class="m-dropdown__header m--align-center">
                        <div class="m-card-user m-card-user--skin-light">
                          <div class="m-card-user__pic">
                            <img src="/assets/app/media/img/users/user4.jpg" class="m--img-rounded m--marginless" alt="" />
                          </div>
                          <div class="m-card-user__details">
                            <span class="m-card-user__name m--font-weight-500">Mark Andre</span>
                            <a href="" class="m-card-user__email m--font-weight-300 m-link">mark.andre@gmail.com</a>
                          </div>
                        </div>
                      </div>
                      <div class="m-dropdown__body">
                        <div class="m-dropdown__content">
                          <ul class="m-nav m-nav--skin-light">
                            <li class="m-nav__section m--hide">
                              <span class="m-nav__section-text">Section</span>
                            </li>
                            <li class="m-nav__item">
                              <a href="profile.html" class="m-nav__link">
                                <i class="m-nav__link-icon flaticon-profile-1"></i>
                                <span class="m-nav__link-title">
                                  <span class="m-nav__link-wrap">
                                    <span class="m-nav__link-text">My Profile</span>
                                    <span class="m-nav__link-badge"><span class="m-badge m-badge--success">2</span></span>
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li class="m-nav__item">
                              <a href="profile.html" class="m-nav__link">
                                <i class="m-nav__link-icon flaticon-lifebuoy"></i>
                                <span class="m-nav__link-text">Support</span>
                              </a>
                            </li>
                            <li class="m-nav__separator m-nav__separator--fit"></li>
                            <li class="m-nav__item">
                              <a href="#" v-on:click="logout" class="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">Logout</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="m_quick_sidebar_toggle" class="m-nav__item m-nav__item--info m-nav__item--qs">
                  <a href="#" class="m-nav__link m-dropdown__toggle">
                    <span class="m-nav__link-icon m-nav__link-icon-alt"><span class="m-nav__link-icon-wrapper"><i class="flaticon-grid-menu"></i></span></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- END: Topbar -->
        </div>
      </div>
    </div>
  </header>
  <!-- end::Header -->
</template>

<script>
  import http from '../../../services/http-common';
  import toastr from '../../../services/toastr.js';

  export default {
    name: "Header",
    data() {
      return {
        username: localStorage.getItem("user"),
        notifications: []
      }
    },
    methods: {
      logout() {
          localStorage.clear();
          window.location.href = '/login';
      },
      getNotification: function() {
        let vm = this;
        http.get('/notification')
            .then(response => {
              vm.notifications = JSON.parse(response.data.metadata);
              console.log(JSON.parse(response.data.metadata));
            })
            .catch(e => {
              console.error(e);
              toastr.error("Error occurred");
            });
      },
      initWebSocket: function () {
        let vm = this;
        let stompClient = null;
        let authorization = localStorage.getItem("authorization");
        let socket = new SockJS('http://localhost:8080/carpool?authorization=' + authorization);
        stompClient = Stomp.over(socket);
        stompClient.debug = false;
        let headers = {};
        headers["authorization"] = localStorage.getItem("authorization");
        // stompClient.connect({headers}, function(frame) {
        stompClient.connect({}, function(frame) {
          // setConnected(true);
          stompClient.subscribe('/socket/notification', function(notification){
            vm.notifications.unshift(JSON.parse(notification.body));
            console.log(vm.notifications);
            //showMessage(JSON.parse(position));
          });
        });
      },
    },
    mounted() {
      this.initWebSocket();
      this.getNotification();
    }
  }
</script>

<style scoped>
  .m-list-timeline m-list-timeline--skin-light {
    height: 100%;
    max-height: 300px;
  }
  .m-list-timeline__items {
    height: inherit;
  }
</style>
