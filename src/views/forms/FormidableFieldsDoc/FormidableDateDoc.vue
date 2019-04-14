<template lang="pug">
#fields-date

    p The Formidable Date Field is invoked by setting the 
        code fieldType 
        | to 
        code FieldType.Date 
        | . This enables some Date-specific additional properties like
        code minLength 
        | and 
        code maxLength 
        |.

    h3.md-display-2 Basic Config

    p The basic configuration for a Formidable Date involves 
        code value 
        |, 
        code fieldType 
        |, and the optional
        code label 
        | :

        pre(v-highlightjs="JSON.stringify(basicDateFormConfig, null, 1)")
            code(class="javascript")
        FormidableForm(:form="basicDateFormConfig")

    p More advanced configurations of the Formidable Date involve using the additional property  
        code DateType 
        |: 
        code Datetime 
        |, 
        code Date 
        |, 
        code Time 
        |.

        pre(v-highlightjs="JSON.stringify(refinedDateTypeFields, null, 1)")
            code(class="javascript")
        FormidableForm(:form="refinedDateTypeFields")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { DateType } from '@/models/Formidable/Field/Date/FormidableDate';

const BASIC_DATE_FIELD = {
    fields: [
        {
            fieldType: FieldType.Date,
            value: null,
            label: 'Any Datetime',
            dateType: DateType.Datetime
        }
    ]
};

const REFINED_DATE_TYPE_FIELDS: FormidableBasicForm = {
    fields: [
        {
            fieldType: FieldType.Datetime,
            value: null,
            label: 'Any Datetime',
            dateType: DateType.Datetime
        },
        {
            fieldType: FieldType.Datetime,
            value: null,
            label: 'Any Date',
            dateType: DateType.Date
        },
        {
            fieldType: FieldType.Datetime,
            value: null,
            label: 'Any Time',
            dateType: DateType.Time
        }
    ]
};

@Component({
    components: {
        FormidableForm
    }
})
export default class FormidableDateDoc extends Vue {
    private basicDateFormConfig = BASIC_DATE_FIELD;
    private refinedDateTypeFields = REFINED_DATE_TYPE_FIELDS;
}
</script>
