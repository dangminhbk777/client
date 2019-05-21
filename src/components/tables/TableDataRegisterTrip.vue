<template>
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
    data() {
      return {
        dataMap: new Map()
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
            title: "Tên người dùng",
            sortable: false,
            width: 100,
            textAlign: 'left',
          },
          {
            field: "avatar",
            title: "Ảnh đại diện",
            sortable: false,
            width: 200,
            textAlign: 'center',
            template: function (data) {
              return '<img style="border: solid 1px darkgrey" src="'+ URL_CALL_API + self.urlImage + data.avatar +'" alt="Image">'
            }
          },
          {
            field: "phone",
            title: "Số điện thoại",
            sortable: false,
            width: 150,
            textAlign: 'center',
          },
          {
            field: "createdAt",
            title: "Ngày tạo",
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
            title: "Xếp hạng",
            sortable: false,
            width: 100,
            textAlign: 'center',
          },
          {
            field: "status",
            title: "Trạng thái",
            width: 250,
            textAlign: 'center',
            sortable: false,
            template: function (data) {
              let dataId = null;
              if (data.userHitchhikerId) {
                dataId = data.userHitchhikerId;
              } else {
                dataId = data.userDriverId;
              }
              let status = data.status;
              // let isDisableCancel = status === "00" ? 'disabled="disabled" ' : '';
              let isDisableNotAccept = status === "01" ? 'disabled="disabled" ' : '';
              let isDisableAccept = status === "02" ? 'disabled="disabled" ' : '';
              let temp =
                  '  <button data-uh-id="'+ dataId +'" class="m-badge--wide btn btn-success btn-sm ___btn-accept"'+ isDisableAccept +'>\n' +
                  '    <span>Chấp nhận</span>\n' +
                  '  </button>\n' +
                  '  <button data-uh-id="'+ dataId +'" class="m-badge--wide btn btn btn-warning btn-sm ___btn-not-accept"'+ isDisableNotAccept + '>\n' +
                  '    <span>Không chấp nhận</span>\n' /*+
                  '  </button>\n' +
                  '  <button data-uh-id="'+ dataId +'" class="m-badge--wide btn btn-danger btn-sm ___btn-cancel"'+ isDisableCancel + '>\n' +
                  '    <span>Cancel</span>\n' +
                  '  </button>\n'*/
              ;
              return temp;
            }
          }
        ]
      });
      tableApp.on('click', '.___btn-accept', function(e) {
        let elementFirst = $(this);
        let id = elementFirst.attr("data-uh-id");
        self.dataMap.set(id, "02");
        self.$emit('dataMapUpdate', self.dataMap);
        elementFirst.attr("disabled", true);
        elementFirst.next().attr("disabled", false);
        elementFirst.next().next().attr("disabled", false);
      });
      tableApp.on('click', '.___btn-not-accept', function(e) {
        let elementBetween = $(this);
        let id = elementBetween.attr("data-uh-id");
        self.dataMap.set(id, "01");
        self.$emit('dataMapUpdate', self.dataMap);
        elementBetween.attr("disabled", true);
        elementBetween.prev().attr("disabled", false);
        elementBetween.next().attr("disabled", false);
      });
      tableApp.on('click', '.___btn-cancel', function(e) {
        let elementLast = $(this);
        let id = elementLast.attr("data-uh-id");
        self.dataMap.set(id, "00");
        self.$emit('dataMapUpdate', self.dataMap);
        elementLast.attr("disabled", true);
        elementLast.prev().attr("disabled", false);
        elementLast.prev().prev().attr("disabled", false);
      });
    }
  }
</script>

<style scoped>
</style>
