<template lang="pug">
.field
	label.label(v-if="value.label") {{value.label}}
	.columns
		.column
			.control
				label.label Link Text
				input.input(type="text" :maxlength="value.maxLinkTextLength" v-model="text"  :class="textFeedbackClass")
				p.help(v-if="hasTextFeedback" :class="textFeedbackClass") {{textErrorText}}
		.column
			.control
				label.label Link Href
				input.input(type="text" :maxlength="value.maxLinkHrefLength" v-model="href"  :class="hrefFeedbackClass")
				p.help(v-if="hasHrefFeedback" :class="hrefFeedbackClass") {{hrefErrorText}}
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import { Link } from '@/models/Formidable/Field/FormidableLink/Link';
import { FormidableLink } from '@/models/Formidable/Field/FormidableLink';
import TextField from '@/components/Formidable/TextField.vue';

@Component
export default class LinkField extends Vue {
	@Prop({ required: true }) private value!: FormidableLink;
	@Prop({ default: () => [] }) private validationErrors!: ValidationError[];

	get valueFieldError(): ValidationError | undefined {
		return this.validationErrors.find((val) => val.property === 'value');
	}

	get textFieldError(): ValidationError | undefined {
		return this.valueFieldError ? this.valueFieldError.children.find((val) => val.property === 'text') : undefined;
	}

	get hrefFieldError(): ValidationError | undefined {
		return this.valueFieldError ? this.valueFieldError.children.find((val) => val.property === 'href') : undefined;
	}

	get hasTextFeedback() {
		return this.textFieldError;
	}

	get hasHrefFeedback() {
		return this.hrefFieldError;
	}

	get textFeedbackClass() {
		return {
			'is-danger': this.textFieldError && this.text !== null,
			'is-success': this.value.value.text !== null && !this.textFieldError
		};
	}

	get hrefFeedbackClass() {
		return {
			'is-danger': this.hrefFieldError && this.href !== null,
			'is-success': this.value.value.href !== null && !this.hrefFieldError
		};
	}

	get text() {
		return this.value.value.text;
	}

	set text(text: string | null) {
		this.$emit('input', {...this.value, value: {...this.value.value, text}});
	}

	get href() {
		return this.value.value.href;
	}

	set href(href: string | null) {
		this.$emit('input', {...this.value, value: {...this.value.value, href}});
	}

	get textErrorText() {
		return this.textFieldError ? Object.keys(this.textFieldError.constraints).reduce((acc, val) => {
			return acc + (this.textFieldError as ValidationError).constraints[val];
		}, '') : null;
	}

	get hrefErrorText() {
		return this.hrefFieldError ? Object.keys(this.hrefFieldError.constraints).reduce((acc, val) => {
			return acc + (this.hrefFieldError as ValidationError).constraints[val];
		}, '') : null;
	}

	// get errorText() {
	// 	if (!this.validationErrors || this.validationErrors.length === 0) {
	// 		return null;
	// 	}

	// 	return this.validationErrors.reduce((acc, val) => {
	// 		return acc
	// 			+ ( val.property === 'value'
	// 				? Object.keys(val.constraints).reduce(
	// 					(acc2, val2) => {
	// 						return acc2 + val.constraints[val2];
	// 					}, '')
	// 				: ''
	// 		);
	// 	}, '');
	// }
}
</script>
