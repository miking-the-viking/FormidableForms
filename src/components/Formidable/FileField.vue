<template lang="pug">
.field(:class="feedbackClass")
	label.label(v-if="value.label") {{value.label}}
	.control
		input.input(type="file" :class="feedbackClass" :accept="acceptedFileTypes")
	p.help(v-if="hasFeedback" :class="feedbackClass") {{errorText}}
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import { FormidableFile, FileType } from '@/models/Formidable/Field/FormidableFile';

@Component
export default class FileField extends Vue {
	@Prop({ required: true }) private value!: FormidableFile;
	@Prop({ default: () => [] }) private validationErrors!: ValidationError[];

	get hasFeedback() {
		return this.validationErrors.length > 0;
	}

	get feedbackClass() {
		return {
			'is-danger': this.validationErrors && this.validationErrors.length > 0,
			'is-success': this.value.value !== null && (!this.validationErrors || this.validationErrors.length === 0)
		};
	}

	get val() {
		return this.value.value;
	}

	set val(value: File | null) {
		this.$emit('input', {...this.value, value});
	}

	get acceptedFileTypes() {
		switch (this.value.fileType) {
			case FileType.Audio: return 'audio/*';
			case FileType.Image: return 'image/*';
			case FileType.Video: return 'video/*';
			case FileType.PDF: return '.pdf';
			default: return null;
		}
	}

	get errorText() {
		if (!this.validationErrors || this.validationErrors.length === 0) {
			return null;
		}

		return this.validationErrors.reduce((acc, val) => {
			return acc + (val.property === 'value' ?
				Object.keys(val.constraints).reduce((acc2, val2) => {
					return acc2 + val.constraints[val2];
				}, '') : ''
			);
		}, '');
	}

}
</script>
