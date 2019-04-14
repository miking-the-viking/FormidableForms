<template lang="pug">
md-field(:class="feedbackClass")
    label(v-if="value.label") {{value.label}}
    md-textarea(
        type="textarea"
        v-model="val"
        :name="name"
        :disabled="disabled"
        :required="required"
        :id="id"
        :maxlength="maxLength"
        :minlength="minLength"
        :class="feedbackClass"
    )
    FeedbackText(:validationErrors="validationErrors" :valueIsSubmittable="isSubmittable")
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import FeedbackText from '@/components/Formidable/components/FeedbackText.vue';
import { FormidableFieldComponent } from '@/components/Formidable/FormidableFieldComponent.abstract';
import { FormidableText } from '@/models/Formidable/Field/Text/FormidableText';

@Component({
    components: {
        FeedbackText
    }
})
export default class TextArea extends FormidableFieldComponent<FormidableText> {
    get maxLength() {
        return this.value.maxLength;
    }

    get minLength() {
        return this.value.minLength;
    }
}
</script>
