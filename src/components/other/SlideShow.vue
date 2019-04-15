<template>
  <div id="slideShow" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ul class="carousel-indicators">
      <li data-target="#slideShow" data-slide-to="0" class="active"></li>
      <li v-for="image in images" data-target="#slideShow" :data-slide-to="index++"></li>
<!--      <li v-for="image in images" data-target="#slideShow" :data-slide-to="index++" class="active"></li>-->
<!--      <li data-target="#slideShow" data-slide-to="1"></li>-->
<!--      <li data-target="#slideShow" data-slide-to="2"></li>-->
    </ul>
    <!-- The slide show -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://www.w3schools.com/bootstrap4/la.jpg" alt="Los Angeles">
      </div>
      <div class="carousel-item">
        <img src="https://www.w3schools.com/bootstrap4/chicago.jpg" alt="Chicago">
      </div>
      <div class="carousel-item">
        <img src="https://www.w3schools.com/bootstrap4/ny.jpg" alt="New York">
      </div>
    </div>
    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#slideShow" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#slideShow" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "SlideShow",
    props: {
      images: {
        type: Array,
        default: null
      },
    },
    data() {
      return {
        index: 0
      }
    }
  }
</script>

<style scoped>

</style>
