<template lang="pug">
#fields-email

    p The Formidable Email Field is invoked by setting the 
        code fieldType 
        | to 
        code FieldType.Email 
        | . This enables some Email-specific additional properties like
        code minLength 
        | and 
        code maxLength 
        |.

    h3.md-display-2 Basic Config

    .md-layout
        .md-layout-item
            p The basic configuration for a Formidable Email involves 
                code value
                |, 
                code fieldType
                |, and the optional 
                code label 
                | :

            pre(v-highlightjs="JSON.stringify(basicEmailFormConfig, null, 1)")
                code(class="javascript")
        .md-layout-item
            FormidableForm(:form="basicEmailFormConfig")

    .md-layout
        .md-layout-item
            p More advanced configurations of the Formidable Email involve using the additional properties 
                code minLength
                |, 
                code maxLength 
                | or either.

            pre(v-highlightjs="JSON.stringify(minMaxEmailFormConfig, null, 1)")
                code(class="javascript")
        .md-layout-item
            FormidableForm(:form="minMaxEmailFormConfig")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';

const BASIC_EMAIL_FIELD = {
    fields: [
        {
            fieldType: FieldType.Email,
            value: null,
            label: 'Any Email'
        }
    ]
};

const MINMAX_EMAIL_FIELDS: FormidableBasicForm = {
    fields: [
        {
            fieldType: FieldType.Email,
            value: null,
            label: 'Greater than or equal to the minimum length of 5',
            minLength: 5
        },
        {
            fieldType: FieldType.Email,
            value: null,
            label: 'Less than or equal to the maximum length of 12',
            maxLength: 12
        },
        {
            fieldType: FieldType.Email,
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
export default class FormidableEmailDoc extends Vue {
    private basicEmailFormConfig = BASIC_EMAIL_FIELD;
    private minMaxEmailFormConfig = MINMAX_EMAIL_FIELDS;
}
</script>
