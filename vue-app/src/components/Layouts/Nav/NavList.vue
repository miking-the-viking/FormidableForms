<template lang="pug">
    
md-list

    template(v-for="route in navRouting")
        md-list-item(:key="route.path")
            md-icon(v-if="route.meta.icon") {{ route.meta.icon}}
            router-link.md-list-item-text(:to="{name: route.name}" tag="span")
                md-button {{route.meta.title}}
        md-list-item(v-if="route.children && route.children.length > 0")
            .sub-nav
                NavList(:navRouting="route.children")

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { INavMapping } from '@/routing/INavMapping.interface';

@Component({
    components: {
        NavList
    }
})
export default class NavList extends Vue {
    @Prop({ required: true }) private navRouting!: INavMapping[] | INavMapping;
}
</script>

<style lang="scss" scoped>
.sub-nav {
    margin-left: 1.75rem;
}
</style>
