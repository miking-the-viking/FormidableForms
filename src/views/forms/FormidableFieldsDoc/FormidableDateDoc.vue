<template lang="pug">
#fields-date
	h3.is-size-3 Formidable Date Field Doc

	p The Formidable Date Field is invoked by setting the 
		code fieldType
		| to 
		code FieldType.Date
		| . This enables some Date-specific additional properties like
		code minLength
		| and 
		code maxLength
		|.
	
	h4.is-size-4 Basic Config

	p The basic configuration for a Formidable Date involves 
		code value
		|, 
		code fieldType
		|, and the optional
		code label:

	.columns.is-mobile
		.column
			pre(v-highlightjs="JSON.stringify(basicDateFormConfig, null, 1)")
				code(class="javascript")
		.column
			FormidableForm(:form="basicDateFormConfig")

	p More advanced configurations of the Formidable Date involve using the additional property  
		code DateType
		|: 
		code Datetime
		|, 
		code Date
		|, 
		code Time
		|.

	.columns
		.column
			pre(v-highlightjs="JSON.stringify(refinedDateTypeFields, null, 1)")
				code(class="javascript")
		.column
			FormidableForm(:form="refinedDateTypeFields")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { DateType } from '@/models/Formidable/Field/FormidableDate';
import { FormType } from '@/models/Formidable/Form/form.abstract';
import FormFactory from '@/models/Formidable/Form/Form.factory';

const BASIC_DATE_FIELD = {
    fields: [
        {
            fieldType: FieldType.Date,
            value: null,
            label: 'Any Datetime',
            dateType: DateType.Datetime
        }
    ]
};

const REFINED_DATE_TYPE_FIELDS = FormFactory.generate(FormType.Basic, {
    fields: [
        {
            fieldType: FieldType.Date,
            value: null,
            label: 'Any Datetime',
            dateType: DateType.Datetime
        },
        {
            fieldType: FieldType.Date,
            value: null,
            label: 'Any Date',
            dateType: DateType.Date
        },
        {
            fieldType: FieldType.Date,
            value: null,
            label: 'Any Time',
            dateType: DateType.Time
        }
    ]
});

@Component({
    components: {
        FormidableForm
    }
})
export default class FormidableDateDoc extends Vue {
    private basicDateFormConfig = BASIC_DATE_FIELD;
    private refinedDateTypeFields = REFINED_DATE_TYPE_FIELDS;
}
</script>
