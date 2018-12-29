<template lang="pug">
.field(:class="feedbackClass")
	label.label(v-if="value.label") {{value.label}}
	.control
		input.input(type="password" :maxlength="value.maxLength" v-model="val" :class="feedbackClass")
	FeedbackText(:validationErrors="validationErrors" :valueIsSubmittable="isSubmittable")
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import FeedbackText from '@/components/Formidable/components/FeedbackText.vue';
import { FormidableFieldComponent} from '@/components/Formidable/FormidableFieldComponent.abstract';
import { FormidablePassword } from '@/models/Formidable/Field/FormidablePassword';

@Component({
	components: {
		FeedbackText
	}
})
export default class PasswordField extends FormidableFieldComponent<FormidablePassword> {}
</script>
