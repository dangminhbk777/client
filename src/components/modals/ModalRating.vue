<template>
  <div class="__modal-rating">
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
            <div class="form-group m-form__group row">
              <label class="col-3 col-form-label" for="driver">Driver's name:</label>
              <div class="col-9" v-if="information">
                <span class="form-control __information-driver" id="driver">{{information.username}}</span>
              </div>
            </div>
            <div class="form-group m-form__group __rating-star">
              <a href="#" id="star1" v-bind:class="cssOne">
                <i class="fa flaticon-star"></i>
              </a>
              <a href="#" id="star2" v-bind:class="cssTwo">
                <i class="fa flaticon-star"></i>
              </a>
              <a href="#" id="star3" v-bind:class="cssThree">
                <i class="fa flaticon-star"></i>
              </a>
              <a href="#" id="star4" v-bind:class="cssFour">
                <i class="fa flaticon-star"></i>
              </a>
              <a href="#" id="star5" v-bind:class="cssFive">
                <i class="fa flaticon-star"></i>
              </a>
            </div>
            <form>
              <div class="form-group">
                <label for="comment-text" class="form-control-label">Comment:</label>
                <textarea class="form-control" id="comment-text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="hide">
              Close
            </button>
            <button type="button" class="btn btn-primary" v-on:click="submitRating">
              Submit
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
  import toastr from '../../services/toastr.js';

  export default {
    name: "ModalRating",
    props: {
      showModal: {
        type: Boolean,
        default: false
      },
      driverId: String,
      title: {
        type: String,
        default: 'title'
      },
      content: String,
      url: {
        type: String,
        default: 'localhost'
      },
      method: {
        type: String,
        default: 'GET'
      }
    },
    data() {
      return {
        // CSS for button star
        active: 'btn btn-warning m-btn m-btn--icon m-btn--icon-only __btn-star',
        notActive: 'btn btn-secondary m-btn m-btn--icon m-btn--icon-only __btn-star',
        cssOne: 'btn btn-warning m-btn m-btn--icon m-btn--icon-only __btn-star',
        cssTwo: 'btn btn-secondary m-btn m-btn--icon m-btn--icon-only __btn-star',
        cssThree: 'btn btn-secondary m-btn m-btn--icon m-btn--icon-only __btn-star',
        cssFour: 'btn btn-secondary m-btn m-btn--icon m-btn--icon-only __btn-star',
        cssFive: 'btn btn-secondary m-btn m-btn--icon m-btn--icon-only __btn-star',
        // Information owner trip
        information: null
      }
    },
    methods: {
      hide: function() {
        let self = this;
        self.resetRating();
        self.$emit('hideModal', false);
      },
      submitRating: function() {
        let self = this;
        let userInformation = {
          id: self.information.id,
          star: 5
        };
        http.post('/user/rating', JSON.stringify(userInformation))
            .then(response => {
              self.information = JSON.parse(response.data.metadata);
              toastr.success('Your review has been submitted. Thank you');
            })
            .catch(e => {
              console.error(e);
            });
        self.resetRating();
        self.hide();
      },
      resetRating: function () {
        let self = this;
        self.cssOne = self.active;
        self.cssTwo = self.notActive;
        self.cssThree = self.notActive;
        self.cssFour = self.notActive;
        self.cssFive = self.notActive;
      },
      getInformationOwnerTrip: function () {
        let self = this;
        http.get('/trip-by-driver/owner-trip/' + self.driverId)
            .then(response => {
              self.information = JSON.parse(response.data.metadata);
            })
            .catch(e => {
              console.error(e);
            });
      }
    },
    mounted() {
      let self = this;
      let btn1 = $('#star1');
      btn1.click(function () {
        self.cssOne = self.active;
        self.cssTwo = self.notActive;
        self.cssThree = self.notActive;
        self.cssFour = self.notActive;
        self.cssFive = self.notActive;
      });
      let btn2 = $('#star2');
      btn2.click(function () {
        self.cssOne = self.active;
        self.cssTwo = self.active;
        self.cssThree = self.notActive;
        self.cssFour = self.notActive;
        self.cssFive = self.notActive;
      });
      let btn3 = $('#star3');
      btn3.click(function () {
        self.cssOne = self.active;
        self.cssTwo = self.active;
        self.cssThree = self.active;
        self.cssFour = self.notActive;
        self.cssFive = self.notActive;
      });
      let btn4 = $('#star4');
      btn4.click(function () {
        self.cssOne = self.active;
        self.cssTwo = self.active;
        self.cssThree = self.active;
        self.cssFour = self.active;
        self.cssFive = self.notActive;
      });
      let btn5 = $('#star5');
      btn5.click(function () {
        self.cssOne = self.active;
        self.cssTwo = self.active;
        self.cssThree = self.active;
        self.cssFour = self.active;
        self.cssFive = self.active;
      });
    },
    computed: {
      classModal: function () {
        let self = this;
        if (self.showModal) {
          self.getInformationOwnerTrip();
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
  .__btn-star {
    margin-right: 2px;
  }
  .__information-driver {
    border: none;
    padding-left: 0 !important;
  }
</style>
