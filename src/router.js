// Início do roteamento

//Importanto o Criador de Rotas e Criador de Histórico pelo VueRouter
import {createRouter, createWebHistory} from 'vue-router'

//Importando os componentes necessários para as rotas.
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Site from "@/views/Site.vue";
import Vendas from "@/components/vendas/Vendas.vue";
import Servicos from "@/components/servicos/Servicos.vue";
import Leads from "@/components/vendas/Leads.vue";
import Contratos from "@/components/vendas/Contratos.vue";
import Dashboard from '@/components/dashboard/Dashboard.vue';

//Criando constante com um array de rotas da aplicação.
const routes = [
    //Cada rota tem um caminho (path), seu componente correspondente (component) e suas rotas filhas (children).
    { //Componente Site
        path:'/',
        component: Site
    },
    { //Componente Home
        path: '/home',
        component: Home,
        children: [ //Componentes Filhos Da Home
            { //Componente Vendas - Filho da Home
                path: 'vendas',
                component: Vendas ,
                children: [ //Componentes Filhos Da Vendas
                    { path: 'leads', component: Leads },
                    { path: 'contratos', component: Contratos }
                ]
            },
            { path: 'servicos', component: Servicos },
            { path: 'dashboard', component: Dashboard}
        ]
    },
    { //Componente Login
        path: '/login',
        component: Login
    }
]

//Usa o Criador de Rotas na constante criada e Cria as rotas com o objetos criados.
//Cria também um histórico de navegação das rotas e usa a constante Routes para executar o createRouter.
const router = createRouter({
    history: createWebHistory(),
    routes //routes: routes
})

//Exporta o Router para a Aplicação.
export default router;

// Fim do Roteamento