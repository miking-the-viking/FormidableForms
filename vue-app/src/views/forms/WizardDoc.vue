<template lang="pug">
#forms
    h2 Wizard Form Sample
    FormidableForm(:form="form")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import {
    FieldType,
    IFormidableFieldProps,
    FormidableField
} from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableNumber } from '@/models/Formidable/Field/Number/FormidableNumber';
import { FormidableText } from '@/models/Formidable/Field/Text/FormidableText';

const formConfig: FormidableBasicForm = {
    fields: [
        {
            fieldType: FieldType.Number,
            value: null,
            label: 'Any number'
        },
        {
            fieldType: FieldType.Number,
            value: null,
            minimum: -20,
            label: 'Any number >= -20'
        },
        {
            fieldType: FieldType.Number,
            value: null,
            minimum: 0,
            maximum: 10,
            label: 'Any number between 0-10'
        },
        {
            fieldType: FieldType.Text,
            value: null,
            label: 'Any amount of string text'
        },
        {
            fieldType: FieldType.Text,
            value: null,
            minLength: 3,
            label: 'Atleast 3 character string'
        },
        {
            fieldType: FieldType.Text,
            value: null,
            maxLength: 8,
            label: 'At most 8 character string'
        },
        {
            fieldType: FieldType.Text,
            value: null,
            minLength: 3,
            maxLength: 8,
            label: 'Between 3-8 character string'
        }
    ]
};

@Component({
    components: {
        FormidableForm
    }
})
export default class WizardDoc extends Vue {
    private form = formConfig;
}
</script>
