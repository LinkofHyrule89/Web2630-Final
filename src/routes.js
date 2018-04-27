//ToDo: Import Home Component
import Home from './components/Home.vue';
//ToDo: Import portfolio/Portfolio Component
import Portfolio from './components/portfolio/Portfolio.vue';
//ToDo: Import stocks/Stocks Component
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
    //ToDo: Create Route for Home Component with root (/) path
    { path: '', component: Home},
    //ToDo: Create Route for Portfolio Component
    { path: '/Portfolio', component: Portfolio},
    //ToDo: Create Route for Stocks Component
    { path: '/Stocks', component: Stocks}
];