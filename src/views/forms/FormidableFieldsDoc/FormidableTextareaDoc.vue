<template lang="pug">
#fields-textarea
	h3.is-size-3 Formidable Textarea Field Doc

	p The Formidable Textarea Field is invoked by setting the 
		code fieldType
		| to 
		code FieldType.Textarea
		| . This enables some Textarea-specific additional properties like
		code minLength
		| and 
		code maxLength
		|.
	
	h4.is-size-4 Basic Config

	p The basic configuration for a Formidable Textarea involves 
		code value
		|, 
		code fieldType
		|, and the optional
		code label:

	.columns.is-mobile
		.column
			pre(v-highlightjs="JSON.stringify(basicTextareaFormConfig, null, 1)")
				code(class="javascript")
		.column
			FormidableForm(:form="basicTextareaFormConfig")

	p More advanced configurations of the Formidable Textarea involve using the additional properties 
		code minLength
		|, 
		code maxLength
		| or either.

	.columns
		.column
			pre(v-highlightjs="JSON.stringify(minMaxTextareaFormConfig, null, 1)")
				code(class="javascript")
		.column
			FormidableForm(:form="minMaxTextareaFormConfig")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FormType } from '@/models/Formidable/Form/form.abstract';
import FormFactory from '@/models/Formidable/Form/Form.factory';

const BASIC_TEXTAREA_FIELD = {
    fields: [
        {
            fieldType: FieldType.Textarea,
            value: null,
            label: 'Any textarea'
        }
    ]
};

const MINMAX_TEXTAREA_FIELDS = FormFactory.generate(FormType.Basic, {
    fields: [
        {
            fieldType: FieldType.Textarea,
            value: null,
            label: 'Greater than or equal to the minimum length of 5',
            minLength: 5
        },
        {
            fieldType: FieldType.Textarea,
            value: null,
            label: 'Less than or equal to the maximum length of 12',
            maxLength: 12
        },
        {
            fieldType: FieldType.Textarea,
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
export default class FormidableTextareaDoc extends Vue {
    private basicTextareaFormConfig = BASIC_TEXTAREA_FIELD;
    private minMaxTextareaFormConfig = MINMAX_TEXTAREA_FIELDS;
}
</script>
