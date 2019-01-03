import { FieldType } from '@/models/Formidable/Field/field.abstract';
import Vue from 'vue';
import Router from 'vue-router';

const HOME = () => import(/* webpackChunkName: "home" */ './views/Home.vue');

const FORMS_HOME = () => import(/* webpackChunkName: "sample" */ '@/views/Forms.vue');
const FORMS_WIZARD = () => import(/* webpackChunkName: "docs-forms-wizard" */ '@/views/forms/WizardDoc.vue');
const FORMS_BASIC = () => import(/* webpackChunkName: "docs-forms-basic" */ '@/views/forms/BasicDoc.vue');

const FIELDS_ROOT = () => import(/* webpackChunkName: "docs-fields-root" */ '@/views/forms/FormidableFieldDoc.vue');
const FIELDS_HOME = () => import(
	/* webpackChunkName: "docs-fields-home" */ '@/views/forms/FormidableFieldsDoc/FormidableFieldDocHome.vue');
const NUMBER_FIELD = () => import(
	/* webpackChunkName: "docs-fields-number" */ '@/views/forms/FormidableFieldsDoc/FormidableNumberDoc.vue');
const TEXT_FIELD = () => import(
	/* webpackChunkName: "docs-fields-text" */ '@/views/forms/FormidableFieldsDoc/FormidableTextDoc.vue');
const TEXTAREA_FIELD = () => import(
	/* webpackChunkName: "docs-fields-textarea" */ '@/views/forms/FormidableFieldsDoc/FormidableTextareaDoc.vue');
const LINK_FIELD = () => import(
	/* webpackChunkName: "docs-fields-link" */ '@/views/forms/FormidableFieldsDoc/FormidableLinkDoc.vue');
const EMAIL_FIELD = () => import(
	/* webpackChunkName: "docs-fields-email" */ '@/views/forms/FormidableFieldsDoc/FormidableEmailDoc.vue');
const PASSWORD_FIELD = () => import(
	/* webpackChunkName: "docs-fields-password" */ '@/views/forms/FormidableFieldsDoc/FormidablePasswordDoc.vue');
const NUMBERRANGE_FIELD = () => import(
	/* webpackChunkName: "docs-fields-numberrange" */ '@/views/forms/FormidableFieldsDoc/FormidableNumberRangeDoc.vue');
const DATE_FIELD = () => import(
	/* webpackChunkName: "docs-fields-date" */ '@/views/forms/FormidableFieldsDoc/FormidableDateDoc.vue');
const FILE_FIELD = () => import(
	/* webpackChunkName: "docs-fields-file" */ '@/views/forms/FormidableFieldsDoc/FormidableFileDoc.vue');
const STATE_ANIMATIONS = () => import(
	/* webpackChunkName: "docs-state" */ '@/views/forms/FormidableFieldsDoc/FormidableState.vue');

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
			path: '/docs/state',
			name: 'Formidable State & Animations',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: STATE_ANIMATIONS
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
		},
		{
			path: '/docs/fields',
			name: 'Formidable Fields Documentation',
			component: FIELDS_ROOT,
			children: [
				{
					path: '',
					component: FIELDS_HOME
				},
				{
					name: FieldType.Number,
					path: FieldType.Number,
					component: NUMBER_FIELD
				},
				{
					name: FieldType.Text,
					path: FieldType.Text,
					component: TEXT_FIELD
				},
				{
					name: FieldType.Textarea,
					path: FieldType.Textarea,
					component: TEXTAREA_FIELD
				},
				{
					name: FieldType.Link,
					path: FieldType.Link,
					component: LINK_FIELD
				},
				{
					name: FieldType.Email,
					path: FieldType.Email,
					component: EMAIL_FIELD
				},
				{
					name: FieldType.Password,
					path: FieldType.Password,
					component: PASSWORD_FIELD
				},
				{
					name: FieldType.NumberRange,
					path: FieldType.NumberRange,
					component: NUMBERRANGE_FIELD
				},
				{
					name: FieldType.File,
					path: FieldType.File,
					component: FILE_FIELD
				},
				{
					name: FieldType.Date,
					path: FieldType.Date,
					component: DATE_FIELD
				}
			]
		}
	],
});
