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
		.navbar-menu(:class="{'is-active': isActive}")
			.navbar-start
				router-link.navbar-item(to="/sample" @click.native="toggleActive(false)") Sample
			.navbar-end
				router-link.navbar-item(to="/docs/forms/basic" @click.native="toggleActive(false)") Basic
				router-link.navbar-item(to="/docs/forms/wizard" @click.native="toggleActive(false)") Wizard
				.navbar-item.has-dropdown(:class="{'is-hoverable': isPastThreshold}")
					router-link.navbar-link(to="/docs/fields") Formidable Fields
					.navbar-dropdown.is-boxed
						router-link.navbar-item(
							v-for="link in FORM_FIELD_NAVBAR_LINKS"
							:key="link.to"
							:to="link.to"
							@click.native="toggleActive(false)"
						) {{link.text}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';


const HAMBURGER_THRESHOLD = 1087;

const FORM_FIELD_NAVBAR_LINKS = [
	{
		to: '/docs/fields/number',
		text: 'Formidable Number Field'
	},
	{
		to: '/docs/fields/text',
		text: 'Formidable Text Field'
	},
	{
		to: '/docs/fields/textarea',
		text: 'Formidable Textarea Field'
	},
	{
		to: '/docs/fields/email',
		text: 'Formidable Email Field'
	},
	{
		to: '/docs/fields/password',
		text: 'Formidable Password Field'
	},
	{
		to: '/docs/fields/file',
		text: 'Formidable File Field'
	},
	{
		to: '/docs/fields/link',
		text: 'Formidable Link Field'
	},
	{
		to: '/docs/fields/date',
		text: 'Formidable Date Field'
	},
];

@Component
export default class Navbar extends Vue {

	private isActive: boolean = false;
	private windowWidth!: number;
	private windowHeight!: number;
	private readonly HAMBURGER_THRESHOLD = HAMBURGER_THRESHOLD;
	private readonly FORM_FIELD_NAVBAR_LINKS = FORM_FIELD_NAVBAR_LINKS;

	private toggleActive(activeState?: boolean) {
		if (activeState == null || !((activeState as any) instanceof Boolean)) {
			this.isActive = !this.isActive;
			return;
		}
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
