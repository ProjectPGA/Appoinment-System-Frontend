import {
    // @ts-ignore
    ActionContext,
    ActionContext as ActionContextVuex,
    GetterTree as GetterTreeVuex,
    ActionTree as ActionTreeVuex,
    Action as ActionVuex,
} from 'vuex';
import { GlobalState } from './vuex/store';
import { Device } from '@/models/utils/Device';

export { MutationTree } from 'vuex';

export type ActionContext<S> = ActionContextVuex<S, GlobalState>;

export type ActionHandler<S> = (
    injectee: ActionContext<S, GlobalState>,
    payload: any
) => any;

export type Action<S> = ActionVuex<S, GlobalState>;
export type GetterTree<S> = GetterTreeVuex<S, GlobalState>;
export type ActionTree<S> = ActionTreeVuex<S, GlobalState>;

export interface ById<S> {
    [key: string]: S;
}

declare global {
    interface Window {
        andresConfig: any;
        _paq: any[];
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $mq: Device;
    }
}
