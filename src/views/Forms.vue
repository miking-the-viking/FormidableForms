<template lang="pug">
#forms
    h1 Formidable Forms
    h2 Basic Form Sample test
        | continued on new line
    FormidableForm(:form="form")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import {
    FieldType,
    IFormidableFieldProps,
    FormidableField
} from '@/models/Formidable/Field/field.abstract';
import { FormType } from '@/models/Formidable/Form/form.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableNumber } from '@/models/Formidable/Field/FormidableNumber';
import { FormidableText } from '@/models/Formidable/Field/FormidableText';
import formConfig from '@/views/forms/BasicDoc/BasicDocForm';

@Component({
    components: {
        FormidableForm
    }
})
export default class Forms extends Vue {
    // private form = formConfig;
    private form = {
        formType: FormType.Basic,
        fields: [
            {
                value: null,
                minimum: 4,
                fieldType: FieldType.Number
            }
        ]
    };
}
</script>
