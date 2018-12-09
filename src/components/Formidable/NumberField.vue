<template lang="pug">
.field
    label.label(v-if="value.label") {{value.label}}
    .control
        input.input(type="number" :min="value.minimum" :max="value.maximum" v-model.number="val")
    //- p.help This is a help text
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';

@Component
export default class NumberField extends Vue {
	@Prop({ required: true }) private value!: FormidableField<number | null>;

	get val() {
		return this.value.value;
	}

	set val(newVal: number | null) {
		this.$emit('input', {...this.value, value: newVal});
	}
}
</script>
