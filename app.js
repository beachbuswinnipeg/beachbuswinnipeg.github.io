

Vue.component('top-menu', {
    template: `
        <div style="display: flex; flex-direction: row; position: fixed; width: 100%; background: white; justify-content:space-around;">
            <router-link to="act">Act Now</router-link>
            <router-link to="why">Why?</router-link>
        <div>
    `
})

const act = {template: '<div>ACTING</div>'};
const why = {template: '<div>Because, duh.</div>'};

const routes = [
    {path: '/act', component: act },
    {path: '/why', component: why }
];

const router = new VueRouter({
    routes
});


const app = new Vue({
    router
}).$mount('#app');