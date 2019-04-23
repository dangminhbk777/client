<template>
  <div class="row">
    <div class="col-12">
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
                <button class="m-portlet__nav-link btn btn-primary m-btn m-btn--custom">
                  Submit
                </button>
              </li>
            </ul>
          </div>
        </div>
        <!-- HEAD: END -->
        <div class="m-portlet__body">
          <table-app :mData="mData" :urlImage="urlImage"></table-app>
        </div>
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
        mData: null,
        urlImage: "/images/avatar/"
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
