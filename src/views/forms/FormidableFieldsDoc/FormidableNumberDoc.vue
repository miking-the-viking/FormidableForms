<template lang="pug">
#fields
	h3.is-size-3 Formidable Number Field Doc

	p The Formidable Number Field is invoked by setting the 
		code fieldType
		| to 
		code FieldType.Number
		| . This enables some number-specific additional properties like
		code minimum
		| and 
		code maximum
		|.

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class FormidableNumberDoc extends Vue {
}
</script>
