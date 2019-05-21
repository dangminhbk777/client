<template>
  <div class="m_datatable_"></div>
</template>

<script>
  import {URL_WEP_APP} from '../../services/variables.js';

  export default {
    name: "TableMyHitchhiker",
    props: {
      mData: {
        type: Array,
        default: null
      },
      urlRecord: {
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
            width: 195,
            locked: {right: 'xl'},
            sortable: false,
            overflow: 'visible',
            template: function (data) {
              let urlDetail = URL_WEP_APP + self.urlRecord + data.id;
              let urlUpdate = URL_WEP_APP + self.urlRecord + data.id + '/update';
              let urlDelete = URL_WEP_APP + self.urlRecord + data.id + '/delete';
              return '<a href="' + urlDetail + '" class="btn m-btn--pill m-btn--air btn-primary btn-sm">\n' +
                  '  <span>Chi tiết</span>\n' +
                  '</a>&nbsp;&nbsp;' +
                  '<a href="' + urlUpdate + '" class="btn m-btn--pill m-btn--air btn-warning btn-sm">\n' +
                  '  <span>Cập nhật</span>\n' +
                  '</a>&nbsp;&nbsp;' +
                  '<a href="' + urlDelete + '" class="btn m-btn--pill m-btn--air btn-danger btn-sm">\n' +
                  '  <span>Xóa</span>\n' +
                  '</a>&nbsp;&nbsp;';
            }
          }
        ]
      });
    }
  }
</script>

<style scoped>

</style>
