<template lang="pug">
#fields
	h3.is-size-3 Formidable Fields Home

	p Formidable Fields are designed with generics in mind for easily resuable and expectant implementation and typing.

	h4.is-size-4 FieldType Enum

	p The available Formidable Field types are limited, consistent and flexible using the 
		code FieldType
		| Enum.

	h4.is-size-4 Formidable Field Props

	p All Formidable Fields utilize the following props as defined in the 
		code FormidableField
		| generic abstract. The specific implementation of the Formidable Field is acieved by using a common discriminator property, in this case 
		code fieldType.

	table.table.is-striped.is-bordered.is-fullwidth
		thead
			tr
				th.is-size-5.has-text-centered
					code field
				th.is-size-5.has-text-centered
					code required
				th.is-size-5.has-text-centered
					code type
		tbody
			tr
				td
					code fieldType
				td yes
				td
					code FieldType

			tr
				td
					code name
				td no
				td
					code string

			tr
				td
					code label
				td no
				td
					code string

			tr
				td
					code id
				td no
				td
					code string

			tr
				td
					code required
				td no
				td
					code string

			tr
				td
					code disabled
				td no
				td
					code string

			tr
				td
					code value
				td yes
				td
					code T

	h5.is-size-5 Field Type(Required)
	
	p The shared discriminator property inherited by all Formidable Field implementations is controlled with an Enum.

	ul
		li(v-for="field in fieldTypes" :key="field.key")
			code FieldType.{{field.key}}
			| = 
			code "{{field.resolvedValue}}"

	.box
		h5.is-size-5 Note
		p For ease of documentation many object-style code samples are not 100% accurate to the real code sample as to simplify documentation they are legitimate 100% JSON.stringified objects (therefore losing the Enumerated references of values).

		p This means that although you see an object defined like this:

		.columns.is-mobile
			.column
				pre(
					v-highlightjs="JSON.stringify(basicForm, null, 1)"
				)
					code(class="javascript")
			.column
				FormidableForm(:form="basicForm")
		
		p The objects definition is actually:
		pre(
			v-highlightjs="basicFormForRealz"
		)
			code(class="javascript")

	h5.is-size-5 Field Name
		code string
		| - 
		code name

	p The name field is usually optional.

	h5.is-size-5 Field Label
		code string
		| - 
		code label

	p The label field is uaully optional but recommended.

	h5.is-size-5 Field ID
		code string
		| - 
		code id

	p The ID field is optional, but recommended.

	h5.is-size-5 Field Required
		code boolean
		| - 
		code required


	p The required field by default is 
		code false
		| and is therefore optional. Making a field required will mean that
		code null
		| is an unacceptable value unless specified otherwise.

		.columns.is-mobile
			.column
				FormidableForm(:form="basicRequiredForm")
			.column
				FormidableForm(:form="basicForm")

	h5.is-size-5 Field Disabled
		code boolean
		| - 
		code disabled

	.columns.is-mobile
		.column
			FormidableForm(:form="basicDisabledForm")
		.column
			FormidableForm(:form="basicForm")


	p The disabled field by default is 
		code false
		| and is therefore optional. Making a field disabled will prevent any user input/interaction.

	h5.is-size-5 Field Value
		code T
		| - 
		code value

	p
		code value
		| is a required property as it is what will be used to enable `v-model` binding.

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';

const BASIC_FORM_FOR_REALZ
= `{
	fields: [
		{
			fieldType: FieldType.Number,
			value: null,
			label: 'Any number',
		}
	]
}`;

@Component({
    components: {
        FormidableForm
    }
})
export default class FormidableFieldDocHome extends Vue {
    private FieldType = FieldType;
    private basicFormForRealz = BASIC_FORM_FOR_REALZ;
    private basicForm = {
        fields: [
            {
                fieldType: FieldType.Number,
                value: null,
                label: 'Any number',
            }
        ]
    };
    private basicRequiredForm = {
        fields: [
            {
                fieldType: FieldType.Number,
                value: null,
                label: 'Any number (required)',
                required: true
            }
        ]
    };
    private basicDisabledForm = {
        fields: [
            {
                fieldType: FieldType.Number,
                value: null,
                label: 'Any number (disabled)',
                disabled: true
            }
        ]
    };

    get fieldTypes() {
        return Object.keys(FieldType).map((val) => {
            return {
                key: val,
                resolvedValue: (FieldType as any)[val]
            };
        });
    }
}
</script>
