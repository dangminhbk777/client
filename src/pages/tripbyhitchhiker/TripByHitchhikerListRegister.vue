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
        <table-app v-if="mData" :mData="mData"></table-app>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../services/http-common.js';
  import Table from '../../components/tables/TableDataLocal.vue';

  export default {
    name: "TripByHitchhikerListRegister",
    components: {
      'table-app': Table
    },
    props: {
      hitchhikerId: {
        type: String,
        default: null
      }
    },
    data: function() {
      return {
        mData: null
      }
    },
    methods: {
      getListRegister: function () {
        let vm = this;
        http.get('/trip-by-hitchhiker/register-trip/' + vm.hitchhikerId)
            .then(response => {
              vm.mData = JSON.parse(response.data.metadata);
            })
            .catch(e => {
              console.error(e);
            });
      }
    },
    mounted() {
      this.getListRegister();
    }
  }
</script>

<style scoped>

</style>
