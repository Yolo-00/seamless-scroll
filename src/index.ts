import SeamlessScroll from "./components/SeamlessScroll/index.vue";
import type { App } from "vue";

const install = function (app: App<Element>) {
    app.component("SeamlessScroll", SeamlessScroll);
};

export default {
    SeamlessScroll,
    install,
}