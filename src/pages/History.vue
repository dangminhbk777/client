<template>
    <div>
        <!--<div class="row">-->
            <!--<div class="col-xl-12">-->
                <div class="m-portlet m-portlet--mobile">
                    <div class="m-portlet__body">
                        <table-app></table-app>
                    </div>
                </div>
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import Table from '../components/tables/TableView.vue';

    export default {
        name: "History",
        components: {
            'table-app': Table
        }
    }
</script>

<style scoped>
</style>
