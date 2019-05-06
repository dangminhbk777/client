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
      </div>
      <!-- HEAD: END -->
      <div class="m-portlet__body">
        <table-app v-if="mData"
                   :mData="mData"
                   :urlRecord="urlRecord">
        </table-app>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../services/http-common.js';
  import toastr from '../../services/toastr.js';
  import Table from '../../components/tables/TableMyHitchhiker.vue';

  export default {
    name: "MyHitchhikerList",
    components: {
      'table-app': Table
    },
    data: function() {
      return {
        mData: null,
        urlRecord: 'trip-by-hitchhiker/'
      }
    },
    methods: {
      myHitchhikerList: function () {
        let self = this;
        http.get('/trip-by-hitchhiker/my-trip/')
            .then(response => {
              self.mData = JSON.parse(response.data.metadata);
              console.log(self.mData);
            })
            .catch(e => {
              console.error(e);
              toastr.error("Error occurred");
            });
      }
    },
    mounted() {
      this.myHitchhikerList();
    }
  }
</script>

<style scoped>

</style>
