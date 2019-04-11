<template>
  <div>
    <div class="m-portlet m-portlet--mobile">
      <div class="m-portlet__head">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <h3 class="m-portlet__head-text">
              TRIP Data<small>data loaded from remote service</small>
            </h3>
          </div>
        </div>
      </div>
      <div class="m-portlet__body">

        <div class="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
          <div class="row align-items-center">
            <div class="col-xl-8 order-2 order-xl-1">
              <div class="form-group m-form__group row align-items-center">
                <div class="col-md-4">
                  <div class="m-form__group m-form__group--inline">
                    <div class="m-form__label">
                      <label>Status:</label>
                    </div>
                    <div class="m-form__control">
                      <div class="dropdown bootstrap-select form-control m-bootstrap-select"><select class="form-control m-bootstrap-select" id="m_form_status" tabindex="-98">
                        <option value="">All</option>
                        <option value="1">Pending</option>
                        <option value="2">Delivered</option>
                        <option value="3">Canceled</option>
                      </select><button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="m_form_status" title="Pending" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner">Pending</div></div>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu" role="combobox" x-placement="bottom-start" style="max-height: 502.938px; overflow: hidden; min-height: 121px; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 40px, 0px);"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1" style="max-height: 490.938px; overflow-y: auto; min-height: 109px;"><ul class="dropdown-menu inner show"><li class="selected active"><a role="option" class="dropdown-item selected active" aria-disabled="false" tabindex="0" aria-selected="true"><span class=" bs-ok-default check-mark"></span><span class="text">All</span></a></li><li class="selected"><a role="option" class="dropdown-item selected" aria-disabled="false" tabindex="0" aria-selected="true"><span class=" bs-ok-default check-mark"></span><span class="text">Pending</span></a></li><li><a role="option" class="dropdown-item" aria-disabled="false" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">Delivered</span></a></li><li><a role="option" class="dropdown-item" aria-disabled="false" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">Canceled</span></a></li></ul></div></div></div>
                    </div>
                  </div>
                  <div class="d-md-none m--margin-bottom-10"></div>
                </div>
                <div class="col-md-4">
                  <div class="m-form__group m-form__group--inline">
                    <div class="m-form__label">
                      <label class="m-label m-label--single">Type:</label>
                    </div>
                    <div class="m-form__control">
                      <div class="dropdown bootstrap-select form-control m-bootstrap-select"><select class="form-control m-bootstrap-select" id="m_form_type" tabindex="-98">
                        <option value="">All</option>
                        <option value="1">Online</option>
                        <option value="2">Retail</option>
                        <option value="3">Direct</option>
                      </select><button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="m_form_type" title="Online" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner">Online</div></div>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu" role="combobox" x-placement="bottom-start" style="max-height: 502.938px; overflow: hidden; min-height: 121px; position: absolute; transform: translate3d(0px, 40px, 0px); top: 0px; left: 0px; will-change: transform;"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1" style="max-height: 490.938px; overflow-y: auto; min-height: 109px;"><ul class="dropdown-menu inner show"><li class="selected active"><a role="option" class="dropdown-item selected active" aria-disabled="false" tabindex="0" aria-selected="true"><span class=" bs-ok-default check-mark"></span><span class="text">All</span></a></li><li class="selected"><a role="option" class="dropdown-item selected" aria-disabled="false" tabindex="0" aria-selected="true"><span class=" bs-ok-default check-mark"></span><span class="text">Online</span></a></li><li><a role="option" class="dropdown-item" aria-disabled="false" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">Retail</span></a></li><li><a role="option" class="dropdown-item" aria-disabled="false" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">Direct</span></a></li></ul></div></div></div>
                    </div>
                  </div>
                  <div class="d-md-none m--margin-bottom-10"></div>
                </div>
                <div class="col-md-4">
                  <div class="m-input-icon m-input-icon--left">
                    <input type="text" class="form-control m-input" placeholder="Search..." id="generalSearch">
                    <span class="m-input-icon__icon m-input-icon__icon--left">
                      <span><i class="la la-search"></i></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 order-1 order-xl-2 m--align-right">
              <a href="#" class="btn btn-primary m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill">
                <span>
                    <i class="la la-cart-plus"></i>
                    <span>New Order</span>
                </span>
              </a>
              <div class="m-separator m-separator--dashed d-xl-none"></div>
            </div>
          </div>
        </div>

        <table-app></table-app>
      </div>
    </div>
  </div>
</template>

<script>
    import Table from '../components/tables/TableView.vue';

    export default {
        name: "History",
        components: {
            'table-app': Table
        }
    }
</script>

<style scoped>
</style>
