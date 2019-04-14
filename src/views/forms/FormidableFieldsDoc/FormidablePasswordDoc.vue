<template lang="pug">
#fields-password

    p The Formidable Password Field is invoked by setting the 
        code fieldType 
        | to 
        code FieldType.Password 
        | . This enables some Password-specific additional properties like
        code minLength 
        | and 
        code maxLength 
        |.

    h3.md-display-2 Basic Config

    .md-layout
        .md-layout-item
            p The basic configuration for a Formidable Password involves 
                code value
                |, 
                code fieldType
                |, and the optional 
                code label 
                | :

            pre(v-highlightjs="JSON.stringify(basicPasswordFormConfig, null, 1)")
                code(class="javascript")
        .md-layout-item
            FormidableForm(:form="basicPasswordFormConfig")

    .md-layout
        .md-layout-item
            p More advanced configurations of the Formidable Password involve using the additional properties 
                code minLength
                |, 
                code maxLength 
                | or either.

            pre(v-highlightjs="JSON.stringify(minMaxPasswordFormConfig, null, 1)")
                code(class="javascript")
        .md-layout-item
            FormidableForm(:form="minMaxPasswordFormConfig")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';

const BASIC_PASSWORD_FIELD = {
    fields: [
        {
            fieldType: FieldType.Password,
            value: null,
            label: 'Any Password'
        }
    ]
};

const MINMAX_PASSWORD_FIELDS: FormidableBasicForm = {
    fields: [
        {
            fieldType: FieldType.Password,
            value: null,
            label: 'Greater than or equal to the minimum length of 5',
            minLength: 5
        },
        {
            fieldType: FieldType.Password,
            value: null,
            label: 'Less than or equal to the maximum length of 12',
            maxLength: 12
        },
        {
            fieldType: FieldType.Password,
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
export default class FormidablePasswordDoc extends Vue {
    private basicPasswordFormConfig = BASIC_PASSWORD_FIELD;
    private minMaxPasswordFormConfig = MINMAX_PASSWORD_FIELDS;
}
</script>
