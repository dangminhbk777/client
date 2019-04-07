<template>
    <div id="app" class="m-grid m-grid--hor m-grid--root m-page">
        <login-page v-if="isPageLogin"></login-page>
        <page-not-found v-else-if="isPageNotFound"></page-not-found>
        <!-- Page User: BEGIN -->
        <header-user-app v-if="isUserPage"></header-user-app>
        <body-user-app v-if="isUserPage"></body-user-app>
        <footer-user-app v-if="isUserPage"></footer-user-app>
        <!-- Page User: END -->
    </div>
</template>

<script>
import HeaderUser from './components/layouts/user/Header';
import BodyUser from './components/layouts/user/Body';
import FooterUser from './components/layouts/user/Footer';
import PageLogin from './pages/Login.vue';
import PageNotFound from './pages/404.vue';
import { ROLE_NAME } from './services/variables.js'

export default {
    name: "app",
    components: {
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
            isUserPage : !this.$route.path.includes('login') && !this.$route.path.includes('page-not-found'),
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
