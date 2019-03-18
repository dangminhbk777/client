<template>
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
        <sidebar-app></sidebar-app>
        <div class="m-grid__item m-grid__item--fluid m-wrapper">
            <subHeader-app></subHeader-app>
            <content-app></content-app>
        </div>
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue';
    import SubHeader from './SubHeader.vue';
    import Content from './Content.vue';

    export default {
        name: "Body",
        components: {
            'subHeader-app': SubHeader,
            'sidebar-app': Sidebar,
            'content-app': Content
        },
        data() {
            return {
                pages: ''
            }
        }
    }
</script>

<style scoped>

</style>
