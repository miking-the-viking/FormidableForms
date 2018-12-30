<template lang="pug">
.field(:class="feedbackClass")
	label.label(v-if="value.label") {{value.label}}
	.control
		datetime.datetime-selector(
			v-model.date="val"
			:type="dateType"
			:use12-hour="true"
			:class="feedbackClass"
			:auto="true"
			:input-id="'datefield-' + Math.floor(Math.random() * 10000000)"
		)
	FeedbackText(:validationErrors="validationErrors" :valueIsSubmittable="isSubmittable")
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';
import { FormidableDate } from '@/models/Formidable/Field/FormidableDate';
import FeedbackText from '@/components/Formidable/components/FeedbackText.vue';
import { FormidableFieldComponent } from '@/components/Formidable/FormidableFieldComponent.abstract';

@Component({
	components: {
		Datetime,
		FeedbackText
	}
})
export default class DateField extends FormidableFieldComponent<FormidableDate> {
	get dateType() {
		return this.value.dateType;
	}
}
</script>

<style scoped lang="scss">
.datetime-selector {
	cursor: pointer;
}
</style>

