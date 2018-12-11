<template lang="pug">
#forms

	h1.title Formidable Basic Form
	h2.subtitle Straightforward, simple.

	.columns.is-desktop

		.column
			p The Formidable Basic Form is as basic as forms come. They are setup simply using a configuration json adhering to the
				code FormidableBasicForm
				| class. That is an array of
				code FormidableField
				| configurations.

		hr.is-hidden-desktop
		.column
			p.lead The form below was setup using the following
				code FormidableBasicForm
				| config:

			pre(v-highlightjs="JSON.stringify(form, null, 1)")
				CollapsibleArea
					code(class="javascript")

	FormidableForm(:form="form")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType, IFormidableFieldProps, FormidableField } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';
import { FormidableText } from '@/models/Formidable/Field/FormidableText';
import CollapsibleArea from '@/components/Interactive/CollapsibleArea.vue';

const formConfig: FormidableBasicForm<number | string | null> = {
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
		} as FormidableNumber,
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
		} as FormidableText,
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
		FormidableForm,
		CollapsibleArea
	}
})
export default class BasicDoc extends Vue {
	private form = formConfig;
}
</script>

