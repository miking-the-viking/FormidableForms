<template lang="pug">
#app.container
	Navbar
	//- #nav.section
	//- 	router-link(to="/") Formidable Forms
	router-view.section
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Navbar from '@/components/Page/Navbar.vue';

@Component({
	components: {
		Navbar
	}
})
export default class App extends Vue {
}
</script>


<style lang="scss" scoped>

</style>
