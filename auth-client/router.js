import Vue from "vue";
import Router from "vue-router";
import AppLogin from "./src/components/AppLogin";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: AppLogin
    }

  ]
});

 
