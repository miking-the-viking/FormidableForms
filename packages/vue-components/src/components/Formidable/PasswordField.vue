<template lang="pug">
md-field(:class="feedbackClass")
    label(v-if="value.label") {{value.label}}
    md-input(
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
    FeedbackText(:validationErrors="validationErrors" :valueIsSubmittable="isSubmittable")
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { ValidationError } from 'class-validator';

import { FormidableField, FormidablePassword } from '@formidableforms/core';

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
export default class PasswordField extends FormidableFieldComponent<
    FormidablePassword
> {
    get maxLength() {
        return this.value.maxLength;
    }

    get minLength() {
        return this.value.minLength;
    }
}
</script>
