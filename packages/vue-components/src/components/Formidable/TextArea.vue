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
import { ValidationError } from 'class-validator';

import { FormidableField, FormidableText } from '@formidableforms/core';

import FeedbackText from './components/FeedbackText.vue';
import { FormidableFieldComponent } from './FormidableFieldComponent.abstract';

import { MdField, MdTextarea } from 'vue-material/dist/components';

@Component({
    components: {
        FeedbackText,
        MdField,
        MdTextarea
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
