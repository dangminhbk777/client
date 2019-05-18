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
      vehicle: null
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
            textAlign: 'left'
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
            },
          },
          {
            field: "numberSeat",
            title: "Số chỗ trống",
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
      tableApp
          .on('m-datatable--on-init', function () {
            console.log('Datatable init');
          })
          .on('m-datatable--on-layout-updated', function () {
            console.log('Layout render updated');
          })
          .on('m-datatable--on-ajax-done', function () {
            console.log('Ajax data successfully updated');
          })
          .on('m-datatable--on-ajax-fail', function (e, jqXHR) {
            console.log('Ajax error');
          })
          .on('m-datatable--on-goto-page', function (e, args) {
            console.log('Goto to pagination: ' + args.page);
          })
          .on('m-datatable--on-update-perpage', function (e, args) {
            console.log('Update page size: ' + args.perpage);
          })
          .on('m-datatable--on-reloaded', function (e) {
            console.log('Datatable reloaded');
          })
          .on('m-datatable--on-check', function (e, args) {
            console.log('Checkbox active: ' + args.toString());
          })
          .on('m-datatable--on-uncheck', function (e, args) {
            console.log('Checkbox inactive: ' + args.toString());
          })
          .on('m-datatable--on-sort', function (e, args) {
            console.log('Datatable sorted by ' + args.field + ' ' + args.sort);
          })
          .on('click', '.m-btn--pill', function(e) {
            console.log(tableApp);
          });

      $('#buttonSearch').click(function () {
        // get value position
        let position = $('#positionSearch').val();
        let positionArr = position.split(',');
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
          longitude: positionArr[0],
          latitude: positionArr[1],
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
