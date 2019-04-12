<template>
  <select class="form-control m-select2" name="param">
    <slot></slot>
  </select>
</template>

<script>
  export default {
    name: "select-place-holder",
    props: {
      options: {
        type: Array,
        default: null
      },
      value: {
        type: String,
        default: null
      },
      placeHolder: {
        type: String,
        default: null
      },
      allowClear: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      let vm = this;
      let select = $(this.$el);
      select.select2({
        data: this.options,
        placeholder: this.placeHolder,
        allowClear: this.allowClear
      });
      select.val(this.value).trigger('change');
      select.on('change', function () {
        vm.$emit('input', select.val());
      });
    },
    watch: {
      value: function (value) {
        // update value
        $(this.$el)
            .val(value)
            .trigger('change')
      },
      options: function (options) {
        // update options
        $(this.$el).empty().select2({ data: options })
      }
    },
    destroyed: function () {
      $(this.$el).off().select2('destroy')
    }
  }
</script>

<style scoped>

</style>
