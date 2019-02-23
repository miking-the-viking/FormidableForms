<template lang="pug">
.formidable-form.container.is-fluid.box(:class="formClasses")
	.field(v-for="(field, index) in form.fields")
		component(
			v-bind:is="getField(field)"
			v-model="form.fields[index]"
			:validationErrors="getFieldErrors(index)"
		)
	.level(v-if="form.submit")
		.level-left
		.level-right
			.level-item
				button.button.transitionButton(:class="formClasses" @click="form.submit")
					span.icon
						font-awesome-icon(:icon="hasAllNecessaryData ? 'check-circle' : 'times-circle'")
					span Submit
</template>

<script lang="ts">
import { VueConstructor } from 'vue';
import { Vue, Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType, IFormidableFieldProps, FormidableField } from '@/models/Formidable/Field/field.abstract';
import { FieldCtorTypes, IFormidableFormProps } from '@/models/Formidable/Form/form.abstract';
import { transformAndValidate, transformAndValidateSync } from 'class-transformer-validator';
import { ValidationError, validateSync } from 'class-validator';
import { plainToClass } from 'class-transformer';

import NumberField from '@/components/Formidable/NumberField.vue';
import NumberRangeField from '@/components/Formidable/NumberRangeField.vue';
import InvalidField from '@/components/Formidable/InvalidField.vue';
import TextField from '@/components/Formidable/TextField.vue';
import TextArea from '@/components/Formidable/TextArea.vue';
import LinkField from '@/components/Formidable/LinkField.vue';
import EmailField from '@/components/Formidable/EmailField.vue';
import PasswordField from '@/components/Formidable/PasswordField.vue';
import DateField from '@/components/Formidable/DateField.vue';
import FileField from '@/components/Formidable/FileField.vue';
import { FormidableWizardForm } from '@/models/Formidable/Form/FormidableWizardForm';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';
import { FormidableNumberRange } from '@/models/Formidable/Field/FormidableNumberRange';
import { FormidableText } from '@/models/Formidable/Field/FormidableText';
import { FormidableTextarea } from '@/models/Formidable/Field/FormidableTextarea';
import { FormidableLink } from '@/models/Formidable/Field/FormidableLink';
import { FormidableEmail } from '@/models/Formidable/Field/FormidableEmail';
import { FormidablePassword } from '@/models/Formidable/Field/FormidablePassword';
import { FormidableDate } from '@/models/Formidable/Field/FormidableDate';
import { FormidableFile } from '@/models/Formidable/Field/FormidableFile';

import FormMixin from '@/components/Formidable/Form/Form.mixin';

library.add(faCheckCircle, faTimesCircle);

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
export default class FormidableForm extends Mixins(FormMixin) {
    private getField(field: FormidableField<any>): VueConstructor<Vue> {
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
                return InvalidField;
        }
    }
}
</script>

<style lang="scss" scoped>
.formidable-form {
    &.is-danger {
        box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(255, 0, 0, 0.87);
    }

    &.is-success {
        box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(40, 255, 0, 0.92);
    }
}
$transition: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

.transitionButton {
    transition: color $transition, background-color $transition;
}
</style>
