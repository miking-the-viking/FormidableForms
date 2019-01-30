<template lang="pug">
.field
	label.label(v-if="value.label") {{value.label}}
	.columns
		.column
			.control
				NumberField(v-model="fromField" :validationErrors="fromFieldError" :alternateValidationKey="from")
		.column
			.control
				NumberField(v-model="toField" :validationErrors="toFieldError" :alternateValidationKey="to")
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { FormidableField, FieldType } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import { INumberRange, FormidableNumberRange } from '@/models/Formidable/Field/FormidableNumberRange';
import NumberField from '@/components/Formidable/NumberField.vue';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';

@Component({
	components: {
		NumberField
	}
})
export default class NumberRangeField extends Vue {
	@Prop({ required: true }) private value!: FormidableNumberRange;
	@Prop({ default: () => [] }) private validationErrors!: ValidationError[];

	get fromField() {
		return {
			label: 'From',
			value: this.from,
			fieldType: FieldType.Number,
			maximum: this.to || undefined
		} as FormidableNumber;
	}

	set fromField(from: FormidableNumber) {
		this.from = from.value;
	}

	get toField() {
		return {
			label: 'To',
			value: this.to,
			fieldType: FieldType.Number,
			minimum: this.from || undefined
		} as FormidableNumber;
	}

	set toField(to: FormidableNumber) {
		this.to = to.value;
	}

	get valueFieldError(): ValidationError | undefined {
		return this.validationErrors.find((val) => val.property === 'value');
	}

	get fromFieldError(): ValidationError[] | undefined {
		const fromFieldErr = this.valueFieldError
			? this.valueFieldError.children.find((val) => val.property === 'from') : undefined;
		return fromFieldErr ? [fromFieldErr] : undefined;
	}

	get toFieldError(): ValidationError[] | undefined {
		const toFieldErr = this.valueFieldError
			? this.valueFieldError.children.find((val) => val.property === 'to') : undefined;
		return toFieldErr ? [toFieldErr] : undefined;
	}

	get from() {
		return this.value.value.from;
	}

	set from(from: number | null) {
		this.$emit('input', {...this.value, value: {...this.value.value, from}});
	}

	get to() {
		return this.value.value.to;
	}

	set to(to: number | null) {
		this.$emit('input', {...this.value, value: {...this.value.value, to}});
	}

}
</script>
