<template lang="pug">
.formidable-form.container.is-fluid.box(:class="formClasses")
    .field(v-for="(field, index) in form.fields")
        component(v-bind:is="getField(field)" v-model="form.fields[index]" :validationErrors="getFieldErrors(index)")
</template>

<script lang="ts">
import { VueConstructor } from 'vue';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType, IFormidableFieldProps, FormidableField } from '@/models/Formidable/Field/field.abstract';
import { IFormidableFormProps } from '@/models/Formidable/Form/form.abstract';
import { transformAndValidate } from 'class-transformer-validator';
import { ValidationError } from 'class-validator';

import NumberField from '@/components/Formidable/NumberField.vue';
import InvalidField from '@/components/Formidable/InvalidField.vue';
import TextField from '@/components/Formidable/TextField.vue';
import TextArea from '@/components/Formidable/TextArea.vue';
import { FormidableWizardForm } from '@/models/Formidable/Form/FormidableWizardForm';

@Component({
	components: {
		InvalidField,
		NumberField,
		TextField,
		TextArea
	}
})
export default class FormidableForm extends Vue {
	private readonly FieldType = FieldType;
	private validationErrors: ValidationError[] = [];

	get isValid() {
		return this.validationErrors.length === 0;
	}

	get formClasses() {
		return {
			'is-danger': !this.isValid,
			'is-success': this.isValid && this.form.fields.reduce((acc, val) => {
				return acc || val.required ? val.value !== null : true;
			}, false)
		};
	}

	@Prop({
		required: true
	})
	private form!: FormidableBasicForm | FormidableWizardForm;

	private getField(field: FormidableField<any>): VueConstructor<Vue> {
		switch (field.type) {
			case FieldType.Number: return NumberField;
			case FieldType.Text: return TextField;
			case FieldType.Textarea: return TextArea;
			default: return InvalidField;
		}
	}

	@Watch('form', {
		deep: true,
		immediate: true
	})
	private async validateForm() {
		try {
			const res = await transformAndValidate(FormidableBasicForm, JSON.parse(JSON.stringify(this.form)));
			this.validationErrors = [];
		} catch (e) {
			this.validationErrors = e;
		}
	}

	private getFieldErrors(index: number): ValidationError[] | undefined {
		if (!this.validationErrors || this.validationErrors.length === 0) {
			return;
		}
		const fieldErr = this.validationErrors.find((valErr) => valErr.property === 'fields');
		if (!fieldErr) {
			return;
		}
		const indexErr = fieldErr.children.find((valErr) => parseInt(valErr.property, 10) === index);
		return indexErr ? indexErr.children : undefined;
	}
}
</script>

<style lang="scss" scoped>

.formidable-form {
	&.is-danger {
		box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(255, 0, 0, 0.87);
	}

	&.is-success {
		box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(40, 255, 0, 0.92);
	}
}

</style>
