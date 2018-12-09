<template lang="pug">
nav.navbar
    .navbar-brand
        a.navbar-item
            img(src="https://bulma.io/images/bulma-logo.png" width="112" height="28")
        a.navbar-burger.burger(role="button" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample")
            span(aria-hidden="true")
            span(aria-hidden="true")
            span(aria-hidden="true")
    .navbar-menu
        .navbar-start
        .navbar-end
            router-link.navbar-item(to="/") Formidable Forms
            a.navbar-item Basic
            a.navbar-item Wizard

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
}
</script>
