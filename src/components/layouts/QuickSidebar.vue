<template>
  <!-- QUICK SIDEBAR: BEGIN -->
  <div id="m_quick_sidebar" v-bind:class="classQuickSidebar">
    <div v-bind:class="classQuickSidebarContent">
        <span id="m_quick_sidebar_close" class="m-quick-sidebar__close" v-on:click="hide">
          <i class="la la-close"></i>
        </span>
      <ul id="m_quick_sidebar_tabs" class="nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand" role="tablist">
        <li class="nav-item m-tabs__item">
          <a class="nav-link m-tabs__link active" data-toggle="tab" href="#m_quick_sidebar_tabs_settings" role="tab">Settings</a>
        </li>
        <li class="nav-item m-tabs__item">
          <a class="nav-link m-tabs__link" data-toggle="tab" href="#m_quick_sidebar_tabs_logs" role="tab">Logs</a>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id="m_quick_sidebar_tabs_settings" role="tabpanel">
          <div class="m-list-settings m-scrollable m-scroller ps" style="height: 483px; overflow: hidden;">
            <div class="m-list-settings__group">
              <div class="m-list-settings__heading">General Settings</div>
              <div class="m-list-settings__item">
                <span class="m-list-settings__item-label">Email Notifications</span>
                <span class="m-list-settings__item-control">
										<span class="m-switch m-switch--outline m-switch--icon-check m-switch--brand">
											<label>
												<input type="checkbox" checked="checked" name="">
												<span></span>
											</label>
										</span>
									</span>
              </div>
            </div>
            <div class="m-list-settings__group">
              <div class="m-list-settings__heading">System Settings</div>
              <div class="m-list-settings__item">
                <span class="m-list-settings__item-label">System Logs</span>
                <span class="m-list-settings__item-control">
										<span class="m-switch m-switch--outline m-switch--icon-check m-switch--brand">
											<label>
												<input type="checkbox" name="">
												<span></span>
											</label>
										</span>
									</span>
              </div>
            </div>
            <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 4px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
        </div>
        <div class="tab-pane" id="m_quick_sidebar_tabs_logs" role="tabpanel">
          <div class="m-list-timeline m-scrollable m-scroller ps" style="height: 483px; overflow: hidden;">
            <div class="m-list-timeline__group">
              <div class="m-list-timeline__heading">
                System Logs
              </div>
              <div class="m-list-timeline__items">
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--state-success"></span>
                  <a href="" class="m-list-timeline__text">12 new users registered <span class="m-badge m-badge--warning m-badge--wide">important</span></a>
                  <span class="m-list-timeline__time">Just now</span>
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--state-info"></span>
                  <a href="" class="m-list-timeline__text">System shutdown</a>
                  <span class="m-list-timeline__time">11 mins</span>
                </div>
              </div>
            </div>
            <div class="m-list-timeline__group">
              <div class="m-list-timeline__heading">
                Applications Logs
              </div>
              <div class="m-list-timeline__items">
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--state-info"></span>
                  <a href="" class="m-list-timeline__text">New order received <span class="m-badge m-badge--info m-badge--wide">urgent</span></a>
                  <span class="m-list-timeline__time">7 hrs</span>
                </div>
              </div>
            </div>
            <div class="m-list-timeline__group">
              <div class="m-list-timeline__heading">
                Server Logs
              </div>
              <div class="m-list-timeline__items">
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--state-success"></span>
                  <a href="" class="m-list-timeline__text">Production server up</a>
                  <span class="m-list-timeline__time">5 hrs</span>
                </div>
              </div>
            </div>
            <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 4px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
        </div>
      </div>
    </div>
  </div>
  <!-- QUICK SIDEBAR: END -->
</template>

<script>
  export default {
    name: "QuickSideBar",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      hide: function () {
        let vm = this;
        vm.$emit('hideQuickSidebar', false);
      }
    },
    mounted() {
    },
    computed: {
      classQuickSidebar: function () {
        let vm = this;
        if (vm.show) {
          return 'm-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light m-quick-sidebar--on';
        }
        return 'm-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light';
      },
      classQuickSidebarContent: function () {
        let vm = this;
        if (vm.show) {
          return 'm-quick-sidebar__content';
        }
        return 'm-quick-sidebar__content m--hide';
      }
    }
  }
</script>

<style scoped>

</style>
