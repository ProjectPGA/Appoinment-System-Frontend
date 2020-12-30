import { Mutations } from 'vuex-smart-module';
import NavigationState from './NavigationState';

export default class NavigationMutations extends Mutations<NavigationState> {
    public openLeftMenu(): void {
        this.state.isShowLeftMenu = true;
    }
    public closeLeftMenu(): void {
        this.state.isShowLeftMenu = false;
    }
}
