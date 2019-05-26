<template lang="pug">
span.md-error(v-if="hasFeedback") {{errorText}}
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { FormidableField } from '@formidableforms/core';
import { ValidationError } from 'class-validator';

@Component
export default class FeedbackText extends Vue {
    @Prop({ required: true })
    private readonly validationErrors!: ValidationError[];
    @Prop() private readonly alternateValidationKey?: string;
    @Prop({ required: true }) private readonly valueIsSubmittable!: boolean;

    get hasFeedback() {
        return this.validationErrors.length > 0;
    }

    get errorText() {
        if (!this.validationErrors || this.validationErrors.length === 0) {
            return null;
        }

        return this.validationErrors.reduce((acc, val) => {
            return (
                acc +
                (val.property === this.alternateValidationKey || 'value'
                    ? Object.keys(val.constraints).reduce((acc2, val2) => {
                          return acc2 + val.constraints[val2];
                      }, '')
                    : '')
            );
        }, '');
    }
}
</script>
