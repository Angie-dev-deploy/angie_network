import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UnderConstructionView from "../views/UnderConstructionView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/partners",
    name: "partners",
    component: () => import("../views/PartnersView.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/NewsView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/objectives",
    name: "objectives",
    component: () => import("../views/ObjectivesView.vue"),
  },
  {
    path: "/activities",
    name: "activities",
    component: () => import("../views/ActivitiesView.vue"),
  },
  {
    path: "/media",
    name: "media",
    component: UnderConstructionView,
  },
  {
    path: "/outputs",
    name: "outputs",
    component: UnderConstructionView,
  },
  {
    path: "/dissemination",
    name: "dissemination",
    component: UnderConstructionView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
