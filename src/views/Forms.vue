<template lang="pug">
#forms
    h1 Formidable Forms
    FormidableForm(:form="form")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType, IFormidableFieldProps } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';

const formConfig: FormidableBasicForm<number> = {
    fields: [
        {
            type: FieldType.Number,
            value: null
        }
    ]
};

@Component({
    components: {
        FormidableForm
    }
})
export default class Forms extends Vue {
    private form = formConfig;
}
</script>
