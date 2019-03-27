<template lang="pug">
md-field(:class="feedbackClass")
    label(v-if="value.label") {{value.label}}

    md-input(
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
    FeedbackText(:validationErrors="validationErrors" :valueIsSubmittable="isSubmittable")
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import FeedbackText from '@/components/Formidable/components/FeedbackText.vue';
import { FormidableFieldComponent } from '@/components/Formidable/FormidableFieldComponent.abstract';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';

@Component({
    components: {
        FeedbackText
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

