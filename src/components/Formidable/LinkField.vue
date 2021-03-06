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
import {
    FormidableField,
    FieldType
} from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import { Link } from '@/models/Formidable/Field/Link/Link';
import {
    ILink,
    FormidableLink
} from '@/models/Formidable/Field/Link/FormidableLink';
import TextField from '@/components/Formidable/TextField.vue';
import { FormidableText } from '@/models/Formidable/Field/Text/FormidableText';

@Component({
    components: {
        TextField
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
