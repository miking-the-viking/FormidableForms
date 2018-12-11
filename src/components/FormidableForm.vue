<template lang="pug">
.formidable-form.container.is-fluid.box
    .field(v-for="(field, index) in form.fields")
        component(v-bind:is="getField(field)" v-model="form.fields[index]")
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType, IFormidableFieldProps, FormidableField } from '@/models/Formidable/Field/field.abstract';
import { IFormidableFormProps } from '@/models/Formidable/Form/form.abstract';
import { transformAndValidate } from 'class-transformer-validator';
import NumberField from '@/components/Formidable/NumberField.vue';
import InvalidField from '@/components/Formidable/InvalidField.vue';
import { VueConstructor } from 'vue';
import TextField from '@/components/Formidable/TextField.vue';

@Component({
	components: {
		InvalidField,
		NumberField,
		TextField
	}
})
export default class FormidableForm extends Vue {
	private readonly FieldType = FieldType;
	private isValid = true;

	@Prop({
		required: true
	})
	private form!: FormidableForm;

	private getField(field: FormidableField<number>): VueConstructor<Vue> {
		switch (field.type) {
			case FieldType.Number: return NumberField;
			case FieldType.Text: return TextField;
			default: return InvalidField;
		}
	}

	@Watch('form.fields')
	private async validateForm() {
		try {
			await transformAndValidate(FormidableBasicForm, JSON.parse(JSON.stringify(this.form)));
			// tslint:disable-next-line:no-console
			console.log('form is valid', this.form);
			this.isValid = true;
		} catch (e) {
			this.isValid = false;
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
