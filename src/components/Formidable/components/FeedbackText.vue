<template lang="pug">
transition(name="fade")
	p.help(v-if="hasFeedback" :class="feedbackClass") {{errorText}}
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';

@Component
export default class FeedbackText extends Vue {
    @Prop({ required: true }) private readonly validationErrors!: ValidationError[];
    @Prop() private readonly alternateValidationKey?: string;
    @Prop({ required: true }) private readonly valueIsSubmittable!: boolean;

    get hasFeedback() {
        return this.validationErrors.length > 0;
    }

    get feedbackClass() {
        return {
            'is-danger': this.validationErrors && this.validationErrors.length > 0,
            'is-success': this.valueIsSubmittable !== null && (!this.validationErrors || this.validationErrors.length === 0)
        };
    }

    get errorText() {
        if (!this.validationErrors || this.validationErrors.length === 0) {
            return null;
        }

        return this.validationErrors.reduce((acc, val) => {
            return acc + (val.property === this.alternateValidationKey || 'value' ?
                Object.keys(val.constraints).reduce((acc2, val2) => {
                    return acc2 + val.constraints[val2];
                }, '') : ''
            );
        }, '');
    }

}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
