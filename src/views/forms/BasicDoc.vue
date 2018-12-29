<template lang="pug">
#forms

	h1.title Formidable Basic Form
	h2.subtitle Straightforward, simple.

	.columns.is-desktop

		.column
			p The Formidable Basic Form is as basic as forms come. They are setup simply using a configuration json adhering to the
				code FormidableBasicForm
				| class. That is an array of
				code FormidableField
				| configurations.

		hr.is-hidden-desktop

		.column
			h3.is-size-6 Basic Sample	
			p.lead The form below was setup using the following
				code FormidableBasicForm
				| config:

			CollapsibleArea
				pre(v-highlightjs="JSON.stringify(form, null, 1)")
					code(class="javascript")

	FormidableForm(:form="form")
	
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType, IFormidableFieldProps, FormidableField } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';
import { FormidableText } from '@/models/Formidable/Field/FormidableText';
import CollapsibleArea from '@/components/Interactive/CollapsibleArea.vue';
import formConfig from '@/views/forms/BasicDoc/BasicDocForm';

@Component({
	components: {
		FormidableForm,
		CollapsibleArea
	}
})
export default class BasicDoc extends Vue {
	private form = {
		...formConfig,
		submit: this.submitForm
	};

	private submitForm() {
		// console.log('submitting form', this.form);
	}
}
</script>

