import { INavMapping } from '@/routing/INavMapping.interface';
import { FieldType } from '@/models/Formidable/Field/field.abstract';

const HOME = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue');
const FORMS_ROOT = () =>
    import(/* webpackChunkName: "forms" */ '@/views/Forms.vue');
const FORMS_HOME = () =>
    import(/* webpackChunkName: "docs-forms-home" */ '@/views/forms/FormsHome.vue');
const FORMS_WIZARD = () =>
    import(/* webpackChunkName: "docs-forms-wizard" */ '@/views/forms/WizardDoc.vue');
const FORMS_BASIC = () =>
    import(/* webpackChunkName: "docs-forms-basic" */ '@/views/forms/BasicDoc.vue');

const FIELDS_ROOT = () =>
    import(/* webpackChunkName: "docs-fields-root" */ '@/views/forms/FormidableFieldDoc.vue');
const FIELDS_HOME = () =>
    import(/* webpackChunkName: "docs-fields-home" */ '@/views/forms/FormidableFieldsDoc/FormidableFieldDocHome.vue');
const NUMBER_FIELD = () =>
    import(/* webpackChunkName: "docs-fields-number" */ '@/views/forms/FormidableFieldsDoc/FormidableNumberDoc.vue');
const TEXT_FIELD = () =>
    import(/* webpackChunkName: "docs-fields-text" */ '@/views/forms/FormidableFieldsDoc/FormidableTextDoc.vue');
const TEXTAREA_FIELD = () =>
    import(/* webpackChunkName: "docs-fields-textarea" */ '@/views/forms/FormidableFieldsDoc/FormidableTextareaDoc.vue');
const LINK_FIELD = () =>
    import(/* webpackChunkName: "docs-fields-link" */ '@/views/forms/FormidableFieldsDoc/FormidableLinkDoc.vue');
const EMAIL_FIELD = () =>
    import(/* webpackChunkName: "docs-fields-email" */ '@/views/forms/FormidableFieldsDoc/FormidableEmailDoc.vue');
const PASSWORD_FIELD = () =>
    import(/* webpackChunkName: "docs-fields-password" */ '@/views/forms/FormidableFieldsDoc/FormidablePasswordDoc.vue');
const NUMBERRANGE_FIELD = () =>
    import(/* webpackChunkName: "docs-fields-numberrange" */ '@/views/forms/FormidableFieldsDoc/FormidableNumberRangeDoc.vue');
const DATE_FIELD = () =>
    import(/* webpackChunkName: "docs-fields-date" */ '@/views/forms/FormidableFieldsDoc/FormidableDateDoc.vue');
const FILE_FIELD = () =>
    import(/* webpackChunkName: "docs-fields-file" */ '@/views/forms/FormidableFieldsDoc/FormidableFileDoc.vue');

const routes: INavMapping[] = [
    {
        path: '/',
        name: 'home',
        component: HOME,
        meta: {
            title: 'Formidable Forms Home',
            icon: 'home'
        }
    },
    {
        path: '/docs/forms',
        component: FORMS_ROOT,
        meta: {
            title: 'Formidable Forms',
            icon: 'home'
        },
        children: [
            {
                path: '',
                name: 'forms',
                component: FORMS_HOME,
                meta: {
                    title: 'Formidable Forms',
                    icon: 'home'
                }
            },
            {
                path: 'basic',
                name: 'forms-basic',
                component: FORMS_BASIC,
                meta: {
                    title: 'Formidable Basic Form',
                    icon: 'home'
                }
            },
            {
                path: 'wizard',
                name: 'forms-wizard',
                component: FORMS_WIZARD,
                meta: {
                    title: 'Formidable Wizard Form',
                    icon: 'extension'
                }
            }
        ]
    },
    {
        path: '/docs/fields',
        name: 'fields-home',
        component: FIELDS_ROOT,
        meta: {
            title: 'Formidable Fields',
            icon: 'home'
        },
        children: [
            {
                path: '',
                component: FIELDS_HOME,
                name: 'fields-home',
                meta: {
                    title: 'Formidable Fields Home',
                    icon: 'home'
                }
            },
            {
                name: FieldType.Number,
                path: FieldType.Number,
                component: NUMBER_FIELD,
                meta: {
                    title: 'Formidable Number Field',
                    icon: 'functions'
                }
            },
            {
                name: FieldType.Text,
                path: FieldType.Text,
                component: TEXT_FIELD,
                meta: {
                    title: 'Formidable Text Fields',
                    icon: 'title'
                }
            },
            {
                name: FieldType.Textarea,
                path: FieldType.Textarea,
                component: TEXTAREA_FIELD,
                meta: {
                    title: 'Formidable Textarea Field',
                    icon: 'text_fields'
                }
            },
            {
                name: FieldType.Link,
                path: FieldType.Link,
                component: LINK_FIELD,
                meta: {
                    title: 'Formidable Link Field',
                    icon: 'insert_link'
                }
            },
            {
                name: FieldType.Email,
                path: FieldType.Email,
                component: EMAIL_FIELD,
                meta: {
                    title: 'Formidable Email Field',
                    icon: 'person'
                }
            },
            {
                name: FieldType.Password,
                path: FieldType.Password,
                component: PASSWORD_FIELD,
                meta: {
                    title: 'Formidable Password Field',
                    icon: 'indeterminate_check_box'
                }
            }
            // {
            //     name: FieldType.NumberRange,
            //     path: FieldType.NumberRange,
            //     component: NUMBERRANGE_FIELD,
            //     meta: {
            //         title: 'Formidable Number Range Field',
            //         icon: 'home'
            //     }
            // },
            // {
            //     name: FieldType.File,
            //     path: FieldType.File,
            //     component: FILE_FIELD,
            //     meta: {
            //         title: 'Formidable File Field',
            //         icon: 'insert_drive_file'
            //     }
            // }
            // {
            //     name: FieldType.Date,
            //     path: FieldType.Date,
            //     component: DATE_FIELD,
            //     meta: {
            //         title: 'Formidable Date Field',
            //         icon: 'insert_invitation'
            //     }
            // }
        ]
    }
];

export default routes;
