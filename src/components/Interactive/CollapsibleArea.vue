<template lang="pug">
.collapsible(:class="{'collapsed': collapsed}" @mouseenter="mouseEnter" @mouseleave="mouseLeave")
	slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Navbar from '@/components/Page/Navbar.vue';
import { debounce } from 'debounce';

@Component({
	components: {
	}
})
export default class CollapsibleArea extends Vue {
	@Prop({default: true}) private startCollapsed: boolean = true;
	private collapsed: boolean = this.startCollapsed || true;

	private mouseEnter() {
		this.expand();
	}

	private mouseLeave() {
		// debounce(() => {
		this.collapse();
		// }, 2000);
	}

	private expand() {
		this.collapsed = false;
	}

	private collapse() {
		this.collapsed = true;
	}

}
</script>


<style lang="scss" scoped>
.collapsible {
	cursor: s-resize;
	max-height: 10000px;
	display: flex;
	flex-grow: 1;
	transition: max-height 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	overflow: hidden;
	
	&.collapsed {
		max-height: 200px;
		// height:200px;
	}
}
</style>