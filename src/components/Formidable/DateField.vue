<template lang="pug">
.field(:class="feedbackClass")
	label.label(v-if="value.label") {{value.label}}
	.control
		//- input.input(type="date" v-model.date="val" :class="feedbackClass")
		datetime(v-model.date="val" type="datetime" :use12-hour="true" :class="feedbackClass" :auto="true")
	p.help(v-if="hasFeedback" :class="feedbackClass") {{errorText}}
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';

@Component({
	components: {
		Datetime
	}
})
export default class DateField extends Vue {
	@Prop({ required: true }) private value!: FormidableField<Date>;
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
		return this.value.value ? this.value.value.toString() : this.value.value;
	}

	set val(value: null | string) {
		this.$emit('input', {
			...this.value,
			value
		});
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
