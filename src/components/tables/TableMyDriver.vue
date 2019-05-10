<template>
  <div class="m_datatable_"></div>
</template>

<script>
  import {URL_WEP_APP} from '../../services/variables.js';

  export default {
    name: "TableMyDriver",
    props: {
      mData: {
        type: Array,
        default: null
      },
      urlRecord: {
        type: String,
        default: null
      },
      templateActions: {
        type: String,
        default: null
      }
    },
    mounted() {
      let self = this;
      let table = $(this.$el);
      let tableApp =  table.mDatatable({
        data: {
          type: 'local',
          source: self.mData,
          pageSize: 10,
          // serverPaging: true,
          // serverFiltering: true,
          // serverSorting: true
        },
        processing: true,
        layout: {
          theme: 'default',
          class: '',
          scroll: true,
          height: null,
          minHeight: 100,
          header: true,
          footer: false
        },
        sortable: true,
        filterable: false,
        pagination: true,
        toolbar: {
          placement: ['bottom'],
          items: {
            pagination: {
              pageSizeSelect: [5, 10, 20, 30, 50] // display dropdown to select pagination size. -1 is used for "ALl" option
            },
          }
        },
        columns: [
          {
            field: "id",
            title: "ID",
            width: 50,
            textAlign: 'center',
            sortable: false,
          },
          {
            field: "description",
            title: "Description",
            width: 250,
            textAlign: 'left',
            sortable: false,
          },
          {
            field: "time",
            title: "Time",
            width: 150,
            textAlign: 'left',
            template: function(data) {
              let timeMilliseconds = data.time;
              let dateTime = new Date(timeMilliseconds);
              let options = {
                year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'
              };
              data.time = dateTime.toLocaleDateString('en', options);
              return data.time;
            }
          },
          {
            field: "typeVehicle",
            title: "Type Vehicle",
            width: 150,
            textAlign: 'center',
            template: function(data) {
              switch(data.typeVehicle) {
                case "1":
                  data.typeVehicle = "Motorbike";
                  break;
                case "2":
                  data.typeVehicle = "Car";
                  break;
                case "3":
                  data.typeVehicle = "Passenger Car";
                  break;
              }
              return data.typeVehicle;
            }
          },
          {
            field: "numberSeat",
            title: "Number Seat"
          },
          {
            field: "price",
            title: "Price",
            template: function(data) {
              if (data.price != null && !data.price.toString().includes(".000 (VNĐ)")) {
                data.price = data.price + ".000 (VNĐ)";
              }
              return data.price;
            },
          },
          {
            field: "note",
            title: "note",
            sortable: false,
          },
          {
            field: "Actions",
            title: "Actions",
            textAlign: 'center',
            width: 195,
            locked: {right: 'xl'},
            sortable: false,
            overflow: 'visible',
            template: function (data) {
              let urlDetail = URL_WEP_APP + self.urlRecord + data.id;
              let urlUpdate = URL_WEP_APP + self.urlRecord + data.id + '/update';
              let urlDelete = URL_WEP_APP + self.urlRecord + data.id + '/delete';
              console.log(self.templateActions);
              return self.templateActions
                  .replace('urlDetail', urlDetail)
                  .replace('urlUpdate', urlUpdate)
                  .replace('urlDelete', urlDelete);
            }
          }
        ]
      });
    }
  }
</script>

<style scoped>
  .__margin-btn {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
