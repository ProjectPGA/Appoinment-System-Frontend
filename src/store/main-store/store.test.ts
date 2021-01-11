import Vuex from 'vuex';

import { createLocalVue } from '@vue/test-utils';
import { inject, createStore } from 'vuex-smart-module';
import MainActions from './MainActions';

import MainStore from './MainStore';

it('increments asynchronously', async () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    // Inject mock commit method
    const commit = jest.fn();
    const actions = inject(MainActions, {
        commit,
        state: {
            currentLanguage: 'es',
        },
    });

    const store = createStore(MainStore);

    store.dispatch('changeLanguajeToEnglish');

    await actions.changeLanguajeToEnglish();

    // Check mock commit method is called
    expect(commit).toHaveBeenCalledWith('changeLanguajeToEnglish');

    expect(store.state.currentLanguage).toBe('en');
});
