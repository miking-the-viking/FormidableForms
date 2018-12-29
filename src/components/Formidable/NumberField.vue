<template lang="pug">
.field
	label.label(v-if="value.label") {{value.label}}
	.control
		input.input(type="number" :min="value.minimum" :max="value.maximum" v-model.number="val" :class="feedbackClass")
	FeedbackText(:validationErrors="validationErrors" :valueIsSubmittable="isSubmittable")
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import FeedbackText from '@/components/Formidable/components/FeedbackText.vue';
import { FormidableFieldComponent} from '@/components/Formidable/FormidableFieldComponent.abstract';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';

@Component({
	components: {
		FeedbackText
	}
})
export default class NumberField extends FormidableFieldComponent<FormidableNumber> {}
</script>

<style scoped lang="scss">
$transition: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
input {
	transition : border $transition;
	.help {
		transition: color $transition;
	}
}
</style>
