<template lang="pug">
#fields-file
	h3.is-size-3 Formidable File Field Doc

	p The Formidable File Field is invoked by setting the 
		code fieldType
		| to 
		code FieldType.File
		| . This enables some File-specific additional properties like
		code minLength
		| and 
		code maxLength
		|.
	
	h4.is-size-4 Basic Config

	p The basic configuration for a Formidable File involves 
		code value
		|, 
		code fieldType
		|, and the optional
		code label:

	.columns.is-mobile
		.column
			pre(v-highlightjs="JSON.stringify(basicFileFormConfig, null, 1)")
				code(class="javascript")
		.column
			FormidableForm(:form="basicFileFormConfig")

	p More advanced configurations of the Formidable File involve using the additional properties 
		code minLength
		|, 
		code maxLength
		| or either.

	.columns
		.column
			pre(v-highlightjs="JSON.stringify(restrictedFileFormConfig, null, 1)")
				code(class="javascript")
		.column
			FormidableForm(:form="restrictedFileFormConfig")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FileType } from '@/models/Formidable/Field/FormidableFile';
import { FormType } from '@/models/Formidable/Form/form.abstract';
import FormFactory from '@/models/Formidable/Form/Form.factory';

const BASIC_FILE_FIELD = {
    fields: [
        {
            fieldType: FieldType.File,
            value: null,
            label: 'Any File'
        }
    ]
};

const RESTRICTED_FILE_FIELDS = FormFactory.generate(FormType.Basic, {
    fields: [
        {
            fieldType: FieldType.File,
            value: null,
            label: 'PDF',
            fileType: FileType.PDF
        },
        {
            fieldType: FieldType.File,
            value: null,
            label: 'Audio',
            fileType: FileType.Audio
        },
        {
            fieldType: FieldType.File,
            value: null,
            label: 'Video',
            fileType: FileType.Video
        }
    ]
});

@Component({
    components: {
        FormidableForm
    }
})
export default class FormidableEmailDoc extends Vue {
    private basicFileFormConfig = BASIC_FILE_FIELD;
    private restrictedFileFormConfig = RESTRICTED_FILE_FIELDS;
}
</script>
