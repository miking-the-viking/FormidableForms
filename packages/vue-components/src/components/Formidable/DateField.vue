<template lang="pug">
md-field(:class="feedbackClass")
    label(v-if="value.label") {{value.label}}
    md-datepicker(v-model="val")
    FeedbackText(:validationErrors="validationErrors" :valueIsSubmittable="isSubmittable")
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import { ValidationError } from 'class-validator';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';
import { FormidableField, FormidableDate } from '@formidableforms/core';
import FeedbackText from '@/components/Formidable/components/FeedbackText.vue';
import { FormidableFieldComponent } from '@/components/Formidable/FormidableFieldComponent.abstract';

@Component({
    components: {
        Datetime,
        FeedbackText
    }
})
export default class DateField extends FormidableFieldComponent<
    FormidableDate
> {
    get dateType() {
        return this.value.dateType;
    }
}
</script>