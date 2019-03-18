<template>
    <div>
        <handsontable :settings="settings"></handsontable>
    </div>
    <!--<div id="example1" class="hot handsontable htRowHeaders htColumnHeaders"
         style="height: 320px; overflow: hidden; width: 584px;"
         data-originalstyle="height: 320px; overflow: hidden; width: 584px;">
    </div>-->
</template>

<script>
    import {HotTable} from '@handsontable/vue';
    import HandsonTable from 'handsontable';

    export default {
        name: "table-handson",
        components: {
            'handsontable': HotTable
        },
        data: function() {
            return {
                settings: {
                    data: HandsonTable.helper.createSpreadsheetData(100, 100),
                    width: 584,
                    height: 320,
                    rowHeaders: true,
                    colHeaders: true,
                    manualColumnResize: true,
                    manualRowResize: true,
                    columnSorting: true,
                    headerTooltips: true
                }
            };
        }/*,
        mounted() {
            let table = $(this.$el);
            new HandsonTable($('#example1'), {
                data: HandsonTable.helper.createSpreadsheetData(100, 100),
                width: 584,
                height: 320,
                colWidths: 100,
                rowHeights: 23,
                rowHeaders: true,
                colHeaders: true
            })
        }*/
    }
</script>

<style scoped>
</style>
