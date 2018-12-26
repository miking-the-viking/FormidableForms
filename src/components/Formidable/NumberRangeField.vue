<template lang="pug">
.field
	label.label(v-if="value.label") {{value.label}}
	.columns
		.column
			.control
				label.label From
				input.input(type="number" v-model.number="from" :max="to" :class="fromFeedbackClass")
				p.help(v-if="hasFromFeedback" :class="fromFeedbackClass") {{fromErrorText}}
		.column
			.control
				label.label To
				input.input(type="number" v-model.number="to"  :min="from" :class="toFeedbackClass")
				p.help(v-if="hasToFeedback" :class="toFeedbackClass") {{toErrorText}}
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import { INumberRange, FormidableNumberRange } from '@/models/Formidable/Field/FormidableNumberRange';

@Component
export default class NumberRangeField extends Vue {
	@Prop({ required: true }) private value!: FormidableNumberRange;
	@Prop({ default: () => [] }) private validationErrors!: ValidationError[];

	get valueFieldError(): ValidationError | undefined {
		return this.validationErrors.find((val) => val.property === 'value');
	}

	get fromFieldError(): ValidationError | undefined {
		return this.valueFieldError ? this.valueFieldError.children.find((val) => val.property === 'from') : undefined;
	}

	get toFieldError(): ValidationError | undefined {
		return this.valueFieldError ? this.valueFieldError.children.find((val) => val.property === 'to') : undefined;
	}

	get hasFromFeedback() {
		return this.fromFieldError;
	}

	get hasToFeedback() {
		return this.toFieldError;
	}

	get fromFeedbackClass() {
		return {
			'is-danger': this.fromFieldError && this.from !== null,
			'is-success': this.value.value.from !== null && !this.fromFieldError
		};
	}

	get toFeedbackClass() {
		return {
			'is-danger': this.toFieldError && this.to !== null,
			'is-success': this.value.value.to !== null && !this.toFieldError
		};
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

	get fromErrorText() {
		return this.fromFieldError ? Object.keys(this.fromFieldError.constraints).reduce((acc, val) => {
			return acc + (this.fromFieldError as ValidationError).constraints[val];
		}, '') : null;
	}

	get toErrorText() {
		return this.toFieldError ? Object.keys(this.toFieldError.constraints).reduce((acc, val) => {
			return acc + (this.toFieldError as ValidationError).constraints[val];
		}, '') : null;
	}
}
</script>
