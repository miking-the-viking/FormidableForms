<template lang="pug">
    #app.page-container.md-layout
        LeftNavLayout(:navRouting="navRouting" :title="$route.meta.title")
            router-view
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import LeftNavLayout from '@/components/Layouts/LeftNavLayout.vue';
import routes from '@/routing/routes';
import { INavMapping } from '@/routing/INavMapping.interface';
import { AppStateModule } from '@/store/App.store';
import store from '@/store';

@Component({
    components: {
        LeftNavLayout
    }
})
export default class App extends Vue {
    get test() {
        return AppStateModule.navExpanded;
    }

    get navRouting() {
        return (this.$router as any).options.routes;
    }
}
</script>
