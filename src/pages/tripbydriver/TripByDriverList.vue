<template>
  <div class="row">
    <div class="m-portlet m-portlet--mobile">
      <!-- HEAD: BEGIN -->
      <div class="m-portlet__head">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <h3 class="m-portlet__head-text">
              Danh sách chuyến đi
            </h3>
          </div>
        </div>
      </div>
      <!-- HEAD: END -->
      <div class="m-portlet__body">
        <!-- begin: Accordions -->
        <div class="m-accordion m-accordion--default" id="m_accordion_1" role="tablist">
          <div class="m-accordion__item">
            <div class="m-accordion__item-head collapsed" role="tab" id="m_accordion_1_item_1_head" data-toggle="collapse" href="#m_accordion_1_item_1_body" aria-expanded="false">
              <span class="m-accordion__item-icon"><i class="fa fa-filter"></i></span>
              <span class="m-accordion__item-title">Lọc dữ liệu</span>
              <span class="m-accordion__item-mode"></span>
            </div>
            <div class="m-accordion__item-body collapse" id="m_accordion_1_item_1_body" role="tabpanel" aria-labelledby="m_accordion_1_item_1_head" data-parent="#m_accordion_1" style="">
              <div class="m-accordion__item-content">
                <div class="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-10">
                  <div class="row align-items-center">
                    <div class="col-xl-12 order-2 order-xl-1">
                      <div class="form-group m-form__group row align-items-center">
                        <div class="col-md-3">
                          <div class="m-input-icon m-input-icon--left">
                            <input type="text" class="form-control m-input" placeholder="Mô tả..." id="positionSearch">
                            <span class="m-input-icon__icon m-input-icon__icon--left">
                              <span><i class="la la-search"></i></span>
                            </span>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="m-form__group m-form__group--inline">
                            <div class="m-form__label">
                              <label class="m-label m-label--single">Khoảng thời gian</label>
                            </div>
                            <input type="text" class="form-control" id="m_daterangepicker_1" readonly placeholder="Chọn thời gian" />
                          </div>
                          <div class="d-md-none m--margin-bottom-10"></div>
                        </div>
                        <div class="col-md-5">
                          <div class="m-form__group m-form__group--inline">
                            <div class="m-form__label __custom_width">
                              <label class="m-label m-label--single">Phương tiện</label>
                            </div>
                            <div class="m-form__control">
                              <select-place-holder
                                :options="select2.options"
                                :placeHolder="select2.placeHolder"
                                :allowClear="select2.allowClear"
                                v-model="select2.selected">
                                <option disabled value="0">Chọn một</option>
                              </select-place-holder>
                            </div>
                          </div>
                          <div class="d-md-none m--margin-bottom-10"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row align-items-center __padding-top-10">
                    <div class="col-xl-10 order-2 order-xl-1 m--align-right">
                      <div class="m-form__group m-form__group--inline">
                        <div class="m-form__label">
                          <label class="m-label m-label--single">Bán kính</label>
                        </div>
                        <input type="number" class="form-control" id="radius" style="max-width: 90px"/>
                        <div class="m-form__label">
                          <label class="m-label m-label--single">Từ giá</label>
                        </div>
                        <input type="number" class="form-control" id="priceFrom"/>
                        <div class="m-form__label" style="padding-left: 20px">
                          <label class="m-label m-label--single">Đến giá</label>
                        </div>
                        <input type="number" class="form-control" id="priceTo"/>
                        <div class="m-form__label" style="padding-left: 20px">
                          <label class="m-label m-label--single">Số chỗ</label>
                        </div>
                        <input type="number" class="form-control" id="numberSeat"/>
                      </div>
                    </div>
                    <div class="col-xl-2 order-1 order-xl-2 m--align-right">
                      <button id="buttonSearch" class="btn btn-primary m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill">
                        <span>
                          <i class="la la-search"></i>
                          <span>Tìm kiếm</span>
                        </span>
                      </button>
                      <div class="m-separator m-separator--dashed d-xl-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end: Accordions -->
        <table-app
            :url="url"
            :urlRecord="urlRecord"
            :vehicle="select2"
        >
        </table-app>
      </div>
    </div>
  </div>
</template>

<script>
  import Table from '../../components/tables/TableView.vue';
  import Select from '../../components/selects/SelectPlaceHolder';

  export default {
    name: "TripByDriverList",
    components: {
      'table-app': Table,
      'select-place-holder': Select
    },
    data() {
      return {
        select2: {
          allowClear: true,
          placeHolder: "Select One",
          options: [
            { id: '1', text: 'Motorbike' },
            { id: '2', text: 'Car' },
            { id: '3', text: 'Passenger Car' }
          ],
          selected: null,
        },
        url: "/data-tables/trip-by-driver",
        urlRecord: "trip-by-driver/"
      }
    }
  }
</script>

<style scoped>
  .__padding-top-10 {
    padding-top: 10px;
  }
  .__custom_width {
    min-width: 110px;
    max-width: 150px;
  }
</style>
