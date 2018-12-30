<template lang="pug">
#fields
	h3.is-size-3 Formidable Fields Home

	p Formidable Fields are designedw ith generics in mind for easily resuable and expectant implementation and typing.

	h4.is-size-4 FieldType Enum

	p The available Formidable Field types are limited, consistent and flexible using the 
		code FieldType
		| Enum.

	h4.is-size-4 Formidable Field Props

	p All Formidable Fields utilize the following props as defined in the 
		code FormidableField
		| generic abstract. The specific implementation of the Formidable Field is acieved by using a common discriminator property, in this case 
		code fieldType.

	table.table.is-striped.is-bordered.is-fullwidth
		thead
			tr
				th.is-size-5.has-text-centered
					code field
				th.is-size-5.has-text-centered
					code required
				th.is-size-5.has-text-centered
					code type
		tbody

			tr
				td
					code fieldType
				td yes
				td
					code FieldType

			tr
				td
					code name
				td no
				td
					code string

			tr
				td
					code label
				td no
				td
					code string

			tr
				td
					code id
				td no
				td
					code string

			tr
				td
					code required
				td no
				td
					code string

			tr
				td
					code disabled
				td no
				td
					code string

			tr
				td
					code value
				td yes
				td
					code T


</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class FormidableFieldDocHome extends Vue {
}
</script>
