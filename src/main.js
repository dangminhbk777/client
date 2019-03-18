import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../node_modules/handsontable/dist/handsontable.full.css";
import "../node_modules/handsontable/dist/handsontable.full.js";

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
