import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FormOrgao from "../views/forms/FormOrgao";
import FormBanca from "../views/forms/FormBanca";
import FormQuestao from "../views/forms/FormQuestao";
import FormAssunto from "../views/forms/FormAssunto";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/form/banca',
        name: 'FormBanca',
        component: FormBanca
    },
    {
        path: '/form/questao',
        name: 'FormQuestao',
        component: FormQuestao
    },
    {
        path: '/form/assunto',
        name: 'FormAssunto',
        component: FormAssunto
    },
    {
        path: '/form/orgao',
        name: 'FormOrgao',
        component: FormOrgao
    },
];

const router = new VueRouter({
    routes
})

export default router
