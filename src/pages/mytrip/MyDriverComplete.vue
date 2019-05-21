<template>
  <div class="row">
    <div class="m-portlet m-portlet--mobile">
      <!-- HEAD: BEGIN -->
      <div class="m-portlet__head">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <h3 class="m-portlet__head-text">
              Danh sách chuyến đi hoàn thành
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
            v-on:showModal="showModal = $event"
            v-on:driverId="driverId = $event"
            numberActions="1">
        </table-app>
      </div>
    </div>
    <modal-app v-if="driverId"
        title="Evaluate driving quality"
        :showModal="showModal"
        :driverId="driverId"
        v-on:hideModal="showModal = $event">
    </modal-app>
  </div>
</template>

<script>
  import http from '../../services/http-common.js';
  import toastr from '../../services/toastr.js';
  import Table from '../../components/tables/TableMyDriver.vue';
  import Modal from '../../components/modals/ModalRating.vue';

  export default {
    name: "MyDriverComplete",
    components: {
      'table-app': Table,
      'modal-app': Modal
    },
    data: function() {
      return {
        mData: null,
        urlRecord: 'trip-by-driver/',
        templateActions:
            '<a href="#" driver-id="driverId" class="btn m-btn--pill m-btn--air btn-primary btn-sm ___btn-rating">\n' +
            '  <span>Rating</span>\n' +
            '</a>',
        showModal: false,
        driverId: null
      }
    },
    methods: {
      myDriverComplete: function () {
        let self = this;
        http.get('/trip-by-driver/my-trip-complete/')
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
      this.myDriverComplete();
    }
  }
</script>

<style scoped>

</style>
