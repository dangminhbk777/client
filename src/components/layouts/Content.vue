<template>
    <div class="m-content">
        <router-view></router-view>
        <!--<div class="m-portlet">
            <form class="m-form m-form&#45;&#45;fit m-form&#45;&#45;label-align-right">
                <div class="m-portlet__body">
                    <div class="form-group m-form__group row">
                        <div class="col-lg-4 col-md-9 col-sm-12">
                            <select-place-holder
                                    :options="select2.options"
                                    :placeHolder="select2.placeHolder"
                                    :allowClear="select2.allowClear"
                                    v-model="select2.selected">
                                <option disabled value="0">Select One</option>
                            </select-place-holder>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <modal-app :title="modal.title"></modal-app>
        <table-app></table-app>-->
    </div>
</template>

<script>
    import Modal from '../modals/ModalText';
    import Select from '../selects/SelectPlaceHolder';
    import Table from '../tables/TableView';

    export default {
        name: "Content",
        components: {
            'modal-app': Modal,
            'select-place-holder': Select,
            'table-app': Table
        },
        data() {
            return {
                select2: {
                    allowClear: true,
                    placeHolder: "Select One",
                    options: [
                        { id: '1', text: 'Hello' },
                        { id: '2', text: 'World' },
                        { id: '3', text: 'Hello World' }
                    ],
                    selected: '2',
                },
                modal: {
                    title: 'title - update ',
                    content: 'content - update',
                    url: 'localhost',
                    method: 'POST'
                }
            }
        }
    }
</script>

<style scoped>

</style>
