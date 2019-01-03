<template lang="pug">
.field(:class="feedbackClass")
	label.label(v-if="label") {{label}}
	.control.has-icons-left.has-icons-right
		input.input(
			type="email"
			v-model="val"
			:name="name"
			:disabled="disabled"
			:required="required"
			:id="id"
			:maxlength="maxLength"
			:minlength="minLength"
			:class="feedbackClass"
		)
		RequiredIcon(
			:required="required"
			:valueIsSubmittable="isSubmittable"
			:validationErrors="validationErrors")
	FeedbackText(
		:validationErrors="validationErrors"
		:valueIsSubmittable="isSubmittable"
	)
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import { FormidableEmail } from '@/models/Formidable/Field/FormidableEmail';
import FeedbackText from '@/components/Formidable/components/FeedbackText.vue';
import RequiredIcon from '@/components/Formidable/components/RequiredIcon.vue';
import { FormidableFieldComponent} from '@/components/Formidable/FormidableFieldComponent.abstract';


@Component({
	components: {
		FeedbackText,
		RequiredIcon
	}
})
export default class EmailField extends FormidableFieldComponent<FormidableEmail> {
	get maxLength() {
		return this.value.maxLength;
	}

	get minLength() {
		return this.value.minLength;
	}
}
</script>

