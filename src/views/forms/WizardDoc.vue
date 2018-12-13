<template lang="pug">
#forms
    h2 Wizard Form Sample
    FormidableForm(:form="form")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType, IFormidableFieldProps, FormidableField } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';
import { FormidableText } from '@/models/Formidable/Field/FormidableText';

const formConfig: FormidableBasicForm = {
	fields: [
		{
			type: FieldType.Number,
			value: null,
			label: 'Any number'
		},
		{
			type: FieldType.Number,
			value: null,
			minimum: -20,
			label: 'Any number >= -20'
		},
		{
			type: FieldType.Number,
			value: null,
			minimum: 0,
			maximum: 10,
			label: 'Any number between 0-10'
		},
		{
			type: FieldType.Text,
			value: null,
			label: 'Any amount of string text'
		},
		{
			type: FieldType.Text,
			value: null,
			minLength: 3,
			label: 'Atleast 3 character string'
		},
		{
			type: FieldType.Text,
			value: null,
			maxLength: 8,
			label: 'At most 8 character string'
		},
		{
			type: FieldType.Text,
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
