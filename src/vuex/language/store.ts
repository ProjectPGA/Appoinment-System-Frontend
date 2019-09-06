import { MutationTree } from '@/types';
import { ActionTree } from '@/types';
import { errorHandlerTree } from '../utils/errorHandler';

import { Language } from '@/models/Language';

export interface LanguageState {
    languages: Language[];
    currentLanguage: string;
}

export const mutations: MutationTree<LanguageState> = {
    setSelectedLanguage(state, code): void {
        state.currentLanguage = code;
    },
};

export const actions: ActionTree<LanguageState> = errorHandlerTree<
    LanguageState
>({
    updateSelectedLanguage({ commit, state, rootState }, code): void {
        commit('setSelectedLanguage', code);
    },
});

export const getInitialState = (): LanguageState => ({
    currentLanguage: 'es',
    languages: [
        {
            code: 'ES',
            name: 'Spanish',
            culture: 'es-ES',
        },
        {
            code: 'EN',
            name: 'English',
            culture: 'en-GB',
        },
    ],
});

const languageStore = {
    namespaced: true,
    state: getInitialState(),
    mutations,
    actions,
};

export default languageStore;