<template lang="pug">
.field(:class="feedbackClass")
	label.label(v-if="value.label") {{value.label}}
	.control.has-icons-left.has-icons-right
		input.input(
			type="number"
			v-model.number="val"
			:name="name"
			:disabled="disabled"
			:required="required"
			:id="id"
			:max="max"
			:min="min"
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
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import FeedbackText from '@/components/Formidable/components/FeedbackText.vue';
import RequiredIcon from '@/components/Formidable/components/RequiredIcon.vue';
import { FormidableFieldComponent } from '@/components/Formidable/FormidableFieldComponent.abstract';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';

@Component({
    components: {
        FeedbackText,
        RequiredIcon
    }
})
export default class NumberField extends FormidableFieldComponent<
    FormidableNumber
> {
    get min() {
        return this.value.minimum;
    }

    get max() {
        return this.value.maximum;
    }
}
</script>

<style scoped lang="scss">
$transition: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
input {
    transition: border $transition;
    .help {
        transition: color $transition;
    }
}
</style>
