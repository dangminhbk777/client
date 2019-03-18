<template>
    <!-- begin::Body -->
    <div class="m-grid__item m-grid__item--fluid  m-grid m-grid--ver-desktop m-grid--desktop 	m-container m-container--responsive m-container--xxl m-page__container m-body">
        <div class="m-grid__item m-grid__item--fluid m-wrapper">
                <sub-header-app-user></sub-header-app-user>
                <content-app-user></content-app-user>
        </div>
    </div>
</template>

<script>
    import SubHeader from './SubHeader';
    import Content from './Content';

    export default {
        name: "Body",
        components: {
            'sub-header-app-user': SubHeader,
            'content-app-user': Content
        }
    }
</script>

<style scoped>

</style>
