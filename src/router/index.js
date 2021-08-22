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
    path: "/cases/case_id=:id",
    name: "case",
    component: Case,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from) {
    if (to.name == "case") {
      return {
        el: "#case-views",
      };
    } else if (
      (from.name == "case" && to.name == "home") ||
      to.name == "projects"
    ) {
      return {
        el: "#cases-hook",
        top: 20,
      };
    } else {
      return {
        top: 0,
      };
    }
  },
});

export default router;
