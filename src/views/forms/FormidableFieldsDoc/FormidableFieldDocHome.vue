<template lang="pug">
#fields
    p Formidable Fields are designedw ith generics in mind for easily resuable and expectant implementation and typing.

    h2.md-display-2 FieldType Enum

    p The available Formidable Field types are limited, consistent and flexible using the 
        code FieldType
        | Enum.

    h2.md-display-2 Formidable Field Props

    p All Formidable Fields utilize the following props as defined in the 
        code FormidableField
        | generic abstract. The specific implementation of the Formidable Field is acieved by using a common discriminator property, in this case 
        code fieldType.

    md-table
        thead
            md-table-row
                md-table-head
                    code field
                md-table-head
                    code required
                md-table-head
                    code type
        tbody
            md-table-row
                md-table-cell
                    code fieldType
                md-table-cell yes
                md-table-cell
                    code FieldType

            md-table-row
                md-table-cell
                    code name
                md-table-cell no
                md-table-cell
                    code string

            md-table-row
                md-table-cell
                    code label
                md-table-cell no
                md-table-cell
                    code string

            md-table-row
                md-table-cell
                    code id
                md-table-cell no
                md-table-cell
                    code string

            md-table-row
                md-table-cell
                    code required
                md-table-cell no
                md-table-cell
                    code string

            md-table-row
                md-table-cell
                    code disabled
                md-table-cell no
                md-table-cell
                    code string

            md-table-row
                md-table-cell
                    code value
                md-table-cell yes
                md-table-cell
                    code T

    h2.md-display-2 Field Type(Required)

    p The shared discriminator property inherited by all Formidable Field implementations is controlled with an Enum.

    ul
        li(v-for="field in fieldTypes" :key="field.key")
            code FieldType.{{field.key}}
            | = 
            code "{{field.resolvedValue}}"

    h2.title Note
    p For ease of documentation many object-style code samples are not 100% accurate to the real code sample as to simplify documentation they are legitimate 100% JSON.stringified objects (therefore losing the Enumerated references of values).

    p This means that although you see an object defined like this:

    pre(
        v-highlightjs="JSON.stringify(basicForm, null, 1)"
    )
        code(class="javascript")
    FormidableForm(:form="basicForm")
    
    p The objects definition is actually:
    pre(
        v-highlightjs="basicFormForRealz"
    )
        code(class="javascript")

    h3.md-display-1 Field Name 
        code string 
        | - 
        code name

    p The name field is usually optional.

    h3.md-display-1 Field Label 
        code string 
        | - 
        code label

    p The label field is uaully optional but recommended.

    h3.md-display-1 Field ID 
        code string 
        | - 
        code id

    p The ID field is optional, but recommended.

    h3.md-display-1 Field Required 
        code boolean 
        | - 
        code required

    p The required field by default is 
        code false 
        | and is therefore optional. Making a field required will mean that
        code null 
        | is an unacceptable value unless specified otherwise.

    h3.md-display-1 Field Disabled 
        code boolean 
        | - 
        code disabled

    p The disabled field by default is 
        code false 
        | and is therefore optional. Making a field disabled will prevent any user input/interaction.

    h5.md-display-1 Field Value 
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

const BASIC_FORM_FOR_REALZ = `{
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
                label: 'Any number'
            }
        ]
    };

    get fieldTypes() {
        return Object.keys(FieldType).map(val => {
            return {
                key: val,
                resolvedValue: (FieldType as any)[val]
            };
        });
    }
}
</script>
