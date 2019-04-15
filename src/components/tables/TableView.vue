<template>
  <div class="m_datatable_"></div>
</template>

<script>
  import {AUTHORIZATION} from '../../services/variables.js'

  export default {
    name: "table-view",
    props: {
      url: {
        type: String,
        default: 'localhost'
      }
    },
    /*methods: {
      showInformation() {
        alert('run');
      }
    },*/
    mounted() {
      let table = $(this.$el);
      let tableApp =  table.mDatatable({
        data: {
          type: 'remote',
          source: {
            read: {
              url: 'http://localhost:8080/api/data-tables/trip-by-driver',
              headers: {
                'authorization': localStorage.getItem(AUTHORIZATION)
              },
              params: {
                query: {
                  param: 'value'
                }
              },
            },
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
        sortable: true,
        filterable: false,
        pagination: true,
        toolbar: {
          placement: ['bottom'],
          items: {
            pagination: {
              pageSizeSelect: [1, 5, 10, 20, 30, 50] // display dropdown to select pagination size. -1 is used for "ALl" option
            },
          }
        },
        /*search: {
            input: $('#generalSearch')
        },*/
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
            title: "Description",
            filterable: false,
            width: 250
          },
          {
            field: "time",
            title: "Time",
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
            title: "Type Vehicle",
            textAlign: 'center',
            template: function(data) {
              switch(data.typeVehicle) {
                case "1":
                  data.typeVehicle = "Xe máy";
                  break;
                case "2":
                  data.typeVehicle = "Ô tô (nhỏ)";
                  break;
                case "3":
                  data.typeVehicle = "Ô tô (lớn)";
                  break;
                default:
                  data.typeVehicle = null;
              }
              return data.typeVehicle;
            },
          },
          {
            field: "numberSeat",
            title: "Number Seat"
          },
          {
            field: "price",
            title: "Price",
            template: function(data) {
              data.price = data.price + ".000 (VNĐ)";
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
            width: 110,
            locked: {right: 'xl'},
            sortable: false,
            overflow: 'visible',
            template: function (data) {
              console.log(data);
              let url = "http://localhost:4200/trip-by-driver/" + data.id;
              return '<a href="' + url + '" class="btn m-btn--pill m-btn--air btn-primary btn-sm">\n' +
                     '  <span>Detail</span>\n' +
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
    }
  }
</script>

<style scoped>

</style>
