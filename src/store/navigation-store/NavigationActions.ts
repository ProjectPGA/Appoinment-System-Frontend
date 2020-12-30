import { Actions } from 'vuex-smart-module';
import NavigationState from './NavigationState';
import NavigationMutations from './NavigationMutations';
import NavigationGetters from './NavigationGetters';
import Axios from 'axios';

export default class NavigationActions extends Actions<
    NavigationState,
    NavigationGetters,
    NavigationMutations,
    NavigationActions
> {
    public openLeftMenu(): void {
        this.commit('openLeftMenu');
    }
    public closeLeftMenu(): void {
        this.commit('closeLeftMenu');
    }
}
