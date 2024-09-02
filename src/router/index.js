import { createRouter, createWebHistory } from "vue-router";
import FormPage from "@/pages/Form.vue";
import PreviewPage from "@/pages/Preview.vue";

const routes = [
  {
    path: "/",
    redirect: "/form",
  },
  {
    path: "/form",
    name: "form",
    component: FormPage,
  },
  {
    path: "/preview",
    name: "preview",
    component: PreviewPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
