<template>
    <div>
        <div class="row">
            <div class="col-xl-8">
                <div class="m-portlet m-portlet--mobile">
                    <div class="m-portlet__body">
                        <table-app></table-app>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-8">
                <div class="m-portlet m-portlet--mobile">
                    <div class="m-portlet__body">
                        <handsontable-app></handsontable-app>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <form enctype="multipart/form-data" action="http://localhost:8080/api/user/upload" method="post">
                <input type="file" name="images" class="file-input"  multiple="multiple"/>
                <button type="submit" class="primary submit-btn">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import Table from '../components/tables/TableView.vue';
    import HandsonTable from '../components/tables/TableHandson.vue';

    export default {
        name: "History",
        components: {
            'table-app': Table,
            'handsontable-app': HandsonTable
        }
    }
</script>

<style scoped>
</style>
