<template lang="pug">
#fields
    h2.md-display-3 Formidable Fields Documentation
        br
        small.md-title
            code {{$route.path}}
    transition(name="fade-slide-right" mode="out-in")
        router-view
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class FormidableFieldDoc extends Vue {}
</script>
