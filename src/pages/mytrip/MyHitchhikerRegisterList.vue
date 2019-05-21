<template>
  <div class="row">
    <div class="m-portlet m-portlet--mobile">
      <!-- HEAD: BEGIN -->
      <div class="m-portlet__head">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <h3 class="m-portlet__head-text">
              Chi tiết chuyến đi
            </h3>
          </div>
        </div>
      </div>
      <!-- HEAD: END -->
      <div class="m-portlet__body">
        <table-app v-if="mData"
            :mData="mData"
            :urlRecord="urlRecord"
            :templateActions="templateActions"
            numberActions="2">
        </table-app>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../services/http-common.js';
  import toastr from '../../services/toastr.js';
  import Table from '../../components/tables/TableMyDriver.vue';

  export default {
    name: "MyDriverRegister",
    components: {
      'table-app': Table
    },
    data: function() {
      return {
        mData: null,
        urlRecord: 'trip-by-hitchhiker/',
        templateActions: '<a href="urlDetail" class="btn m-btn--pill m-btn--air btn-primary btn-sm">\n' +
            '  <span>Chi tiết</span>\n' +
            '</a>&nbsp;&nbsp;' +
            '<a href="urlDelete" class="btn m-btn--pill m-btn--air btn-danger btn-sm">\n' +
            '  <span>Xóa</span>\n' +
            '</a>&nbsp;&nbsp;'
      }
    },
    methods: {
      myDriverList: function () {
        let self = this;
        http.get('/trip-by-hitchhiker/my-trip-register/')
            .then(response => {
              self.mData = JSON.parse(response.data.metadata);
            })
            .catch(e => {
              console.error(e);
              toastr.error("Error occurred");
            });
      }
    },
    mounted() {
      this.myDriverList();
    }
  }
</script>

<style scoped>

</style>
