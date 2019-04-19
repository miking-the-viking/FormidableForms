<template lang="pug">
md-field(:class="feedbackClass")
    label(v-if="label") {{label}}
    md-input(
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
    FeedbackText(
        :validationErrors="validationErrors"
        :valueIsSubmittable="isSubmittable"
    )
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { ValidationError } from 'class-validator';
import { FormidableField, FormidableEmail } from '@formidableforms/core';
import FeedbackText from '@/components/Formidable/components/FeedbackText.vue';
import { FormidableFieldComponent } from '@/components/Formidable/FormidableFieldComponent.abstract';

@Component({
    components: {
        FeedbackText
    }
})
export default class EmailField extends FormidableFieldComponent<
    FormidableEmail
> {
    get maxLength() {
        return this.value.maxLength;
    }

    get minLength() {
        return this.value.minLength;
    }
}
</script>

