<template>
<!--  <div></div>-->
  <div class="m_datatable_"></div>
</template>

<script>
  import {URL_CALL_API} from '../../services/variables.js'

  export default {
    name: "TableDataLocal",
    props: {
      mData: {
        type: Array,
        default: null
      },
      urlImage: {
        type: String,
        default: null
      }
    },
    mounted() {
      let vm = this;
      let table = $(this.$el);
      let tableApp =  table.mDatatable({
        data: {
          type: 'local',
          source: vm.mData,
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
              pageSizeSelect: [1, 5, 10, 20, 30, 50] // display dropdown to select pagination size. -1 is used for "ALl" option
            },
          }
        },
        columns: [
          {
            field: "userHitchhikerId",
            title: "ID",
            width: 50,
            textAlign: 'center',
            sortable: false,
          },
          {
            field: "username",
            title: "User Name",
            sortable: false,
            width: 100,
            textAlign: 'left',
          },
          {
            field: "avatar",
            title: "Avatar",
            sortable: false,
            width: 200,
            textAlign: 'center',
            template: function (data) {
              return '<img style="border: solid 1px darkgrey" src="'+ URL_CALL_API + vm.urlImage + data.avatar +'" alt="Image">'
            }
          },
          {
            field: "phone",
            title: "Phone",
            sortable: false,
            width: 150,
            textAlign: 'center',
          },
          {
            field: "createdAt",
            title: "Create At",
            width: 150,
            textAlign: 'left',
            template: function(data) {
              let timeMilliseconds = data.createdAt;
              let dateTime = new Date(timeMilliseconds);
              let options = {
                year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'
              };
              data.createdAt = dateTime.toLocaleDateString('en', options);
              return data.createdAt;
            }
          },
          {
            field: "star",
            title: "Favourite",
            sortable: false,
            width: 100,
            textAlign: 'center',
          },
          {
            field: "status",
            title: "Status",
            width: 250,
            textAlign: 'center',
            sortable: false,
            template: function (data) {
              let dataId = data.userHitchhikerId;
              let status = data.status;
              let temp =
                  '  <button data-uh-id="'+ dataId +'" class="m-badge--wide btn btn-success btn-sm ___btn-accept">\n' +
                  '    <span>Accept</span>\n' +
                  '  </button>\n' +
                  '  <button data-uh-id="'+ dataId +'" class="m-badge--wide btn btn btn-warning btn-sm ___btn-not-accept">\n' +
                  '    <span>Not Accept</span>\n' +
                  '  </button>\n' +
                  '  <button data-uh-id="'+ dataId +'" class="m-badge--wide btn btn-danger btn-sm ___btn-cancel">\n' +
                  '    <span>Cancel</span>\n' +
                  '  </button>\n';
              return temp;
            }
          }
        ]
      });
      tableApp.on('click', '.___btn-accept', function(e) {
        let elementFirst = $(this);
        elementFirst.attr("disabled", true);
        elementFirst.next().attr("disabled", false);
        elementFirst.next().next().attr("disabled", false);
      });
      tableApp.on('click', '.___btn-not-accept', function(e) {
        let elementBetween = $(this);
        elementBetween.attr("disabled", true);
        elementBetween.prev().attr("disabled", false);
        elementBetween.next().attr("disabled", false);
      });
      tableApp.on('click', '.___btn-cancel', function(e) {
        let elementLast = $(this);
        elementLast.attr("disabled", true);
        elementLast.prev().attr("disabled", false);
        elementLast.prev().prev().attr("disabled", false);
      });
    }
  }
</script>

<style scoped>
</style>
