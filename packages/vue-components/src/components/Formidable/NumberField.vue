<template lang="pug">
md-field(:class="feedbackClass")
    label(v-if="value.label" :class="feedbackClass") {{value.label}}

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
import { ValidationError } from 'class-validator';

import { FormidableField, FormidableNumber } from '@formidableforms/core';

import FeedbackText from './components/FeedbackText.vue';
import { FormidableFieldComponent } from './FormidableFieldComponent.abstract';

import { MdField, MdInput } from 'vue-material/dist/components';

@Component({
    components: {
        FeedbackText,
        MdField,
        MdInput
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

