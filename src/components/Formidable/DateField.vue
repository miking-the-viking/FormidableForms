<template lang="pug">
.field(:class="feedbackClass")
	label.label(v-if="value.label") {{value.label}}
	.control.has-icons-left.has-icons-right
		datetime.datetime-selector(
			:type="dateType"
			v-model.date="val"
			:use12-hour="true"
			class="datetime-selector input"
			:auto="true"
			:input-id="'datefield-' + Math.floor(Math.random() * 10000000)"
			:name="name"
			:disabled="disabled"
			:required="required"
			:id="id"
			:class="feedbackClass"
		)
		RequiredIcon(
			:required="required"
			:valueIsSubmittable="isSubmittable"
			:validationErrors="validationErrors"
		)
		RequiredIcon(
			:required="required"
			:valueIsSubmittable="isSubmittable"
			:validationErrors="validationErrors"
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
import RequiredIcon from '@/components/Formidable/components/RequiredIcon.vue';
import { FormidableFieldComponent } from '@/components/Formidable/FormidableFieldComponent.abstract';

@Component({
	components: {
		Datetime,
		FeedbackText,
		RequiredIcon
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

/deep/
.vdatetime-input{
	width:100%;
	border:none;
	height:100%;
}
</style>

