import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main";
import Buildings from "@/views/Buildings";
import Upgrades from "@/views/Upgrades";
import Achievements from "@/views/Achievements";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/buildings",
    name: "Buildings",
    component: Buildings
  },
  {
    path: "/upgrades",
    name: "Upgrades",
    component: Upgrades
  },
  {
    path: "/achievements",
    name: "Achievements",
    component: Achievements
  }
];

const router = createRouter({
  mode: "history",
  linkExactActiveClass: "active border",
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
