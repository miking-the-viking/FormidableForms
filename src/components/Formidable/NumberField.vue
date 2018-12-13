<template lang="pug">
.field
    label.label(v-if="value.label") {{value.label}}
    .control
        input.input(type="number" :min="value.minimum" :max="value.maximum" v-model.number="val")
    p.help(v-if="hasFeedback" :class="feedbackClass") {{errorText}}
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';

@Component
export default class NumberField extends Vue {
	@Prop({ required: true }) private value!: FormidableField<number | null>;
	@Prop({ default: () => [] }) private validationErrors!: ValidationError[];

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

	set val(newVal: number | null) {
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
