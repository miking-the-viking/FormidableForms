<template lang="pug">
#forms
    h1.md-display-2 Formidable Basic Form
    h2.md-display-1 Straightforward, simple.

    p The Formidable Basic Form is as basic as forms come. They are setup simply using a configuration json adhering to the
    code FormidableBasicForm 
        | class or 
    code IForm 
        | interface.

    md-divider

    h3.md-display-2 Basic Sample	
    
    p The form below was setup using the following
    
    code FormidableBasicForm 
        | config:

    md-divider

    .md-layout.md-gutter
        .md-layout-item.md-size-100
            .md-layout.md-gutter
                .md-layout-item
                    p Try toggling the 
                        code Field Type 
                        | to see the different field type samples.
                .md-layout-item
                    md-field
                        label(for="fieldType") Field Type
                        md-select(v-model="selectedField" name="fieldType" id="fieldType")
                            md-option(v-for="field in fields" :value="field" :key="field") {{field}}
    
    md-divider
    
    .md-layout.md-gutter
        .md-layout-item.md-size-40
            pre(v-highlightjs="JSON.stringify(form, null, 1)")
                code(class="javascript")

        .md-layout-item
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
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableNumber } from '@/models/Formidable/Field/Number/FormidableNumber';
import { FormidableText } from '@/models/Formidable/Field/Text/FormidableText';
import formConfig, { FIELDS } from '@/views/forms/BasicDoc/BasicDocForm';
import simpleRegistrationFormConfig from '@/views/forms/BasicDoc/SimpleRegistrationForm';

@Component({
    components: {
        FormidableForm
    }
})
export default class BasicDoc extends Vue {
    private fields = FIELDS;
    private fieldType: FieldType = FieldType.Text;

    private form = {
        ...formConfig(this.fieldType),
        submit: this.submitForm
    };

    get selectedField() {
        return this.fieldType;
    }

    set selectedField(field: FieldType) {
        this.fieldType = field;
        this.form = {
            ...formConfig(this.fieldType),
            submit: this.submitForm
        };
    }

    private simpleRegistrationForm = {
        ...simpleRegistrationFormConfig,
        submit: this.submitRegistrationForm
    };

    private submitForm() {
        // console.log('submitting form', this.form);
    }

    private submitRegistrationForm() {
        // console.log('submitting form', this.form);
    }
}
</script>

