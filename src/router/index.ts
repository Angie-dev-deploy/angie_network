import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UnderConstructionView from "../views/UnderConstructionView.vue";
import NewsComponent from "@/components/NewsComponent.vue";

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
    path: "/news/:id", // Dynamic parameter :id
    name: "NewsComponent",
    component: NewsComponent,
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If the route has a hash (e.g., #example), scroll to the element
    if (to.hash) {
      return { el: to.hash };
    } else if (savedPosition) {
      // If a saved position exists, use it
      return savedPosition;
    } else {
      // Otherwise, scroll to the top of the page
      return { top: 0 };
    }
  },
});

export default router;
