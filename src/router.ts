import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cart",
      name: "cart",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Cart.vue")
    },
    {
      path: "/vending-machine",
      name: "vending-machine",
      component: () => import("./views/VendingMachine.vue")
    },
    {
      path: "/post-office",
      name: "post-office",
      component: () => import("./views/PostOffice.vue")
    },
    {
      path: "/coffee",
      name: "coffee",
      component: () => import("./views/Coffee.vue")
    },
    {
      path: "/image",
      name: "image",
      component: () => import("./views/Image.vue")
    }
  ]
});
