<template>
  <div class="m_datatable_"></div>
</template>

<script>
  import {AUTHORIZATION, URL_CALL_API, URL_WEP_APP} from '../../services/variables.js'

  export default {
    name: "table-view",
    props: {
      url: {
        type: String,
        default: 'localhost'
      },
      urlRecord: {
        type: String,
        default: null
      },
      vehicle: null,
      searchArea: null
    },
    mounted() {
      let self = this;
      let table = $(this.$el);
      let tableApp =  table.mDatatable({
        data: {
          type: 'remote',
          source: {
            read: {
              url: URL_CALL_API + this.url,
              headers: {
                'authorization': localStorage.getItem(AUTHORIZATION)
              }
            }
          },
          pageSize: 10,
          serverPaging: true,
          serverFiltering: true,
          serverSorting: true
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

        translate: {
          toolbar: {
            pagination: {
              items: {
                info: 'Hiển thị {{start}} - {{end}} của {{total}} chuyến đi'
              }
            }
          },
          records: {
            noRecords: 'Không có dữ liệu hiển thị'
          }
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
        // columns definition
        columns: [
          {
            field: "id",
            title: "ID",
            sortable: false,
            width: 50,
            textAlign: 'center',
          },
          {
            field: "description",
            title: "Mô tả chuyến đi",
            filterable: false,
            width: 250,
            textAlign: 'left',
            template: function(data) {
              if (data.description == null) {
                data.description = 'Không có mô tả';
              }
              return data.description;
            }
          },
          {
            field: "time",
            title: "Thời gian",
            textAlign: 'left',
            sortable: 'desc',
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
            textAlign: 'center',
            template: function(data) {
              switch(data.typeVehicle) {
                case "1":
                  data.typeVehicle = "Xe máy";
                  break;
                case "2":
                  data.typeVehicle = "Ô tô";
                  break;
                // case "3":
                //   data.typeVehicle = "Passenger Car";
                //   break;
              }
              return data.typeVehicle;
            },
          },
          {
            field: "numberSeat",
            title: "Số chỗ còn trống",
            textAlign: 'center'
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
            title: "Chú thích",
            sortable: false,
          },
          {
            field: "Actions",
            title: "Hoạt động",
            textAlign: 'center',
            width: 110,
            locked: {right: 'xl'},
            sortable: false,
            overflow: 'visible',
            template: function (data) {
              let url = URL_WEP_APP + self.urlRecord + data.id;
              return '<a href="' + url + '" class="btn m-btn--pill m-btn--air btn-primary btn-sm">\n' +
                     '  <span>Chi tiết</span>\n' +
                     '</a>';
            }
          }
        ]
      });
      $('#buttonSearch').click(function () {
        console.log(self.searchArea);
        // get value position
        // let position = $('#positionSearch').val();
        // let positionArr = position.split(',');
        // get value date
        let date = $('#m_daterangepicker_1').val();
        date = date.replace(' ', '');
        date = date.replace('-', ',');
        let dateArr = date.split(',');
        // get value vehicle
        let vehicle = self.vehicle.selected;
        // get value price
        let priceFrom = $('#priceFrom').val();
        let priceTo = $('#priceTo').val();
        // get number seat
        let numberSeat = $('#numberSeat').val();
        // get radius
        let radius = $('#radius').val();
        let params = {
          longitude: self.searchArea.beginLongitude,
          latitude: self.searchArea.beginLatitude,
          radius: radius,
          dateFrom: dateArr[0],
          dateTo: dateArr[1],
          vehicle: vehicle,
          priceFrom: priceFrom,
          priceTo: priceTo,
          numberSeat: numberSeat
        };
        tableApp.search(JSON.stringify(params));
      })
    }
  }
</script>

<style scoped>

</style>
