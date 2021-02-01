import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AddNewProduct from '@/components/AddNewProduct'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "App"
            }
        },
        {
            path: '/HomePage',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/AddNewProduct',
            name: 'AddNewProduct',
            component: AddNewProduct,
            
        }
    ]
})