<template lang="pug">
nav.navbar
	.navbar-brand
		router-link.navbar-item(to="/")
			| FormidableForms
		a.navbar-burger.burger(role="button" :class="{'is-active': isActive}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="toggleActive")
			span(aria-hidden="true")
			span(aria-hidden="true")
			span(aria-hidden="true")
	transition(name="fade")
		.navbar-menu(v-if="isActive" :class="{'is-active': true}")
			.navbar-start
			.navbar-end
				a.navbar-item Basic
				a.navbar-item Wizard
				.navbar-item.has-dropdown.is-hoverable
					a.navbar-link Fields
					.navbar-dropdown.is-boxed
						a.navbar-item Number
						a.navbar-item Text
						a.navbar-item Email
						a.navbar-item Password
						a.navbar-item Textarea
						a.navbar-item File
						a.navbar-item Date
						a.navbar-item Time
						a.navbar-item Link
						a.navbar-item Image
						a.navbar-item Audio
						a.navbar-item Video
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {

	private isActive: boolean = false;

	private toggleActive() {
		this.isActive = !this.isActive;
	}
}
</script>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  	transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  	opacity: 0;
}

</style>
