<template>
  <div>
    <button type="button" class="btn btn-primary" data-toggle="modal" v-on:click="show"> Launch Modal</button>
      <!--begin::Modal-->
      <div class="modal fade" v-bind:class="showClass" v-bind:style="showStyle" id="m_modal_1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="hide">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>{{content}}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="hide">
                Close
              </button>
              <button type="button" class="btn btn-primary" v-on:click="confirm">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--end::Modal-->
  </div>
</template>

<script>
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
      }
    },
    data() {
      return {
        // variable that shows/hides modal
        showClass: null,
        showStyle: 'display: none',
      }
    },
    methods: {
      show() {
        this.showClass = 'show';
        this.showStyle = 'display: block';
      },
      hide() {
        this.showClass = null;
        this.showStyle = 'display: none';
      },
      confirm() {
        this.hide();
      }
    }
  }
</script>

<style scoped>
</style>
