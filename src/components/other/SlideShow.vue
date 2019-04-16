<template>
  <div id="slideShow" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ul class="carousel-indicators">
      <li v-for="(image, index) in images" data-target="#slideShow" :data-slide-to="index" :class="[index === 0 ? 'active': '']">
      </li>
    </ul>
    <!-- The slide show -->
    <div class="carousel-inner">
      <div v-for="(image, index) in images" :class="[index === 0 ? 'carousel-item active': 'carousel-item']">
        <img :src="baseUrlImage + image " alt="Image">
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
  import {URL_CALL_API} from '../../services/variables.js'

  export default {
    name: "SlideShow",
    props: {
      images: {
        type: Array,
        default: null
      },
      typeImage: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        baseUrlImage: URL_CALL_API + '/images' + this.typeImage
      }
    }
  }
</script>

<style scoped>
  .carousel-item img {
    width: 100%;
    height: 100%;
    min-height: 550px;
    max-height: 550px;
  }
</style>
