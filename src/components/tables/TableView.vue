<template>
    <div class="m_datatable_">
    </div>
</template>

<script>
    import ActionTable from '../other/ActionTable.vue'
    export default {
        name: "table-view",
        /*components: {
            'action-table': ActionTable
        },*/
        props: {
            url: {
                type: String,
                default: 'localhost'
            }
        },
        methods: {
            showInformation() {
                alert('run');
            }
        },
        mounted() {
            let dataSet = [
                {
                    "RecordID": 1,
                    "OrderID": "61715-075",
                    "Country": "China",
                    "ShipCountry": "CN",
                    "ShipCity": "Tieba",
                    "ShipName": "Collins, Dibbert and Hoeger",
                    "ShipAddress": "746 Pine View Junction",
                    "CompanyEmail": "nsailor0@livejournal.com",
                    "CompanyAgent": "Nixie Sailor",
                    "CompanyName": "Gleichner, Ziemann and Gutkowski",
                    "Currency": "CNY",
                    "Notes": "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi",
                    "Department": "Outdoors",
                    "Website": "irs.gov",
                    "Latitude": 35.0032213,
                    "Longitude": 102.913526,
                    "ShipDate": "2\/12\/2018",
                    "PaymentDate": "2016-04-27 23:53:15",
                    "TimeZone": "Asia\/Chongqing",
                    "TotalPayment": "$246154.65",
                    "Status": 3,
                    "Type": 2,
                    "Actions": null
                },
                {
                    "RecordID": 8,
                    "OrderID": "64980-196",
                    "Country": "Croatia",
                    "ShipCountry": "HR",
                    "ShipCity": "Vinica",
                    "ShipName": "Gutkowski LLC",
                    "ShipAddress": "0 Elka Street",
                    "CompanyEmail": "hkite7@epa.gov",
                    "CompanyAgent": "Hazlett Kite",
                    "CompanyName": "Streich LLC",
                    "Currency": "HRK",
                    "Notes": "fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend",
                    "Department": "Automotive",
                    "Website": "accuweather.com",
                    "Latitude": 46.339513099999998,
                    "Longitude": 16.1537893,
                    "ShipDate": "8\/5\/2016",
                    "PaymentDate": "2017-04-29 22:07:06",
                    "TimeZone": "Europe\/Zagreb",
                    "TotalPayment": "$1162836.25",
                    "Status": 6,
                    "Type": 1,
                    "Actions": null
                },
            ];
            let table = $(this.$el);
            let tableApp =  table.mDatatable({
                data: {
                    type: 'local',
                    source: dataSet,
                    pageSize: 10,
                    serverPaging: true,
                    serverFiltering: false,
                    serverSorting: true
                },
                processing: true,
                // layout definition
                layout: {
                    theme: 'default',
                    class: '',
                    scroll: true,
                    height: null,
                    minHeight: 100,
                    header: true,
                    footer: false
                },
                // columns definition
                columns: [{
                    field: "RecordID",
                    title: "#",
                    sortable: false, // disable sort for this column
                    width: 40,
                    textAlign: 'center',
                    selector: {class: 'm-checkbox--solid m-checkbox--brand'}
                }, {
                    field: "OrderID",
                    title: "Order ID",
                    sortable: 'asc', // default sort
                    filterable: false, // disable or enable filtering
                    width: 150
                }, {
                    field: "Notes",
                    title: "Notes",
                    width: 700
                }, {
                    field: "CompanyAgent",
                    title: "Agent"
                }, {
                    field: "ShipDate",
                    title: "Ship Date"
                }, {
                    field: "Actions",
                    width: 110,
                    title: "Actions",
                    sortable: false,
                    overflow: 'visible',
                    template: function (row, index, datatable) {
                        // console.log('index-' + index);
                        // console.log(row);
                        // console.log(ActionTable);
                        let dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';
                        // return ActionTable.toString();
                        return '<span>\n' +
                            '        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View details">\n' +
                            '            <i class="la la-ellipsis-h"></i>\n' +
                            '        </a>\n' +
                            '        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\n' +
                            '            <i class="la la-edit"></i>\n' +
                            '        </a>\n' +
                            '        <a href="#" id="btn-delete-row" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\n' +
                            '            <i class="la la-trash"></i>\n' +
                            '        </a>\n' +
                            '    </span>';
                    }
                }]
            }).on('m-datatable--on-check', function() {
                /*$('#btn-delete-row').click(function () {
                    alert('run');
                });*/
                alert('run');
            }).on('click', '.m-btn--pill', function(e) {
                console.log(table);
                dataSet[0]['OrderID'] = 'update';
                table.originalDataSet = dataSet;
                table.load();
            });
        }
    }
</script>

<style scoped>

</style>
