<template lang="pug">
#fields-password
	h3.is-size-3 Formidable Password Field Doc

	p The Formidable Password Field is invoked by setting the 
		code fieldType
		| to 
		code FieldType.Password
		| . This enables some Password-specific additional properties like
		code minLength
		| and 
		code maxLength
		|.
	
	h4.is-size-4 Basic Config

	p The basic configuration for a Formidable Password involves 
		code value
		|, 
		code fieldType
		|, and the optional
		code label:

	.columns.is-mobile
		.column
			pre(v-highlightjs="JSON.stringify(basicPasswordFormConfig, null, 1)")
				code(class="javascript")
		.column
			FormidableForm(:form="basicPasswordFormConfig")

	p More advanced configurations of the Formidable Password involve using the additional properties 
		code minLength
		|, 
		code maxLength
		| or either.

	.columns
		.column
			pre(v-highlightjs="JSON.stringify(minMaxPasswordFormConfig, null, 1)")
				code(class="javascript")
		.column
			FormidableForm(:form="minMaxPasswordFormConfig")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FormType } from '@/models/Formidable/Form/form.abstract';
import FormFactory from '@/models/Formidable/Form/Form.factory';

const BASIC_PASSWORD_FIELD = {
    fields: [
        {
            fieldType: FieldType.Password,
            value: null,
            label: 'Any Password'
        }
    ]
};

const MINMAX_PASSWORD_FIELDS = FormFactory.generate(FormType.Basic, {
    fields: [
        {
            fieldType: FieldType.Password,
            value: null,
            label: 'Greater than or equal to the minimum length of 5',
            minLength: 5
        },
        {
            fieldType: FieldType.Password,
            value: null,
            label: 'Less than or equal to the maximum length of 12',
            maxLength: 12
        },
        {
            fieldType: FieldType.Password,
            value: null,
            label: 'In between (inclusively) 10-20',
            maxLength: 20,
            minLength: 10
        }
    ]
});

@Component({
    components: {
        FormidableForm
    }
})
export default class FormidablePasswordDoc extends Vue {
    private basicPasswordFormConfig = BASIC_PASSWORD_FIELD;
    private minMaxPasswordFormConfig = MINMAX_PASSWORD_FIELDS;
}
</script>
