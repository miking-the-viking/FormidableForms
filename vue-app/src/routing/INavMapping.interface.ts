import { RouteConfig } from 'vue-router/types/router';

export interface INavMapping extends RouteConfig {
    children?: INavMapping[];
    meta?: {
        title: string;
        icon?: string;
    };
}
