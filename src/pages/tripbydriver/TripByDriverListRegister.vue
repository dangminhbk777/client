<template>
  <div class="row">
    <div class="m-portlet m-portlet--mobile">
      <!-- HEAD: BEGIN -->
      <div class="m-portlet__head">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <h3 class="m-portlet__head-text">
              TRIP Data<small>data loaded from remote service</small>
            </h3>
          </div>
        </div>
        <div class="m-portlet__head-tools">
          <ul class="m-portlet__nav">
            <li class="m-portlet__nav-item">
              <button v-on:click="acceptHitchhiker" class="m-portlet__nav-link btn btn-primary m-btn m-btn--custom">
                Submit
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- HEAD: END -->
      <div class="m-portlet__body">
        <table-app v-if="mData" :mData="mData" :urlImage="urlImage"></table-app>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../services/http-common.js';
  import toastr from '../../services/toastr.js';
  import Table from '../../components/tables/TableDataLocal.vue';

  export default {
    name: "TripByDriverListRegister",
    components: {
      'table-app': Table
    },
    props: {
      driverId: {
        type: String,
        default: null
      }
    },
    data: function() {
      return {
        mData: null,
        urlImage: "/images/avatar/"
      }
    },
    methods: {
      getListRegister: function () {
        let vm = this;
        http.get('/trip-by-driver/register-trip/' + vm.driverId)
            .then(response => {
              vm.mData = JSON.parse(response.data.metadata);
            })
            .catch(e => {
              console.error(e);
              toastr.error("Error occurred");
            });
      },
      acceptHitchhiker: function () {
        console.log("accept hitchhiker");
      }
    },
    mounted() {
      this.getListRegister();
    }
  }
</script>

<style scoped>

</style>
