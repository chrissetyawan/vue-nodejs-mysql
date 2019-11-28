import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";

import MailingList from "./components/MailingList.vue";
import Add from "./components/Add.vue";
import Mailing from "./components/Mailing.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/mailings",
      name: "mailings",
      component: MailingList
    },
    {
      path: "/mailing/:id",
      name: "mailing",
      component: Mailing,
      props: true
    },
    {
      path: "/add",
      name: "add",
      component: Add
    }
  ]
});
