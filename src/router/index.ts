import { i18n } from "@/i18n/base";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/",
        name: "Home",
        meta: { title: "Michele Catelli" },
        component: () => import("@/views/Home.vue"),
        beforeEnter: (to, from, next) => {
          if (sessionStorage.getItem("redirect") !== null) {
            const redirect = sessionStorage.redirect;
            delete sessionStorage.redirect;
            next(redirect);
          } else {
            next();
          }
        },
      },
      {
        path: "books/:filter",
        name: "Books",
        meta: { title: "Michele Castelli | Libros" },
        component: () => import("@/views/Books.vue"),
      },
      {
        path: "articles",
        name: "Articles",
        meta: { title: "Michele Castelli | Articulos" },
        component: () => import("@/views/Articles.vue"),
      },
      {
        path: "interviews",
        name: "Interviews",
        meta: { title: "Michele Castelli | Entrevistas" },
        component: () => import("@/views/Interviews.vue"),
      },
      {
        path: "gallery/:filter",
        name: "Gallery",
        meta: { title: "Michele Castelli | Galería" },
        component: () => import("@/views/Gallery.vue"),
      },
      {
        path: "book/:id",
        name: "BooksDetail",
        meta: { title: "Michele Castelli | Obras" },
        component: () => import("@/views/BookDetail.vue"),
      },
      {
        path: "*",
        name: "not-found",
        redirect: "/",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  window.scroll(0, 0);
  document.title = to.meta.title;
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }
  i18n.locale = language;
  next();
});

export default router;
