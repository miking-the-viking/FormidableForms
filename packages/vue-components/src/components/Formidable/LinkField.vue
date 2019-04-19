<template lang="pug">
md-field

	label(v-if="value.label") {{value.label}}

	.columns

		.column
			.control
				TextField(
					v-model="textField"
					:maxlength="value.maxLinkTextLength"
					:minLength="value.minLinkTextLength"
					:validationErrors="textFieldError"
					:alternateValidationKey="text"
				)

		.column
			.control
				TextField(
					v-model="hrefField"
					:maxlength="value.maxLinkHrefLength"
					:minLength="value.minLinkHrefLength"
					:validationErrors="hrefFieldError"
					:alternateValidationKey="href"
				)
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { ValidationError } from 'class-validator';

import {
    ILink,
    Link,
    FormidableLink,
    FormidableField,
    FieldType,
    FormidableText
} from '@formidableforms/core';

import TextField from './TextField.vue';
import { MdField, MdInput } from 'vue-material/dist/components';

@Component({
    components: {
        TextField,
        MdField,
        MdInput
    }
})
export default class LinkField extends Vue {
    @Prop({ required: true }) private value!: FormidableLink;
    @Prop({ default: () => [] }) private validationErrors!: ValidationError[];

    get valueFieldError(): ValidationError | undefined {
        return this.validationErrors.find(val => val.property === 'value');
    }

    get textFieldError(): ValidationError[] | undefined {
        const textFieldErr = this.valueFieldError
            ? this.valueFieldError.children.find(val => val.property === 'text')
            : undefined;
        return textFieldErr ? [textFieldErr] : undefined;
    }

    get hrefFieldError(): ValidationError[] | undefined {
        const hrefFieldErr = this.valueFieldError
            ? this.valueFieldError.children.find(val => val.property === 'href')
            : undefined;
        return hrefFieldErr ? [hrefFieldErr] : undefined;
    }

    get textField() {
        return {
            label: 'Link Text',
            value: this.text,
            fieldType: FieldType.Text
        } as FormidableText;
    }

    set textField(text: FormidableText) {
        this.text = text.value;
    }

    get text() {
        return this.value.value.text;
    }

    set text(text: string | null) {
        this.$emit('input', {
            ...this.value,
            value: { ...this.value.value, text }
        });
    }

    get hrefField() {
        return {
            label: 'Link href',
            value: this.href,
            fieldType: FieldType.Text
        } as FormidableText;
    }

    set hrefField(text: FormidableText) {
        this.href = text.value;
    }

    get href() {
        return this.value.value.href;
    }

    set href(href: string | null) {
        this.$emit('input', {
            ...this.value,
            value: { ...this.value.value, href }
        });
    }
}
</script>
