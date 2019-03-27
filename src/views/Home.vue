<template lang="pug">
.home.container-fluid
    h1.md-display-3 Formidable Forms
    nav
        p
            img(src="https://travis-ci.com/miking-the-viking/FormidableForms.svg?token=mm6yHByGgeorBxsvuzKv&branch=master")
        p
            a(href="https://github.com/miking-the-viking/FormidableForms/projects/1") GitHub Project
    h2.md-display-1 The last solution you'll need for inputs or forms.
        br
        | Powered by TypeScript, built with TDD.

    h2.md-display-2 What it is, Soul Brother?

    p Formidable Forms is built using TypeScript and other open source libraries like 
        code class-validator
        | to provide a simply configured, consistent, plug'n'play solution to creating and using forms in a front end application framework like Vue.
    p In fact: the Vue implementation is the POC.

    md-divider

    h2.md-display-2 Forms, Formidable Forms.

    p Out of the box, Formidable Forms comes with several different form types that are easily extensible:

    p At its core, a form is defined by a 
        code JSON
        | object conforming to a
        code FormidableForm
        | Class specification.

    CollapsibleArea
        pre(v-highlightjs="sampleFormJSON")
            code(class="typescript")

    p Pass in a FormidableField object into the 
        code fields
        | array to add more fields to the form. Then pass the form configuration object to the 
        code FormidableForm
        | .
    CollapsibleArea
        pre(v-highlightjs="formidableFormVueComponentUsagePug")
            code(class="pug")
    CollapsibleArea
        pre(v-highlightjs="formidableFormVueComponentUsageHtml")
            code(class="vue")


    dl
        dt Basic Form
        dd Basic Forms are as simple as they come: a single form with 1...N Fields 
        dd
            router-link(to="/docs/forms/basic") Read more about Formidable Basic Form
        dt Wizard Form
        dd Wizard Forms are a little more advanced as they are designed to have 1...N Steps each containing 1...N Fields.
        dd
            router-link(to="/docs/forms/wizard") Read more about Formidable Wizard For

    md-divider

    h2.md-display-2 Simply Formidable Fields

    p Using the powers of abstracts and generics, Formidable Fields are very easily created, consistently; with validation, type safety and easy extensibility.
    
    p To make the codebase cleaner, and implementation more refined, enums are employed as necessary: for Formidable Fields this starts with `FieldType` enum defined in the `field.abstract`.				

    CollapsibleArea
        dl
            div(v-for="fieldType in fieldTypeDescriptions" :key="fieldType.key")
                dt.is-size-5 
                    code {{fieldType.key}}
                    | : 
                    code {{fieldType.resolvesTo}}
                dd {{fieldType.description}}

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import { DateType } from '@/models/Formidable/Field/FormidableDate';
import { FileType } from '@/models/Formidable/Field/FormidableFile';
import CollapsibleArea from '@/components/Interactive/CollapsibleArea.vue';

const fieldTypeDescriptions = [
    {
        key: 'FieldType.Number',
        resolvesTo: FieldType.Number,
        description: `The Formidable Number Field is used to accept a numeric input.
        It accepts optional minimum/maximum props.`
    },
    {
        key: 'FieldType.NumberRange',
        resolvesTo: FieldType.NumberRange,
        description: `The Formidable NumberRange Field is used to accept a NumberRange input.
        A NumberRanger is an object comprised of two numeric keys from and to.
        It has restrictive validation to ensure that from is always less than or equal to to`
    },
    {
        key: 'FieldType.Text',
        resolvesTo: FieldType.Text,
        description: `The Formidable Text Field is used to accept a text input.
        It accepts optional minLength and maxLength props.`
    },
    {
        key: 'FieldType.Textarea',
        resolvesTo: FieldType.Textarea,
        description: `The Formidable Textarea Field is used to accept a textarea input.
        It accepts optional minLength and maxLength props.`
    },
    {
        key: 'FieldType.Link',
        resolvesTo: FieldType.Link,
        description: `The Formidable Link Field is used to accept a Link input.
        A Link is an object comprised of an href string and a text string.
        It accepts optional minLinkHrefLength, maxLinkHrefLength, minLinkTextLength, and maxLinkTextLength props.`
    },
    {
        key: 'FieldType.Email',
        resolvesTo: FieldType.Email,
        description: `The Formidable Email Field is used to accept a Email input.
        It accepts optional minLength and maxLength props.`
    },
    {
        key: 'FieldType.Password',
        resolvesTo: FieldType.Password,
        description: `The Formidable Password Field is used to accept a Password input.
        It accepts optional minLength and maxLength props.`
    },
    {
        key: 'FieldType.Date',
        resolvesTo: FieldType.Date,
        description: `The Formidable Date Field is used to accept a Date input.
        It accepts a required dateType prop that is further refined by the DateType enum:
        ${Object.keys(DateType)
            .map(val => `DateType. ${val}`)
            .join(', ')}`
    },
    {
        key: 'FieldType.File',
        resolvesTo: FieldType.File,
        description: `The Formidable File Field is used to accept a File input.
        It accepts am fileType prop that is further refined by the FileType enum:
        ${Object.keys(FileType)
            .map(val => `FileType.${val}`)
            .join(', ')}.
        If no fileType is provided, any file type is accepted.`
    }
];

const sampleFormJSON = `const formConfig: FormidableBasicForm = {
    fields: [{
            fieldType: FieldType.Number,
            value: null,
            label: 'Any number',
            required: true
        },
        ...
    ]
};`;

const formidableFormVueComponentUsagePug = `FormidableForm(:form="form")`;
const formidableFormVueComponentUsageHtml = `<FormidableForm :form="form" />`;

@Component({
    components: {
        CollapsibleArea
    }
})
export default class Home extends Vue {
    private fieldTypeDescriptions = fieldTypeDescriptions;
    private sampleFormJSON = sampleFormJSON;
    private formidableFormVueComponentUsagePug = formidableFormVueComponentUsagePug;
    private formidableFormVueComponentUsageHtml = formidableFormVueComponentUsageHtml;
}
</script>

<style lang="scss" scoped>
dl {
    & > div.dl-item {
        margin-bottom: 1.2rem;
        dt + dd {
            margin-top: 0.75rem;
        }
    }
}
</style>
