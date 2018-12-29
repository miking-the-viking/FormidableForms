<template lang="pug">
.field(:class="feedbackClass")
	label.label(v-if="value && value.label") {{value.label}}
	.control
		input.input(type="text" :maxlength="value && value.maxLength" v-model="val" :class="feedbackClass")
	FeedbackText(:validationErrors="validationErrors" :valueIsSubmittable="isSubmittable")
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import { FormidableText } from '@/models/Formidable/Field/FormidableText';
import { transformAndValidate, transformAndValidateSync } from 'class-transformer-validator';
import FeedbackText from '@/components/Formidable/components/FeedbackText.vue';
import { FormidableFieldComponent} from '@/components/Formidable/FormidableFieldComponent.abstract';

@Component({
	components: {
		FeedbackText
	}
})
export default class TextField extends FormidableFieldComponent<FormidableText> {}
</script>
