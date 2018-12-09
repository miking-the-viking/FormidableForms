<template lang="pug">
.field
    label.label(v-if="value.label") {{value.label}}
    .control
        input.input(type="text" :maxlength="value.maxLength")
    //- p.help This is a help text
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';

@Component
export default class TextField extends Vue {
	@Prop({ required: true }) private value!: FormidableField<string | null>;

	get val() {
		return this.value.value;
	}

	set val(newVal: string | null) {
		this.$emit('input', {...this.value, value: newVal});
	}
}
</script>
