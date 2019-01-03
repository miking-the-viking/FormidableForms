<template lang="pug">
transition(name="fade" appear)
	div
		span.icon.requiredFlag.is-small.is-left(
			v-if="required && !valueIsSubmittable" :class="feedbackClass")
			font-awesome-icon(icon="play-circle")
		span.icon.is-small.is-right(v-if="hasErrors || required || valueIsSubmittable" :class="feedbackClass")
			font-awesome-icon(:icon="icon")
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle, faTimesCircle, faPlayCircle);

@Component
export default class RequiredIcon extends Vue {
	@Prop({ default: false }) private readonly required!: boolean;
	@Prop({ required: true }) private readonly valueIsSubmittable!: boolean;
	@Prop({ default: () => [] }) private readonly validationErrors!: ValidationError[];

	get icon() {
		if (this.valueIsSubmittable) {
			return 'check-circle';
		} else {
			return 'times-circle';
		}
	}

	get hasErrors() {
		return this.validationErrors && this.validationErrors.length > 0;
	}

	get feedbackClass() {
		return {
			'is-success': this.valueIsSubmittable,
			'is-danger': this.hasErrors
		};
	}
}
</script>

<style lang="scss" scoped>
$success: green;
$danger: red;

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.is-success > svg {
	color: $success;
}

.is-danger > svg {
	color: $danger;
}
.requiredFlag {
	background-color: #adadad4a;
    svg {
		color: #b6b6b6;
	}
}
</style>
