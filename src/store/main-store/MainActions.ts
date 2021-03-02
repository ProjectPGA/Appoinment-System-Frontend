import { Actions } from 'vuex-smart-module';
import MainState from './MainState';
import MainMutations from './MainMutations';
import MainGetters from './MainGetters';

export default class MainActions extends Actions<
    MainState,
    MainGetters,
    MainMutations,
    MainActions
> {
    public reverttestData(): void {
        this.commit('changeTestData');
    }

    public changeLanguajeToSpanish(): void {
        this.commit('changeLanguajeToSpanish');
    }

    public changeLanguajeToEnglish(): void {
        this.commit('changeLanguajeToEnglish');
    }

    public activateMaintenancePage(): void {
        this.commit('activateMaintenancePage', null);
    }

    public desactivateMaintenancePage(): void {
        this.commit('desactivateMaintenancePage', null);
    }
}
