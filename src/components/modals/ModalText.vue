<template>
  <div>
    <!--begin::Modal-->
    <div class="modal fade" v-bind:class="classModal" v-bind:style="styleModal" id="m_modal_1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="hide">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
            <div v-if="dataRating.length" class="m-scrollable" data-scrollbar-shown="true" data-scrollable="true" data-height="200">
              <div v-for="rating in dataRating" style="padding: 10px">
                <span class="font-weight-bold">{{rating.username}}</span>&nbsp;
                <i v-for="star in rating.star" class="la la-star" style="color: darkgrey"></i>
                <br>
                <span>{{rating.comment}}</span>
              </div>
            </div>
            <div v-else>
              <span style="color: darkgrey">Chưa có đánh giá</span>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="hide">
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--end::Modal-->
  </div>
</template>

<script>
  import http from '../../services/http-common.js';

  export default {
    name: "app-modal",
    props: {
      title: {
        type: String,
        default: 'title'
      },
      content: {
        type: String,
        default: 'content'
      },
      url: {
        type: String,
        default: 'localhost'
      },
      method: {
        type: String,
        default: 'GET'
      },
      showModal: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        dataRating: []
      }
    },
    methods: {
      hide() {
        let self = this;
        self.$emit('hideModal', false);
      },
      getRating: function () {
        let self = this;
        http.get('/user/' + 1 + '/rating')
            .then(response => {
              self.dataRating = JSON.parse(response.data.metadata);
            })
            .catch(e => {
              console.error(e);
            });
      },
    },
    computed: {
      classModal: function () {
        let self = this;
        if (self.showModal) {
          self.getRating();
          return 'show';
        }
        return null;
      },
      styleModal: function () {
        let self = this;
        if (self.showModal) {
          return 'display: block';
        }
        return 'display: none';
      }
    }
  }
</script>

<style scoped>
</style>
