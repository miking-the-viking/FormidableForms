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

$collapsible-color: #2172ff6b;
.collapsible {
	cursor: s-resize;
	max-height: 10000px;
	display: flex;
	flex-grow: 1;
	transition: max-height 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	overflow: hidden;
	
	pre {
		width: 100%
	}

	&.collapsed {
		max-height: 200px;
	}

  	// box-shadow: 0 0 0 rgba(204,169,44, 0.4);
	animation: pulse 2s infinite;
	cursor: s-resize;
	margin:0.5rem;

	&:hover {
		animation: none;
		margin:0;
		border: 0.5rem solid $collapsible-color;
	}
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 $collapsible-color;
  }
  70% {
      box-shadow: 0 0 0 10px transparent;
  }
  100% {
      box-shadow: 0 0 0 0 transparent;
  }
}

</style>