<template lang="pug">
.field(:class="feedbackClass")
	label.label(v-if="value.label") {{value.label}}
	.control.has-icons-left.has-icons-right
		input.input(
			type="password"
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
			:validationErrors="validationErrors"
		)
	FeedbackText(:validationErrors="validationErrors" :valueIsSubmittable="isSubmittable")
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import FeedbackText from '@/components/Formidable/components/FeedbackText.vue';
import RequiredIcon from '@/components/Formidable/components/RequiredIcon.vue';
import { FormidableFieldComponent} from '@/components/Formidable/FormidableFieldComponent.abstract';
import { FormidablePassword } from '@/models/Formidable/Field/FormidablePassword';

@Component({
    components: {
        FeedbackText,
        RequiredIcon
    }
})
export default class PasswordField extends FormidableFieldComponent<FormidablePassword> {
    get maxLength() {
        return this.value.maxLength;
    }

    get minLength() {
        return this.value.minLength;
    }
}
</script>
