import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: 'Dashboard',
    meta: {
      title: 'Dashboard'
    },
    component: () => import("../views/dashboard/Index.vue"),
  },
  {
    path: '/transaksi',
    name: 'Transaksi',
    meta: {
      title: 'Transaksi'
    },
    component: () => import("../views/transaction/Index.vue"),
  },
  {
    path: '/manajemen-kartu',
    name: 'Manajemen Kartu',
    meta: {
      title: 'Manajemen Kartu'
    },
    component: () => import("../views/card/Index.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | SIPEKA`
  next()
})


export default router;

