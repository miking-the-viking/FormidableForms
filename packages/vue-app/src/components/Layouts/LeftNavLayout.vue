<template lang="pug">
    md-app(md-waterfall md-mode="fixed")
        md-app-toolbar.md-primary
            md-button.md-icon-button(@click="toggleMenu" v-if="!menuVisible")
                md-icon menu
            span.md-title(v-text="title")

        md-app-drawer(:md-active.sync="menuVisible" md-persistent="full")

            md-toolbar.md-transparent(md-elevation="0")
                span Formidable Forms

                .md-toolbar-section-end
                    md-button.md-icon-button.md-dense(@click="toggleMenu")
                        md-icon keyboard_arrow_left

            NavList(:navRouting="navRouting")

        md-app-content
            transition(name="fade-slide-up" mode="out-in")
                slot Default slot content (could be a router-view, could be something else)
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import NavList from '@/components/Layouts/Nav/NavList.vue';
import { INavMapping } from '@/routing/INavMapping.interface';
import { AppStateModule } from '@/store/App.store';

@Component({
    components: {
        NavList
    }
})
export default class LeftNavLayout extends Vue {
    @Prop({ required: true }) private title!: string;
    @Prop({ required: true }) private navRouting!: INavMapping[];

    get menuVisible() {
        return AppStateModule.navExpanded;
    }

    private toggleMenu() {
        AppStateModule.toggleNav();
    }
}
</script>

<style lang="scss" scoped>
.md-app {
    min-height: 350px;
    max-height: 100%;
    border: 1px solid rgba(#000, 0.12);
    flex-grow: 1;
}
</style>

<style>
.fade-slide-up-enter-active {
    transition: all 0.5s ease;
}
.fade-slide-up-leave-active {
    transition: all 0.5s ease;
}
.fade-slide-up-enter,
.fade-slide-up-leave-to {
    transform: translateY(40px);
    opacity: 0;
}

.fade-slide-right-enter-active {
    transition: all 0.5s ease;
}
.fade-slide-right-leave-active {
    transition: all 0.5s ease;
}
.fade-slide-right-enter,
.fade-slide-right-leave-to {
    transform: translateX(40px);
    opacity: 0;
}
</style>