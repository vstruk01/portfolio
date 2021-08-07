import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Case from "../views/Case";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/cases/:id",
    name: "case",
    component: Case,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
