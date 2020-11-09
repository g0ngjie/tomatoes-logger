import { createApp } from "vue";
import App from "./App.vue";
import { init, config, Enum, disabled } from "../../lib";
init({ prefix: "[-] ", unDeclare: false, disabled: false });
config(Enum.Level.INFO, { prefix: "--->", color: Enum.Color.WHITE });

createApp(App).mount("#app");
