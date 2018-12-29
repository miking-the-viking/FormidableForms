<template lang="pug">
.field(:class="feedbackClass")
    label.label(v-if="value.label") {{value.label}}
    .control
        input.input(type="text" :maxlength="value.maxLength" v-model="val" :class="feedbackClass")
    p.help(v-if="hasFeedback" :class="feedbackClass") {{errorText}}
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import { FormidableText } from '@/models/Formidable/Field/FormidableText';
import { transformAndValidate, transformAndValidateSync } from 'class-transformer-validator';

@Component
export default class TextField extends Vue {

	@Prop({ required: true, validator: (value) => {
		return transformAndValidateSync(FormidableText, value) ? true : false;
	} }) private value!: FormidableText;

	@Prop({ default: () => [], validator: (value) => {
		if (value === undefined || value === null || value.length >= 0) {
			return true;
		}
		const err = new ValidationError();
		err.property = 'validationErrors';
		throw err;
	} }) private validationErrors!: ValidationError[];

	get hasFeedback() {
		return this.validationErrors.length > 0;
	}

	get feedbackClass() {
		return {
			'is-danger': this.validationErrors && this.validationErrors.length > 0,
			'is-success': this.value.value !== null && (!this.validationErrors || this.validationErrors.length === 0)
		};
	}

	get val() {
		return this.value.value;
	}

	set val(newVal: string | null) {
		this.$emit('input', {...this.value, value: newVal});
	}

	get errorText() {
		if (!this.validationErrors || this.validationErrors.length === 0) {
			return null;
		}

		return this.validationErrors.reduce((acc, val) => {
			return acc + (val.property === 'value' ?
				Object.keys(val.constraints).reduce((acc2, val2) => {
					return acc2 + val.constraints[val2];
				}, '') : ''
			);
		}, '');
	}

}
</script>
