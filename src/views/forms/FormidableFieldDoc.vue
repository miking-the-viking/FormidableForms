<template lang="pug">
#fields
    h2.is-size-2 Formidable Fields Documentation
    router-view
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class FormidableFieldDoc extends Vue {
}
</script>
