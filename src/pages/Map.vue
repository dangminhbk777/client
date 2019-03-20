<template>
  <div class="row">
    <div class="col-xl-8">
      <div class="m-portlet m-portlet--mobile ">
        <div class="m-portlet__head">
          <div class="m-portlet__head-caption">
            <div class="m-portlet__head-title">
              <h3 class="m-portlet__head-text">
                Google Map API
              </h3>
            </div>
          </div>
        </div>
        <div class="m-portlet__body">
          <div id="floating-panel">
            <input id="latlng" type="text" value="40.714224,-73.961452">
            <input id="submit" type="button" value="Reverse Geocode">
          </div>
          <div id="map"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Map",
    }
</script>

<style scoped>
  #map {
    height: 425px;
  }
  /* Optional: Makes the sample page fill the window. */
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #floating-panel {
    position: absolute;
    top: 10px;
    left: 25%;
    z-index: 5;
    background-color: #fff;
    padding: 5px;
    border: 1px solid #999;
    text-align: center;
    font-family: 'Roboto','sans-serif';
    line-height: 30px;
    padding-left: 10px;
  }
  #floating-panel {
    position: absolute;
    top: 5px;
    left: 50%;
    margin-left: -180px;
    width: 350px;
    z-index: 5;
    background-color: #fff;
    padding: 5px;
    border: 1px solid #999;
  }
  #latlng {
    width: 225px;
  }
</style>