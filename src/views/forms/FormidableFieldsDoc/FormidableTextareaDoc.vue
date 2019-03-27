<template lang="pug">
#fields-textarea

    p The Formidable Textarea Field is invoked by setting the 
        code fieldType 
        | to 
        code FieldType.Textarea 
        | . This enables some Textarea-specific additional properties like
        code minLength 
        | and 
        code maxLength 
        |.

    h3.md-display-2 Basic Config

    .md-layout
        .md-layout-item
            p The basic configuration for a Formidable Textarea involves 
                code value
                |, 
                code fieldType
                |, and the optional 
                code label:

            pre(v-highlightjs="JSON.stringify(basicTextareaFormConfig, null, 1)")
                code(class="javascript")
        .md-layout-item
            FormidableForm(:form="basicTextareaFormConfig")


    .md-layout
        .md-layout-item
            p More advanced configurations of the Formidable Textarea involve using the additional properties 
                code minLength
                |, 
                code maxLength 
                | or either.

            pre(v-highlightjs="JSON.stringify(minMaxTextareaFormConfig, null, 1)")
                code(class="javascript")
        .md-layout-item
            FormidableForm(:form="minMaxTextareaFormConfig")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';

const BASIC_TEXTAREA_FIELD = {
    fields: [
        {
            fieldType: FieldType.Textarea,
            value: null,
            label: 'Any textarea'
        }
    ]
};

const MINMAX_TEXTAREA_FIELDS: FormidableBasicForm = {
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
};

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
