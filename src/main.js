import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import NewsApp from "./NewsApp.vue";
import Home from "./Pages/Home.vue";
import Free from "./Pages/Free.vue";
import Paid from "./Pages/Paid.vue";
import {BootstrapVue3, BToastPlugin} from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import "../styles/style.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/free", component: Free },
    { path: "/paid", component: Paid },
  ],
});

const app = createApp(NewsApp);

app.use(router).use(BootstrapVue3).use(BToastPlugin);

router.isReady().then(() => {
  app.mount("#news-app");
});
