<template lang="pug">
#number-field

    p The Formidable Number Field is invoked by setting the 
        code fieldType 
        | to 
        code FieldType.Number 
        | . This enables some number-specific additional properties like
        code minimum 
        | and 
        code maximum
        |.

    h3.md-display-2 Basic Config

    .md-layout.md-gutter
        .md-layout-item
            p The basic configuration for a Formidable Number involves 
                code value
                |, 
                code fieldType
                |, and the optional 
                code label
                | :
            pre(v-highlightjs="JSON.stringify(basicNumberFieldConfig, null, 1)")
                code(class="javascript")
        .md-layout-item
            FormidableForm(:form="basicNumberFieldConfig")


    .md-layout
        .md-layout-item
            p More advanced configurations of the Formidable Number involve using the additional properties 
                code minimum
                |, 
                code maximum 
                | or either.
            pre(v-highlightjs="JSON.stringify(minmaxNumberFields, null, 1)")
                code(class="javascript")

        .md-layout-item
            FormidableForm(:form="minmaxNumberFields")

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';

const BASIC_NUMBER_FIELD = {
    fields: [
        {
            fieldType: FieldType.Number,
            value: null,
            label: 'Any number'
        }
    ]
};

const MINMAX_NUMBER_FIELDS = {
    fields: [
        {
            fieldType: FieldType.Number,
            value: null,
            label: 'Greater than or equal to the minimum of 4',
            minimum: 4
        },
        {
            fieldType: FieldType.Number,
            value: null,
            label: 'Less than or equal to the maximum of 4',
            maximum: 4
        },
        {
            fieldType: FieldType.Number,
            value: null,
            label: 'In between (inclusively) 3-8',
            maximum: 8,
            minimum: 3
        }
    ]
};

@Component({
    components: {
        FormidableForm
    }
})
export default class FormidableNumberDoc extends Vue {
    private basicNumberFieldConfig = BASIC_NUMBER_FIELD;
    private minmaxNumberFields = MINMAX_NUMBER_FIELDS;
}
</script>
