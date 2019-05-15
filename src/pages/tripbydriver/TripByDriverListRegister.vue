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
        <table-app v-if="mData"
            :mData="mData"
            :urlImage="urlImage"
            v-on:dataMapUpdate="dataRaw = $event">
        </table-app>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../services/http-common.js';
  import toastr from '../../services/toastr.js';
  import Table from '../../components/tables/TableDataRegisterTrip.vue';

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
        urlImage: "/images/avatar/",
        dataRaw: null,
        dataChange: [],
        registerTripUpdate: {
          registerTripId: null,
          status: null,
        }
      }
    },
    methods: {
      getListRegister: function () {
        let self = this;
        http.get('/trip-by-driver/register-trip/' + self.driverId)
            .then(response => {
              self.mData = JSON.parse(response.data.metadata);
            })
            .catch(e => {
              console.error(e);
              toastr.error("Error occurred");
            });
      },
      acceptHitchhiker: function () {
        let self = this;
        self.dataRaw.forEach(function (value, key) {
          self.registerTripUpdate.registerTripId = key;
          self.registerTripUpdate.status = value;
          self.dataChange.push(self.copyObject(self.registerTripUpdate));
        });
        http.post('/trip-by-driver/accept-hitchhiker/' + self.driverId, JSON.stringify(self.dataChange))
            .then(response => {
              toastr.success("Update success");
              self.dataChange = [];
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
