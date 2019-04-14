import Vue from 'vue';
import Vuex from 'vuex';
import { IAppState } from './App.store';

Vue.use(Vuex);

export interface IAppStore {
    app: IAppState;
}

export default new Vuex.Store<IAppStore>({});
