<template>
  <div class="m_datatable_">
  </div>
</template>

<script>
  import { AUTHORIZATION } from '../../services/variables.js'
  export default {
    name: "table-view",
    /*components: {
        'action-table': ActionTable
    },*/
    props: {
      url: {
        type: String,
        default: 'localhost'
      }
    },
    methods: {
      showInformation() {
        alert('run');
      }
    },
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
        // layout definition
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
        /*search: {
            input: $('#generalSearch')
        },*/
        // columns definition
        columns: [
          // {
          //   field: "id",
          //   sortable: false, // disable sort for this column
          //   width: 50,
          //   textAlign: 'center',
          //   selector: {class: 'm-checkbox--solid m-checkbox--brand'}
          // },
          {
            field: "id",
            title: "ID",
            sortable: false, // disable sort for this column
            width: 50,
            textAlign: 'center',
          },
          {
            field: "description",
            title: "Description",
            sortable: 'asc', // default sort
            filterable: false, // disable or enable filtering
            width: 150
          },
          {
            field: "time",
            title: "Time",
          },
          {
            field: "typeVehicle",
            title: "Type Vehicle"
          },
          {
            field: "numberSeat",
            title: "Number Seat"
          },
          {
            field: "price",
            title: "Price"
          },
          {
            field: "note",
            title: "note",
            width: 500
          },
          {
            field: "Actions",
            title: "Actions",
            width: 110,
            locked: {right: 'xl'},
            sortable: false,
            overflow: 'visible',
            template: function (row, index, datatable) {
              // console.log('index-' + index);
              // console.log(row);
              let dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';
              // return ActionTable.toString();
              return '<span>\n' +
                  '        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View details">\n' +
                  '            <i class="la la-ellipsis-h"></i>\n' +
                  '        </a>\n' +
                  '        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\n' +
                  '            <i class="la la-edit"></i>\n' +
                  '        </a>\n' +
                  '        <a href="#" id="btn-delete-row" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\n' +
                  '            <i class="la la-trash"></i>\n' +
                  '        </a>\n' +
                  '    </span>';
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
