<template>
  <!-- begin::Body -->
  <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor-desktop m-grid--desktop m-body">
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-container m-container--responsive m-container--xxl m-container--full-height">
      <div class="m-grid__item m-grid__item--fluid m-wrapper">
        <sub-header-app-user></sub-header-app-user>
        <content-app-user></content-app-user>
      </div>
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
  @media (min-width: 1025px) {
    .m-body .m-container.m-container--responsive .m-wrapper {
      padding: 0 80px;
    }
  }
</style>
