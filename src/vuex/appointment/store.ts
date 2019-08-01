import Vue from 'vue';
import Vuex, { MutationTree, Computed } from 'vuex';
import { ActionTree, ActionContext, GetterTree } from '@/types';
import { AxiosResponse } from 'axios';
import { Day } from '@/models/appointment/Appointment';

Vue.use(Vuex);

export interface DayState {
    days: Day[];
    error: boolean;
    errorMessage: string;
}

const actions: ActionTree<DayState> = {
    async fetchData(context: ActionContext<DayState>): Promise<any> {
        try {
            const response: AxiosResponse = await Vue.axios({
                url: '/days',
            });
            const payload: Day[] = response && response.data;
            context.commit('daysLoaded', payload);
        } catch (e) {
            context.commit('daysError', e.message);
        } finally {
            console.log('LOAD');
        }
    },
    async deleteUser(context: ActionContext<DayState>, day: Day): Promise<any> {
        try {
            const response: AxiosResponse = await Vue.axios({
                method:'PUT',
                url: `/days/${day.id}`,
                data: day
            });
            if (response && response.data){
                context.dispatch('fetchData');
            }

        } catch (e) {
            context.commit('daysError', e.message);
        } finally {
            console.log('EDIT');
        }
    }
};

const mutations: MutationTree<DayState> = {
    daysLoaded(state: DayState, days: Day[]) {
        state.days = days;
    },

    productsError(state: DayState, payload: string) {
        state.error = true;
        state.errorMessage = payload;
        state.days = [];
    },
};


const getters: GetterTree<DayState> = {
    productsCount(state: DayState): number {
        const {days} = state;
        return days.length;
    }

};

export const getInitialState = (): DayState => ({
    days: [{
        id: 0,
        date: undefined,
        appointments: undefined
    }],
    error: false,
    errorMessage: '',
});

const appointment = {
    namespaced: true,
    state: getInitialState(),
    mutations,
    actions,
    getters
};

export default appointment;
