import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    redirect:"/movie",
    children: [
      {
        path: "/movie",
        component: () => import("../views/Movie.vue"),
        children: [
          {
            path: "/movie",
            redirect: "/movie/hot"
          },
          {
            path: "hot",
            component: () => import("../views/movie/Hot.vue")
          },
          {
            path: "cinema",
            component: () => import("../views/movie/Cinema.vue")
          },
          {
            path: "wait",
            component: () => import("../views/movie/Wait.vue")
          },
          {
            path: "classic",
            component: () => import("../views/movie/Classic.vue")
          }
        ]
      },
      {
        path: "/video",
        component: () => import("../views/Video.vue")
      },
      {
        path: "/minivideo",
        component: () => import("../views/MiniVideo.vue")
      },
      {
        path: "/mine",
        component: () => import("../views/Mine.vue")
      },
      {
        path: "/show",
        component: () => import("../views/Show.vue"),
        beforeEnter: (to, from, next) => {
          if(!localStorage.getItem("token")){
            next("/logo")
          }else{
            next()
          }
        }
      }
    ]
  },
  {
    path: "/detail/:movieId",
    component: () => import("../views/Detail.vue"),
    props: true,
    name: "detail"
  },
  {
    path:"/logo",
    component:()=>import("../views/logo.vue"),

  },
  {
    path:"/cities",
    component:()=>import("../views/Cities.vue")
  },
  {
    path: "*",
    component: () => import("../views/404.vue")
  }
];
const router = new VueRouter({
  routes
});
// router.beforeEach((to, from,next) => {
//   console.log("to:",to)
//   console.log("from:",from)
//   if(to.path=="/show"){
//  if(!localStorage.getItem("token")){
//     next("/logo")
//   }else{
//     next()
//   }
//   }else{
//     next()
//   }
 
// })
export default router;
