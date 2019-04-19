<template lang="pug">
div.invalid-field-type.error
    h4 Error!
    p Invalid Field Type: {{value.type}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FieldType, FormidableField } from '@formidableforms/core';

@Component
export default class InvalidField extends Vue {
    @Prop({ required: true }) private value!: FormidableField<any>;
}
</script>
