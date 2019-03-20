<template>
  <div>
    <div class="row">
      <div class="col-xl-6">
        <div class="m-portlet m-portlet--brand m-portlet--head-solid-bg m-portlet--bordered">
          <div class="m-portlet__head">
            <div class="m-portlet__head-caption">
              <div class="m-portlet__head-title">
                <h3 class="m-portlet__head-text">
                  Nhập thông tin chuyến đi
                </h3>
              </div>
            </div>
          </div>
          <form class="m-form m-form--fit m-form--label-align-right">
            <div class="m-portlet__body">
              <div class="form-group m-form__group">
                <label for="startTime">Thời gian xuất phát</label>
                <input class="form-control m-input" type="datetime-local" value="2011-08-19T13:45:00" id="startTime">
                <span class="m-form__help">We'll never share your email with anyone else.</span>
              </div>
              <div class="form-group m-form__group">
                <label for="typeVehicle">Phương tiện</label>
                <select class="form-control m-input" id="typeVehicle">
                  <option>Xe máy</option>
                  <option>Ô tô (nhỏ)</option>
                  <option>Ô tô (lớn)</option>
                </select>
              </div>
              <div class="form-group m-form__group">
                <label for="numberSeat">Số chỗ trống</label>
                <input class="form-control m-input" type="number" id="numberSeat">
              </div>
              <div class="form-group m-form__group">
                <label for="exampleTextarea">Chú thích</label>
                <textarea class="form-control m-input" id="exampleTextarea" rows="3"></textarea>
              </div>
            </div>
            <div class="m-portlet__foot m-portlet__foot--fit">
              <div class="m-form__actions">
                <button type="reset" class="btn btn-primary">Submit</button>
                <button type="reset" class="btn btn-secondary">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Trip"
  }
</script>

<style scoped>

</style>