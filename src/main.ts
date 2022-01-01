import { createApp } from "vue";
import axios from './utils/http'   //引入axios文件夹
import cookie from 'vue-cookies';
import { router } from './router';
import App from "./App.vue";

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"

const app = createApp(App);
app.use(router)
// app.use(ElementPlus);

app.config.globalProperties.$http=axios
app.config.globalProperties.$cookie=cookie

app.mount("#app");
