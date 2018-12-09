<template lang="pug">
.formidable-form
    h1 Formidable Form
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType, IFormidableFieldProps } from '@/models/Formidable/Field/field.abstract';
import { IFormidableFormProps } from '@/models/Formidable/Form/form.abstract';
import { transformAndValidateSync } from 'class-transformer-validator';


@Component
export default class FormidableForm extends Vue {
    private readonly FieldType = FieldType;

    @Prop({
        required: true,
        validator: ((x) => {
            // tslint:disable-next-line:no-console
            console.log('validating the form prop...', x);
            transformAndValidateSync(FormidableForm, x);
            return true;
        })
    })
    private form!: FormidableForm;
}
</script>

<style lang="scss" scoped>

</style>
