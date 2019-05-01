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

    <chat-app></chat-app>

  </div>
</template>

<script>
  import HeaderUser from './components/layouts/user/Header';
  import BodyUser from './components/layouts/user/Body';
  import FooterUser from './components/layouts/user/Footer';
  import QuickSidebar from './components/layouts/QuickSidebar';
  import Chat from './components/layouts/Chat';

  import PageLogin from './pages/Login.vue';
  import PageNotFound from './pages/404.vue';

  export default {
    name: "app",
    components: {
      'header-user-app': HeaderUser,
      'body-user-app': BodyUser,
      'footer-user-app': FooterUser,
      'quick-sidebar-app': QuickSidebar,
      'chat-app': Chat,

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
