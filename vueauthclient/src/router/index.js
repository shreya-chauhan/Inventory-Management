import Vue from "vue"
import Router from "vue-router"
import Login from "@/components/Login"
// import HelloWorld from "@/components/HelloWorld"
import Dashboard from "@/components/Dashboard"
Vue.use(Router)
export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "HelloWorld",
    //   component: HelloWorld
    // },
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    }  
  ]
})