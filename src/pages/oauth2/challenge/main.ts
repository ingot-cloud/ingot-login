import { createApp } from "vue";

import App from "./IndexPage.vue";
import pinia from "@/stores";
import "@/styles";
import "uno.css";
import "virtual:svg-icons-register";

const app = createApp(App);
app.use(pinia).mount("#app");
