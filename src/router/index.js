import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import bus from "../utils/bus.js";
import { store } from "../store/index.js";
// import createListView from "../views/createListView.js"

Vue.use(VueRouter);

// router도 store처럼 같은 방법으로 모듈화 가능하다.

export const router = new VueRouter({
  mode: 'history',
  routes: [
    // path에는 url 주소가 담기고, component는 url 주소로 이동했을 때, 표시될 컴포넌트이다.
    {
      path: "/",
      // redirect로 serve를 켜자마자 원하는 컴포넌트로 바로 진입할 수 있다.
      redirect: "/news"
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
      // component: createListView("NewsView")
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
          next();
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      // component: createListView("AskView")
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
          next();
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      // component: createListView("JobsView")
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
    {
      path: "/user/:id",
      component: UserView,
    },
  ]
})