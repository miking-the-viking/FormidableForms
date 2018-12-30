<template lang="pug">
nav.navbar
	.navbar-brand
		router-link.navbar-item(to="/")
			| Home
		a.navbar-burger.burger(role="button" :class="{'is-active': isActive}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="toggleActive")
			span(aria-hidden="true")
			span(aria-hidden="true")
			span(aria-hidden="true")
	transition(name="fade")
		.navbar-menu(v-if="isActive" :class="{'is-active': true}")
			.navbar-start
				router-link.navbar-item(to="/sample") Sample
			.navbar-end
				router-link.navbar-item(to="/docs/forms/basic") Basic
				router-link.navbar-item(to="/docs/forms/wizard") Wizard
				.navbar-item.has-dropdown(:class="{'is-hoverable': isPastThreshold}")
					router-link.navbar-link(to="/docs/fields") Formidable Fields
					.navbar-dropdown.is-boxed
						router-link.navbar-item(to="/docs/fields/number") Formidable Number Field
						router-link.navbar-item(to="/docs/fields/text") Formidable Text Field
						router-link.navbar-item(to="/docs/fields/textarea") Formidable Textarea Field
						router-link.navbar-item(to="/docs/fields/email") Formidable Email Field
						router-link.navbar-item(to="/docs/fields/password") Formidable Password Field
						router-link.navbar-item(to="/docs/fields/file") Formidable File Field
						router-link.navbar-item(to="/docs/fields/link") Formidable Link Field
						router-link.navbar-item(to="/docs/fields/date") Formidable Date Field
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

const HAMBURGER_THRESHOLD = 1087;

@Component
export default class Navbar extends Vue {

	private isActive: boolean = false;
	private windowWidth!: number;
	private windowHeight!: number;
	private readonly HAMBURGER_THRESHOLD = HAMBURGER_THRESHOLD;

	private toggleActive(activeState?: boolean) {
		this.isActive = activeState || !this.isActive;
	}

	private mounted() {
		this.checkWindowWidth();
		this.$nextTick(function() {
			window.addEventListener('resize', this.checkWindowWidth);
		});
	}

	private isPastThreshold() {
		return document.documentElement.clientWidth > this.HAMBURGER_THRESHOLD;
	}

	private checkWindowWidth() {
		this.isActive = this.isPastThreshold();
	}

	private beforeDestroy() {
		window.removeEventListener('resize', this.checkWindowWidth);
	}
}
</script>

<style lang="scss" scoped>
@import "@/style/palette.scss";

.navbar, .navbar-item, .navbar-link, .navbar-dropdown {
	background-color: $color1;
	color: $color4;
}

.fade-enter-active, .fade-leave-active {
  	transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  	opacity: 0;
}

a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:hover, .navbar-link.is-active .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active a.navbar-link, {
	background-color: $color2;
	color: $color5;
}

</style>
