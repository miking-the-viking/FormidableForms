import {
    VuexModule,
    Module,
    Mutation,
    getModule
} from 'vuex-module-decorators';
import store from '@/store';

export interface IAppState {
    navExpanded: boolean;
}

@Module({
    dynamic: true,
    store,
    name: 'app'
})
class App extends VuexModule implements IAppState {
    public navExpanded = false;

    @Mutation
    public toggleNav(state?: boolean) {
        this.navExpanded = state !== undefined ? state : !this.navExpanded;
    }
}

export const AppStateModule = getModule(App);
