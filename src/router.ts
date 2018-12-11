import Vue from 'vue';
import Router from 'vue-router';

const HOME = () => import(/* webpackChunkName: "home" */ './views/Home.vue');
const FORMS_HOME = () => import(/* webpackChunkName: "sample" */ '@/views/Forms.vue');
const FORMS_WIZARD = () => import(/* webpackChunkName: "docs-forms-wizard" */ '@/views/forms/WizardDoc.vue');
const FORMS_BASIC = () => import(/* webpackChunkName: "docs-forms-basic" */ '@/views/forms/BasicDoc.vue');

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: HOME
		},
		{
			path: '/sample',
			name: 'Formidable Forms Sample',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: FORMS_HOME
		},
		{
			path: '/docs/forms/wizard',
			name: 'Formidable Wizard Form Documentation',
			component: FORMS_WIZARD
		},
		{
			path: '/docs/forms/basic',
			name: 'Formidable Basic Form Documentation',
			component: FORMS_BASIC
		}
	],
});
