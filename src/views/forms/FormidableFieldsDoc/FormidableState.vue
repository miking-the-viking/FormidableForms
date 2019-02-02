<template lang="pug">
#fields-password
	h3.is-size-3 Formidable State &amp; Animations

	p Out of the box, Formidable Forms comes with a consistent, customizable, rich state representation.
		| This helps ensure that the user of the form always has a clear, engaging experience using the form.


	h4.is-size-4 Form State

	p The state of the form comes from the state of the fields comprising the form.

	ul
		li if any field doesn't satisfy it's validation requirements: the form is invalid and cannot be submitted.
		li if any required field is null, the form is not ready to be submitted
		li if all required fields are populated and adhering to their validation requirements then the form is valid and can be submitted.

	p The Form State will be reflected in the smaples below by the state of their fields.

	h4.is-size-4 Field State

	p Field state is influenced by user input, the current value of the field, and the field's configuration.

	h5.is-size-5 Valid/Invalid

	p At it's core, one of the main benefits of Formidable Fields is the built in field validation using simple configuration objects. Put min/max requirements on a number; min/max length requirements on a string; file type restrictions and more.
	
	p If the value entered into the field does not satisfy the field's configured restrictions: the field has an error.
		| The field will list the error messages and enter into an 
		code error
		| &nbsp; state.
	
	p If the value entered into the field satisfied the field's configured restrictions: the field is valid.
		| the field will not list any error messages, and enter into a 
		code valid
		| &nbsp; state.

	.columns.is-mobile
		.column
			FormidableForm(:form="invalidField" :immediate="true")
		.column
			FormidableForm(:form="validField" :immediate="true")

	h5.is-size-5 Disabled

	p The optional, boolean prop 
		code disabled
		| &nbsp; can be used to put the individual field into a disabled state.
	
	.columns.is-mobile
		.column
			FormidableForm(:form="disabledField")
		.column
			FormidableForm(:form="enabledField")

	h5.is-size-5 Required

	p If the optional boolean property
		code required
		| &nbsp; is enabled, then the field has to be populated before the field is considered Valid, and before the form cn be submitted.
	
	p Required fields have a visual indicator to make the field stand out more from the other fields in the form.

	
	.columns.is-mobile
		.column
			FormidableForm(:form="optionalField")
		.column
			FormidableForm(:form="requiredField")

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';

const INVALID_FIELD = {
	fields: [
		{
			fieldType: FieldType.Number,
			value: -1,
			label: 'Number greater than or equal to 0',
			minimum: 0,
		}
	]
};

const VALID_FIELD = {
	fields: [
		{
			fieldType: FieldType.Number,
			value: 1,
			label: 'Number greater than or equal to 0',
			minimum: 0,
		}
	]
};

const DISABLED_FIELD = {
	fields: [
		{
			fieldType: FieldType.Number,
			value: null,
			label: 'Any Number',
			disabled: true
		}
	]
};

const ENABLED_FIELD = {
	fields: [
		{
			fieldType: FieldType.Number,
			value: 0,
			label: 'Any Number'
		}
	]
};

const OPTIONAL_FIELD = {
	fields: [
		{
			fieldType: FieldType.Number,
			value: null,
			label: 'Any Number (optional, you can submit with this field null)'
		}
	]
};

const REQUIRED_FIELD = {
	fields: [
		{
			fieldType: FieldType.Number,
			value: null,
			label: 'Any Number (required, this cannot be submitted until a number value is entered)',
			required: true
		}
	]
};

@Component({
	components: {
		FormidableForm
	}
})
export default class FormidableStateDoc extends Vue {
	private invalidField = {
		...INVALID_FIELD,
		// tslint:disable:no-console
		submit: () => console.log('sample submit action')
	};
	private validField = {
		...VALID_FIELD,
		submit: () => console.log('sample submit action')
	};
	private disabledField = DISABLED_FIELD;
	private enabledField = ENABLED_FIELD;
	private optionalField = {
		...OPTIONAL_FIELD,
		submit: () => console.log('sample submit action')
	};
	private requiredField = {
		...REQUIRED_FIELD,
		submit: () => console.log('sample submit action')
	};
}
</script>
