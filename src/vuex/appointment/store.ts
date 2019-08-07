import Vue from 'vue';
import Vuex, { MutationTree, Computed } from 'vuex';
import { ActionTree, ActionContext, GetterTree } from '@/types';
import { AxiosResponse } from 'axios';
import { Day, Appointment } from '@/models/appointment/Appointment';

Vue.use(Vuex);

export interface DayState {
    days: Day[];
    error: boolean;
    errorMessage: string;
}

const actions: ActionTree<DayState> = {
    //#region
    async firstLoad(context: ActionContext<DayState>): Promise<any> {
        const fecha = new Date();
        const days: Day[] = [];

        function addDays(d): string {
            const result = new Date();
            result.setDate(result.getDate() + d);
            return result.toDateString();
        }
        function randomId(): number {
            const n = Math.floor(Math.random() * 1000000000) + 5;
            return n;
        }
        function emptyAppoint() {
            const appoints: Appointment[] = [];
            for (let index = 0; index < 22; index++) {
                const appoint = {
                    id: randomId(),
                    takerid: 0,
                    notes: '',
                    type: index + 1,
                };
                appoints.push(appoint);
            }
            return appoints;
        }

        for (let i = 0; i < 365; i++) {
            const day: Day = { id: 0, date: '', appointments: [] };

            day.id = randomId();
            day.date = addDays(i);
            day.appointments = emptyAppoint();
            days.push(day);
        }

        try {
            const response: AxiosResponse = await Vue.axios({
                method: 'POST',
                url: '/days',
                data: days,
            });
            const payload: Day[] = response && response.data;

            context.commit('daysLoaded', payload);
        } catch (e) {
            context.commit('daysError', e.message);
        } finally {
            console.log('LOAD');
        }
    },
    //#endregion

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
                method: 'PUT',
                url: `/days/${day.id}`,
                data: day,
            });
            if (response && response.data) {
                context.dispatch('fetchData');
            }
        } catch (e) {
            context.commit('daysError', e.message);
        } finally {
            console.log('EDIT');
        }
    },
};

const mutations: MutationTree<DayState> = {
    daysLoaded(state: DayState, days: Day[]) {
        state.days = days;
    },

    daysError(state: DayState, payload: string) {
        state.error = true;
        state.errorMessage = payload;
        state.days = [];
    },
};

const getters: GetterTree<DayState> = {
    daysCount(state: DayState): number {
        const { days } = state;
        return days.length;
    },
};

export const getInitialState = (): DayState => ({
    days: [
        {
            id: 0,
            date: '',
            appointments: [],
        },
    ],
    error: false,
    errorMessage: '',
});

const appointment = {
    namespaced: true,
    state: getInitialState(),
    mutations,
    actions,
    getters,
};

export default appointment;
