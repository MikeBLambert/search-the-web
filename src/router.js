import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import ListNews from './components/news/ListNews.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/news', component: ListNews },
    { path: '*', redirect: '/' }
  ]
});