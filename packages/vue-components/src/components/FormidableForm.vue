<template lang="pug">
form.formidable-form.md-layout.md-alignment-top-center(@submit.prevent="form.submit")
    md-card.md-layout-item.md-size-75.md-small-size-100
        md-card-header
            .md-title Some Form
        md-card-content
            .md-layout.md-gutter
            template(v-for="(field, index) in form.fields")
                component(
                    v-bind:is="getField(field)"
                    v-model="form.fields[index]"
                    :validationErrors="getFieldErrors(index)"
                    :key="field.label"
                )

        md-card-actions(v-if="form.submit")
            md-button.md-primary.button.transitionButton(type="submit" :class="formClasses" @click="form.submit")
                span.icon
                    // font-awesome-icon(:icon="hasAllNecessaryData ? 'check-circle' : 'times-circle'")
                span Submit
    md-snackbar(:md-active.sync="saved") The Form was saved
</template>

<script lang="ts">
// import { VueConstructor } from 'vue';
// import Vue from 'vue';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import {
    transformAndValidate,
    transformAndValidateSync
} from 'class-transformer-validator';
import { ValidationError, validateSync } from 'class-validator';
import { plainToClass } from 'class-transformer';

import NumberField from './Formidable/NumberField.vue';
import NumberRangeField from './Formidable/NumberRangeField.vue';
import InvalidField from './Formidable/InvalidField.vue';
import TextField from './Formidable/TextField.vue';
import TextArea from './Formidable/TextArea.vue';
import LinkField from './Formidable/LinkField.vue';
import EmailField from './Formidable/EmailField.vue';
import PasswordField from './Formidable/PasswordField.vue';
import DateField from './Formidable/DateField.vue';
import FileField from './Formidable/FileField.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCheckCircle,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

import {
    FormidableWizardForm,
    FieldType,
    IFormidableFieldProps,
    FormidableNumber,
    FormidableNumberRange,
    FormidableText,
    FormidableTextarea,
    FormidableEmail,
    FormidablePassword,
    FormidableDate,
    FormidableFile,
    FormidableLink,
    FormidableField,
    FormidableBasicForm
} from '@formidableforms/core/lib/models';
import { FieldCtorType } from '@formidableforms/core/lib/models/form/core';

import {
    MdCard,
    MdCardHeader,
    MdCardActions,
    MdButton,
    MdSnackbar
} from 'vue-material/dist/components';

Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdSnackbar);

// library.add(faCheckCircle, faTimesCircle);

@Component({
    components: {
        InvalidField,
        NumberField,
        TextField,
        TextArea,
        LinkField,
        EmailField,
        PasswordField,
        DateField,
        FileField
    }
})
export default class FormidableForm extends Vue {
    private readonly FieldType = FieldType;
    private validationErrors: ValidationError[] = [];
    private hasAllNecessaryData: boolean = false;
    private saved: boolean = false;

    @Prop({
        required: true
    })
    private form!: FormidableBasicForm | FormidableWizardForm;

    get isValid() {
        return this.validationErrors.length === 0;
    }

    get formClasses() {
        return {
            'is-danger': !this.isValid,
            'is-success': this.isValid && this.hasAllNecessaryData
        };
    }

    private async getFieldCtor(
        fieldConfig: IFormidableFieldProps<any>
    ): Promise<FieldCtorType> {
        switch (fieldConfig.fieldType) {
            case FieldType.Number:
                return await transformAndValidate(
                    FormidableNumber,
                    fieldConfig
                );
            case FieldType.NumberRange:
                return await transformAndValidate(
                    FormidableNumberRange,
                    fieldConfig
                );
            case FieldType.Text:
                return await transformAndValidate(FormidableText, fieldConfig);
            case FieldType.Textarea:
                return await transformAndValidate(
                    FormidableTextarea,
                    fieldConfig
                );
            case FieldType.Email:
                return await transformAndValidate(FormidableEmail, fieldConfig);
            case FieldType.Password:
                return await transformAndValidate(
                    FormidablePassword,
                    fieldConfig
                );
            case FieldType.Date:
                return await transformAndValidate(FormidableDate, fieldConfig);
            case FieldType.File:
                return await transformAndValidate(FormidableFile, fieldConfig);
            case FieldType.Link:
                return await transformAndValidate(FormidableLink, fieldConfig);
            default:
                throw new Error(
                    `Invalid Field Type: ${fieldConfig.fieldType}, not === to ${
                        FieldType.Text
                    }`
                );
        }
    }

    private getField(field: FormidableField<any>): any {
        switch (field.fieldType) {
            case FieldType.Number:
                return NumberField;
            case FieldType.NumberRange:
                return NumberRangeField;
            case FieldType.Text:
                return TextField;
            case FieldType.Textarea:
                return TextArea;
            case FieldType.Link:
                return LinkField;
            case FieldType.Email:
                return EmailField;
            case FieldType.Password:
                return PasswordField;
            case FieldType.Date:
                return DateField;
            case FieldType.File:
                return FileField;
            default:
                console.log(
                    `field type ${field.fieldType} is not === ${FieldType.Text}`
                );
                return InvalidField;
        }
    }

    @Watch('form', {
        deep: true
    })
    private async validateForm() {
        try {
            const res = await transformAndValidate(
                FormidableBasicForm,
                JSON.parse(JSON.stringify(this.form))
            );
            this.validationErrors = [];
        } catch (e) {
            this.validationErrors = e;
        }

        await this.form.fields
            .reduce(async (accPromise, val) => {
                return (
                    accPromise &&
                    (await this.getFieldCtor(val)).fieldIsSubmittable
                );
            }, Promise.resolve(true))
            .then(val => {
                this.hasAllNecessaryData = val;
            })
            .catch(validationErrors => {
                this.hasAllNecessaryData = false;
            });
    }

    private getFieldErrors(index: number): ValidationError[] | undefined {
        if (!this.validationErrors || this.validationErrors.length === 0) {
            return;
        }
        const fieldErr = this.validationErrors.find(
            valErr => valErr.property === 'fields'
        );
        if (!fieldErr) {
            return;
        }
        const indexErr = fieldErr.children.find(
            valErr => parseInt(valErr.property, 10) === index
        );
        return indexErr ? indexErr.children : undefined;
    }
}
</script>

<style lang="scss" scoped>
$transition: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

.transitionButton {
    transition: color $transition, background-color $transition;
}
</style>
