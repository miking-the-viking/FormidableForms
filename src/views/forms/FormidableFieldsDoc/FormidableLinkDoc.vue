<template lang="pug">
#fields-link

    p The Formidable Link Field is invoked by setting the 
        code fieldType 
        | to 
        code FieldType.Link 
        | . This enables some Textarea-specific additional required and optional properties like
        code href 
        |, 
        code text 
        |, 
        code minLinkHrefLength 
        |, and more.

    m3.md-display-2 Basic Config

    p The basic configuration for a Formidable Link involves 
        code value 
        | (an 
        code ILink 
        |), 
        code fieldType 
        |, and the optional
        code label 
        | :

        pre(v-highlightjs="JSON.stringify(basicLinkFormConfig, null, 1)")
            code(class="javascript")
        FormidableForm(:form="basicLinkFormConfig")

    p More advanced configurations of the Formidable Link involve using the additional properties 
        code maxLinkTextLength 
        |, 
        code minLinkTextLength 
        |, 
        code minLinkTextLength 
        |, 
        code maxLinkHrefLength 
        |, 
        code minLinkHrefLength 
        |.

        pre(v-highlightjs="JSON.stringify(minMaxLinkFormConfig, null, 1)")
            code(class="javascript")
        FormidableForm(:form="minMaxLinkFormConfig")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import FormidableForm from '@/components/FormidableForm.vue';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';

const BASIC_LINK_FIELD = {
    fields: [
        {
            fieldType: FieldType.Link,
            value: {
                href: null,
                text: null
            },
            label: 'Any Link'
        }
    ]
};

const MINMAX_LINK_FIELDS: FormidableBasicForm = {
    fields: [
        {
            fieldType: FieldType.Link,
            value: {
                href: null,
                text: null
            },
            label: 'Href and Text of minimum length of 1',
            minLinkHrefLength: 1,
            minLinkTextLength: 1
        },
        {
            fieldType: FieldType.Link,
            value: {
                href: null,
                text: null
            },
            label: 'Href and Text of max length of 15',
            maxLinkHrefLength: 15,
            maxLinkTextLength: 15
        },
        {
            fieldType: FieldType.Link,
            value: {
                href: null,
                text: null
            },
            label: 'In between (inclusively) 10-30',
            minLinkHrefLength: 10,
            minLinkTextLength: 10,
            maxLinkHrefLength: 30,
            maxLinkTextLength: 30
        }
    ]
};

@Component({
    components: {
        FormidableForm
    }
})
export default class FormidableTextDoc extends Vue {
    private basicLinkFormConfig = BASIC_LINK_FIELD;
    private minMaxLinkFormConfig = MINMAX_LINK_FIELDS;
}
</script>
