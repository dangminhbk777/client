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
      },
      numberActions: {
        type: String,
        default: "3"
      }
    },
    data() {
      return {
        widthColumnActions: this.numberActions * 65
      }
    },
    methods: {
      updateAction: function (id) {
        let self = this;
        self.$emit('showModal', true);
        self.$emit('driverId', id);
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
            title: "Mô tả chuyến đi",
            width: 250,
            textAlign: 'left',
            sortable: false,
          },
          {
            field: "time",
            title: "Thời gian",
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
            title: "Phương tiện",
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
            title: "Số chỗ trống",
            textAlign: 'center'
          },
          {
            field: "price",
            title: "Giá",
            template: function(data) {
              if (data.price != null && !data.price.toString().includes(".000 (VNĐ)")) {
                data.price = data.price + ".000 (VNĐ)";
              }
              return data.price;
            },
          },
          {
            field: "note",
            title: "Chú thích",
            sortable: false,
          },
          {
            field: "Actions",
            title: "Hoạt động",
            textAlign: 'center',
            width: self.widthColumnActions,
            locked: {right: 'xl'},
            sortable: false,
            overflow: 'visible',
            template: function (data) {
              let urlDetail = URL_WEP_APP + self.urlRecord + data.id;
              let urlUpdate = URL_WEP_APP + self.urlRecord + data.id + '/update';
              let urlDelete = URL_WEP_APP + self.urlRecord + data.id + '/delete';
              return self.templateActions
                  .replace('urlDetail', urlDetail)
                  .replace('urlUpdate', urlUpdate)
                  .replace('urlDelete', urlDelete)
                  .replace('driverId', data.id);
            }
          }
        ]
      });
      tableApp.on('click', '.___btn-rating', function(e) {
        let element = $(this);
        let id = element.attr("driver-id");
        self.updateAction(id);
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
