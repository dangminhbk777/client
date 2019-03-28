<template>
    <div id="app" class="m-grid m-grid--hor m-grid--root m-page">
        <login-page v-if="isPageLogin"></login-page>
        <page-not-found v-else-if="isPageNotFound"></page-not-found>
        <!-- Page Admin: BEGIN -->
        <header-app v-if="isAdminPage"></header-app>
        <body-app v-if="isAdminPage"></body-app>
        <footer-app v-if="isAdminPage"></footer-app>
        <!-- Page Admin: END -->
        <!-- Page User: BEGIN -->
        <header-user-app v-if="isUserPage"></header-user-app>
        <body-user-app v-if="isUserPage"></body-user-app>
        <footer-user-app v-if="isUserPage"></footer-user-app>
        <!-- Page User: END -->
    </div>
</template>

<script>
import Header from './components/layouts/Header.vue';
import Body from './components/layouts/Body.vue';
import Footer from './components/layouts/Footer.vue';
import HeaderUser from './components/layouts/user/Header';
import BodyUser from './components/layouts/user/Body';
import FooterUser from './components/layouts/user/Footer';
import PageLogin from './pages/Login.vue';
import PageNotFound from './pages/404.vue';
import { ROLE_NAME, USER_ROLE, ADMIN_ROLE } from './services/variables.js'

export default {
    name: "app",
    components: {
        'header-app': Header,
        'body-app': Body,
        'footer-app': Footer,
        'header-user-app': HeaderUser,
        'body-user-app': BodyUser,
        'footer-user-app': FooterUser,
        'login-page': PageLogin,
        'page-not-found': PageNotFound
    },
    data() {
        return {
            isPageLogin: this.$route.path.includes('login'),
            isPageNotFound: this.$route.path.includes('page-not-found'),
            isUserPage : localStorage.getItem(ROLE_NAME) === USER_ROLE,
            isAdminPage : localStorage.getItem(ROLE_NAME) === ADMIN_ROLE,
            modal: {
                title: 'title - update ',
                content: 'content - update',
                url: 'localhost',
                method: 'POST'
            },
        }
    },
    methods: {
        information() {
            console.log(localStorage.getItem(ROLE_NAME) === "user");
            console.log(localStorage.getItem(ROLE_NAME));
        }
    },
    mounted() {
        this.information();
    }
};
</script>

<style scoped>
</style>
