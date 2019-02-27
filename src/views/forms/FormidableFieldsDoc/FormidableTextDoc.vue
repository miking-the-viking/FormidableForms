<template lang="pug">
#fields-text
	h3.is-size-3 Formidable Text Field Doc

	p The Formidable Text Field is invoked by setting the 
		code fieldType
		| to 
		code FieldType.Text
		| . This enables some Text-specific additional properties like
		code minLength
		| and 
		code maxLength
		|.
	
	h4.is-size-4 Basic Config

	p The basic configuration for a Formidable Text involves 
		code value
		|, 
		code fieldType
		|, and the optional
		code label:

	.columns.is-mobile
		.column
			pre(v-highlightjs="JSON.stringify(basicTextFormConfig, null, 1)")
				code(class="javascript")
		.column
			FormidableForm(:form="basicTextFormConfig")

	p More advanced configurations of the Formidable Text involve using the additional properties 
		code minLength
		|, 
		code maxLength
		| or either.

	.columns
		.column
			pre(v-highlightjs="JSON.stringify(minMaxTextFormConfig, null, 1)")
				code(class="javascript")
		.column
			FormidableForm(:form="minMaxTextFormConfig")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';

const BASIC_TEXT_FIELD = {
    fields: [
        {
            fieldType: FieldType.Text,
            value: null,
            label: 'Any text'
        }
    ]
};

const MINMAX_TEXT_FIELDS: FormidableBasicForm = {
    fields: [
        {
            fieldType: FieldType.Text,
            value: null,
            label: 'Greater than or equal to the minimum length of 5',
            minLength: 5
        },
        {
            fieldType: FieldType.Text,
            value: null,
            label: 'Less than or equal to the maximum length of 12',
            maxLength: 12
        },
        {
            fieldType: FieldType.Text,
            value: null,
            label: 'In between (inclusively) 10-20',
            maxLength: 20,
            minLength: 10
        }
    ]
};

@Component({
    components: {
        FormidableForm
    }
})
export default class FormidableTextDoc extends Vue {
    private basicTextFormConfig = BASIC_TEXT_FIELD;
    private minMaxTextFormConfig = MINMAX_TEXT_FIELDS;
}
</script>
