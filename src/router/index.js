import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Completed from "../views/Completed/Completed.vue";
import Login from "../views/Login.vue";
import Forms from "../views/Forms/Forms.vue";
import CompletedSingle from "../views/Completed/CompletedSingle.vue";
import KnowledgeBase from "../views/KnowledgeBase.vue";
import Scheduled from "../views/Scheduled.vue";
import Damages from "../views/Forms/Damages.vue";
import Modifications from "../views/Forms/Modifications.vue";
import Maintenance from "../views/Forms/Maintenance.vue";
import Technical from "../views/Forms/Technical.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
	},
	{
		path: "/Completed",
		name: "Completed",
		component: Completed,
	},
	{
		path: "/Login",
		name: "Login",
		component: Login,
	},
	{
		path: "/Completed/:id",
		name: "CompletedSingle",
		component: CompletedSingle,
		props: true,
	},
	{
		path: "/Forms",
		name: "Forms",
		component: Forms,
	},
	{
		path: "/KnowledgeBase",
		name: "KnowledgeBase",
		component: KnowledgeBase,
	},
	{
		path: "/Scheduled",
		name: "Scheduled",
		component: Scheduled,
	},

	{
		path: "/Damages",
		name: "Damages",
		component: Damages,
	},
	{
		path: "/Modifications",
		name: "Modifications",
		component: Modifications,
	},
	{
		path: "/Maintenance",
		name: "Maintenance",
		component: Maintenance,
	},
	{
		path: "/Technical",
		name: "Technical",
		component: Technical,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
