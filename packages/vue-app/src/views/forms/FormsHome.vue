<template lang="pug">
#forms
    h1.md-display-3 Formidable Forms

    h2.md-display-2 Custom Submit Action

    .md-layout.md-gutter
        .md-layout-item
            p It is completely optional to provide a 
                code submit 
                | action in the form configuration. If none is provided, no submit button will exist.
        .md-layout-item
            FormidableForm(:form="noSubmitSample")
    
    md-divider.margined

    .md-layout.md-gutter
        .md-layout-item
            p If a submit action is provided, the submit button will exist and reflect the current state of the form (disabled, error, success/submittable, loading). The provided action will be excuted on button press.
        .md-layout-item
            FormidableForm(:form="submitSample")


    p The form interface specifies an optional 
        code submit 
        | property, enabling custom submit actions to be provided via configuration.

    // h2.md-display-2 Simple State Representation

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import {
    FormType,
    FormidableForm as FormidableFormAbstract
} from '@/models/Formidable/Form/form.abstract';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';

const formSample: FormidableFormAbstract = {
    fields: [
        {
            fieldType: FieldType.Number,
            value: null
        }
    ]
};

@Component({
    components: {
        FormidableForm
    }
})
export default class FormsHome extends Vue {
    private noSubmitSample = {
        ...formSample
    };

    private submitSample = {
        ...formSample,
        submit() {
            alert('custom submit action');
        }
    };
}
</script>

<style lang="scss">
.margined {
    margin: 1rem;
}
</style>
