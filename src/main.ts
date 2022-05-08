import { createApp } from "vue";
import PhosphorVue from "phosphor-vue";
import App from "./App.vue";
import "./assets/css/global.scss";

const app = createApp(App);
app.use(PhosphorVue);
app.mount("#app");
