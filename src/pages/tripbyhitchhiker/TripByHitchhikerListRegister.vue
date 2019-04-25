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
                <button v-on:click="acceptDriver" class="m-portlet__nav-link btn btn-primary m-btn m-btn--custom">
                  Submit
                </button>
              </li>
            </ul>
          </div>
        </div>
        <!-- HEAD: END -->
        <div class="m-portlet__body">
          <table-app v-if="mData"
              :mData="mData"
              :urlImage="urlImage"
              v-on:dataMapUpdate="dataRaw = $event">
          </table-app>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../services/http-common.js';
  import Table from '../../components/tables/TableDataRegisterTrip.vue';

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
        urlImage: "/images/avatar/",
        dataRaw: null,
        tripStatus: {
          tripId: null,
          status: null
        }
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
      },
      acceptDriver: function () {
        let vm = this;
        let dataChange = [];
        console.log("accept driver");
        console.log(vm.dataRaw);
        vm.dataRaw.forEach(function (value, key) {
          vm.tripStatus.tripId = key;
          vm.tripStatus.status = value;
          dataChange.push(vm.copyObject(vm.tripStatus));
        });
        http.post('/trip-by-hitchhiker/accept-driver/', JSON.stringify(dataChange))
            .then(response => {
              console.log(response.data);
            })
            .catch(e => {
              console.error(e);
            });
      },
      copyObject: function (object) {
        return JSON.parse(JSON.stringify(object));
      }
    },
    mounted() {
      this.getListRegister();
    }
  }
</script>

<style scoped>

</style>
