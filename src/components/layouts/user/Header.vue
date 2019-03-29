<template>
  <!-- begin::Header -->
  <header id="m_header" class="m-grid__item m-header " m-minimize="minimize" m-minimize-offset="200" m-minimize-mobile-offset="200">
    <div class="m-header__top">
      <div class="m-container m-container--responsive m-container--xxl m-container--full-height m-page__container">
        <div class="m-stack m-stack--ver m-stack--desktop">
          <!-- begin::Brand -->
          <div class="m-stack__item m-brand">
            <div class="m-stack m-stack--ver m-stack--general m-stack--inline">
              <div class="m-stack__item m-stack__item--middle m-brand__logo">
                <a href="index.html" class="m-brand__logo-wrapper">
                  <img alt="" src="assets/demo/media/img/logo/logo.png" />
                </a>
              </div>
              <div class="m-stack__item m-stack__item--middle m-brand__tools">
                <div class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-left m-dropdown--align-push" m-dropdown-toggle="click" aria-expanded="true">
                  <a href="#" class="dropdown-toggle m-dropdown__toggle btn btn-outline-metal m-btn  m-btn--icon m-btn--pill">
                      <span>Dashboard</span>
                  </a>
                </div>
                <!-- begin::Responsive Header Menu Toggler-->
                <a id="m_aside_header_menu_mobile_toggle" href="javascript:;" class="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                  <span></span>
                </a>
                <!-- end::Responsive Header Menu Toggler-->
                <!-- begin::Topbar Toggler-->
                <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" class="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                  <i class="flaticon-more"></i>
                </a>
                <!--end::Topbar Toggler-->
              </div>
            </div>
          </div>
          <!-- end::Brand -->
          <!-- begin::Topbar -->
          <div class="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
            <div id="m_header_topbar" class="m-topbar  m-stack m-stack--ver m-stack--general">
              <div class="m-stack__item m-topbar__nav-wrapper">
                <ul class="m-topbar__nav m-nav m-nav--inline">
                  <li class="m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center 	m-dropdown--mobile-full-width" m-dropdown-toggle="click" m-dropdown-persistent="1">
                    <a href="#" class="m-nav__link m-dropdown__toggle" id="m_topbar_notification_icon">
                        <span class="m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger"></span>
                        <span class="m-nav__link-icon">
                        <span class="m-nav__link-icon-wrapper">
                          <i class="flaticon-alarm"></i>
                        </span>
                      </span>
                    </a>
                    <div class="m-dropdown__wrapper">
                      <span class="m-dropdown__arrow m-dropdown__arrow--center"></span>
                      <div class="m-dropdown__inner">
                        <div class="m-dropdown__header m--align-center" style="background: url(assets/app/media/img/misc/notification_bg.jpg); background-size: cover;">
                            <span class="m-dropdown__header-title">9 New</span>
                            <span class="m-dropdown__header-subtitle">User Notifications</span>
                        </div>
                        <div class="m-dropdown__body">
                          <div class="m-dropdown__content">
                            <ul class="nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand" role="tablist">
                              <li class="nav-item m-tabs__item">
                                <a class="nav-link m-tabs__link" data-toggle="tab" href="#topbar_notifications_logs" role="tab">Logs</a>
                              </li>
                            </ul>
                            <div class="tab-content">
                              <div class="tab-pane active" id="topbar_notifications_notifications" role="tabpanel">
                                <div class="m-scrollable" data-scrollable="true" data-height="250" data-mobile-height="200">
                                  <div class="m-list-timeline m-list-timeline--skin-light">
                                    <div class="m-list-timeline__items">
                                      <div class="m-list-timeline__item">
                                        <span class="m-list-timeline__badge"></span>
                                        <span class="m-list-timeline__text">System shutdown <span class="m-badge m-badge--success m-badge--wide">pending</span></span>
                                        <span class="m-list-timeline__time">14 mins</span>
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
                    <li class="m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                  <a href="#" class="m-nav__link m-dropdown__toggle">
                    <span class="m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide"></span>
                    <span class="m-nav__link-icon">
                            <span class="m-nav__link-icon-wrapper">
                              <i class="flaticon-share"></i>
                            </span>
                          </span>
                  </a>
                  <div class="m-dropdown__wrapper">
                    <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                    <div class="m-dropdown__inner">
                      <div class="m-dropdown__header m--align-center" style="background: url(assets/app/media/img/misc/quick_actions_bg.jpg); background-size: cover;">
                        <span class="m-dropdown__header-title">Quick Actions</span>
                        <span class="m-dropdown__header-subtitle">Shortcuts</span>
                      </div>
                      <div class="m-dropdown__body m-dropdown__body--paddingless">
                        <div class="m-dropdown__content">
                          <div class="m-scrollable" data-scrollable="false" data-height="380" data-mobile-height="200">
                            <div class="m-nav-grid m-nav-grid--skin-light">
                              <div class="m-nav-grid__row">
                                <a href="#" class="m-nav-grid__item">
                                  <i class="m-nav-grid__icon flaticon-file"></i>
                                  <span class="m-nav-grid__text">Generate Report</span>
                                </a>
                                <a href="#" class="m-nav-grid__item">
                                  <i class="m-nav-grid__icon flaticon-time"></i>
                                  <span class="m-nav-grid__text">Add New Event</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                  <li class="m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                    <a href="#" class="m-nav__link m-dropdown__toggle">
                      <span class="m-topbar__welcome">Hello,&nbsp;</span>
                      <span class="m-topbar__username">Nick</span>
                      <span class="m-topbar__userpic">
                        <img src="assets/app/media/img/users/user4.jpg" class="m--img-rounded m--marginless m--img-centered" alt="" />
                      </span>
                    </a>
                      <div class="m-dropdown__wrapper">
                        <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                        <div class="m-dropdown__inner">
                          <div class="m-dropdown__header m--align-center" style="background: url(assets/app/media/img/misc/user_profile_bg.jpg); background-size: cover;">
                            <div class="m-card-user m-card-user--skin-dark">
                              <div class="m-card-user__pic">
                                <img src="assets/app/media/img/users/user4.jpg" class="m--img-rounded m--marginless" alt="" />
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
                                  <a href="#" class="m-nav__link">
                                    <i class="m-nav__link-icon flaticon-logout"></i>
                                    <span class="m-nav__link-title">
                                      <span class="m-nav__link-wrap">
                                        <span class="m-nav__link-text" v-on:click="logout">Log out</span>
                                      </span>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                  </li>
                    <li id="m_quick_sidebar_toggle" class="m-nav__item">
                      <a href="#" class="m-nav__link m-dropdown__toggle">
                        <span class="m-nav__link-icon m-nav__link-icon--aside-toggle">
                          <span class="m-nav__link-icon-wrapper"><i class="flaticon-menu-button"></i></span>
                        </span>
                      </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- end::Topbar -->
        </div>
      </div>
    </div>
    <div class="m-header__bottom">
      <div class="m-container m-container--responsive m-container--xxl m-container--full-height m-page__container">
        <div class="m-stack m-stack--ver m-stack--desktop">
          <!-- begin::Horizontal Menu -->
          <div class="m-stack__item m-stack__item--middle m-stack__item--fluid">
            <button class="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-light " id="m_aside_header_menu_mobile_close_btn"><i class="la la-close"></i></button>
            <div id="m_header_menu" class="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-dark m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-light m-aside-header-menu-mobile--submenu-skin-light ">
              <ul class="m-menu__nav  m-menu__nav--submenu-arrow ">
                <li class="m-menu__item  m-menu__item--active " aria-haspopup="true"><a href="index.html" class="m-menu__link "><span class="m-menu__item-here"></span><span class="m-menu__link-text">Dashboard</span></a></li>
                <li class="m-menu__item  m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" aria-haspopup="true">
                  <a href="javascript:;" class="m-menu__link m-menu__toggle" title="Non functional dummy link">
                    <span class="m-menu__item-here"></span>
                    <span class="m-menu__link-text">Hoạt Động</span>
                    <i class="m-menu__hor-arrow la la-angle-down"></i>
                    <i class="m-menu__ver-arrow la la-angle-right"></i>
                  </a>
                  <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">
                    <span class="m-menu__arrow m-menu__arrow--adjust"></span>
                    <ul class="m-menu__subnav">
                      <li class="m-menu__item " aria-haspopup="true">
                        <a href="inner.html" class="m-menu__link ">
                          <i class="m-menu__link-icon flaticon-diagram"></i>
                          <span class="m-menu__link-title">
                            <span class="m-menu__link-wrap">
                              <span class="m-menu__link-text">Tạo chuyến đi</span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="m-menu__item  m-menu__item--submenu" m-menu-submenu-toggle="hover" m-menu-link-redirect="1" aria-haspopup="true">
                        <a href="javascript:;" class="m-menu__link m-menu__toggle" title="Non functional dummy link">
                          <i class="m-menu__link-icon flaticon-business"></i>
                          <span class="m-menu__link-text">Nhờ chuyển hàng</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- end::Horizontal Menu -->

          <!--begin::Search-->
          <div class="m-stack__item m-stack__item--middle m-dropdown m-dropdown--arrow m-dropdown--large m-dropdown--mobile-full-width m-dropdown--align-right m-dropdown--skin-light m-header-search m-header-search--expandable m-header-search--skin-" id="m_quicksearch" m-quicksearch-mode="default">
            <!--begin::Search Form -->
            <form class="m-header-search__form">
              <div class="m-header-search__wrapper">
                <span class="m-header-search__icon-search" id="m_quicksearch_search">
                  <i class="la la-search"></i>
                </span>
                <span class="m-header-search__input-wrapper">
                  <input autocomplete="off" type="text" name="q" class="m-header-search__input" value="" placeholder="Search..." id="m_quicksearch_input">
                </span>
                <span class="m-header-search__icon-close" id="m_quicksearch_close">
                  <i class="la la-remove"></i>
                </span>
                <span class="m-header-search__icon-cancel" id="m_quicksearch_cancel">
                  <i class="la la-remove"></i>
                </span>
              </div>
            </form>
            <!--end::Search Form -->

            <!--begin::Search Results -->
            <div class="m-dropdown__wrapper">
              <div class="m-dropdown__arrow m-dropdown__arrow--center"></div>
              <div class="m-dropdown__inner">
                <div class="m-dropdown__body">
                  <div class="m-dropdown__scrollable m-scrollable" data-scrollable="true" data-height="300" data-mobile-height="200">
                    <div class="m-dropdown__content m-list-search m-list-search--skin-light"></div>
                  </div>
                </div>
              </div>
            </div>
            <!--end::Search Results -->
          </div>
          <!--end::Search-->
        </div>
      </div>
    </div>
  </header>
  <!-- end::Header -->
</template>

<script>
    export default {
        name: "Header",
        methods: {
            logout() {
                localStorage.clear();
                window.location.href = '/login';
            }
        }
    }
</script>

<style scoped>
    body.m-aside-left--skin-light .m-header {
        back-ground: #fff;
    }
</style>
