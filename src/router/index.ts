import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{ path: "/", component: () => import("@/views/Home.vue") },
	{
		path: "/movie/:movieId",
		component: () => import("@/views/Detail.vue"),
		props: true,
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
