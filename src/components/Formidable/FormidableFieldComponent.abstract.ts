import { Vue, Prop } from 'vue-property-decorator';
import { ValidationError } from 'class-validator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';

export abstract class FormidableFieldComponent<S extends FormidableField<any>> extends Vue {
	@Prop({ required: true }) protected value!: S;
	@Prop({ default: () => [], validator: (value) => {
		if (value === undefined || value === null || value.length >= 0) {
			return true;
		}
		const err = new ValidationError();
		err.property = 'validationErrors';
		throw err;
	} }) protected validationErrors!: ValidationError[];

	get isSubmittable() {
		return this.value.value !== null && (!this.validationErrors || this.validationErrors.length === 0);
	}

	get feedbackClass() {
		return {
			'is-danger': this.validationErrors && this.validationErrors.length > 0,
			'is-success': this.isSubmittable
		};
	}

	get val() {
		return this.value.value;
	}

	set val(newVal: S | string | null) {
		this.$emit('input', { ...this.value, value: newVal === '' ? null : newVal });
	}
	get id() {
		return this.value.id;
	}

	get name() {
		return this.value.name;
	}

	get required() {
		return this.value.required;
	}
	get id() {
		return this.value.id;
	}

	get name() {
		return this.value.name;
	}

	get required() {
		return this.value.required;
	}

	get fieldType() {
		return this.value.fieldType;
	}

	get label() {
		return this.value.label;
	}

	get disabled() {
		return this.value.disabled;
	}
}
