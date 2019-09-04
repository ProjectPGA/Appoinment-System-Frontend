import Vue from 'vue';
import Vuex, { MutationTree } from 'vuex';
import { ActionTree, ActionContext, GetterTree } from '@/types';
import { AxiosResponse } from 'axios';
import {
    Day,
    Appointment,
    ViewAppointment,
} from '@/models/appointment/Appointment';
import { appointDateCompare } from '@/utils/appointHelper';

Vue.use(Vuex);

export interface DayState {
    days: Day[];
    viewAppointments: ViewAppointment[];
    error: boolean;
    errorMessage: string;
}

const actions: ActionTree<DayState> = {
    //#region
    async firstLoad(context: ActionContext<DayState>): Promise<any> {
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
        function emptyAppoint(): Appointment[] {
            const appoints: Appointment[] = [];
            for (let index = 0; index < 25; index++) {
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
    async assignAppoint(
        context: ActionContext<DayState>,
        day: Day
    ): Promise<any> {
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
    async fetchActiveUserAppoints(
        context: ActionContext<DayState>
    ): Promise<any> {
        const citas: Appointment[] = [];
        const citasView: ViewAppointment[] = [];
        for (let i = 0; i < context.state.days.length; i++) {
            for (
                let k = 0;
                k < context.state.days[i].appointments.length;
                k++
            ) {
                if (
                    context.state.days[i].appointments[k].takerid ===
                    context.rootState.auth.user.id
                ) {
                    citas.push(context.state.days[i].appointments[k]);
                    const cita: ViewAppointment = {
                        id: context.state.days[i].appointments[k].id,
                        type: context.state.days[i].appointments[k].type,
                        notes: context.state.days[i].appointments[k].notes,
                        takerid: context.state.days[i].appointments[k].takerid,
                        date: context.state.days[i].date,
                        dayid: context.state.days[i].id,
                    };
                    citasView.push(cita);
                    // citasView.sort((obj1, obj2) => {
                    //     let date1: number = new Date(
                    //         obj2.date + ' 10:00:00'
                    //     ).getTime();
                    //     date1 = (date1 - (date1 % 10000000)) / 10000000;
                    //     let date2: number = new Date(
                    //         obj1.date + ' 10:00:00'
                    //     ).getTime();
                    //     date2 = (date2 - (date2 % 10000000)) / 10000000;

                    //     if (date1 > date2) {
                    //         return 1;
                    //     }

                    //     if (date1 < date2) {
                    //         return -1;
                    //     }

                    //     return 0;
                    // });
                }
            }
        }
        const pastCitasView: ViewAppointment[] = [];

        for (let i = 0; i < citasView.length; i++) {
            if (appointDateCompare(citasView[i].date)) {
                pastCitasView.push(citasView[i]);
            }
        }
        console.log(pastCitasView);
        context.commit('userAppointsLoaded', pastCitasView);
    },
    async fetchPastUserAppoints(
        context: ActionContext<DayState>
    ): Promise<any> {
        const citas: Appointment[] = [];
        const citasView: ViewAppointment[] = [];
        for (let i = 0; i < context.state.days.length; i++) {
            for (
                let k = 0;
                k < context.state.days[i].appointments.length;
                k++
            ) {
                if (
                    context.state.days[i].appointments[k].takerid ===
                    context.rootState.auth.user.id
                ) {
                    citas.push(context.state.days[i].appointments[k]);
                    const cita: ViewAppointment = {
                        id: context.state.days[i].appointments[k].id,
                        type: context.state.days[i].appointments[k].type,
                        notes: context.state.days[i].appointments[k].notes,
                        takerid: context.state.days[i].appointments[k].takerid,
                        date: context.state.days[i].date,
                        dayid: context.state.days[i].id,
                    };
                    citasView.push(cita);
                    // citasView.sort((obj1, obj2) => {
                    //     let date1: number = new Date(
                    //         obj2.date + ' 10:00:00'
                    //     ).getTime();
                    //     date1 = (date1 - (date1 % 10000000)) / 10000000;
                    //     let date2: number = new Date(
                    //         obj1.date + ' 10:00:00'
                    //     ).getTime();
                    //     date2 = (date2 - (date2 % 10000000)) / 10000000;

                    //     if (date1 > date2) {
                    //         return 1;
                    //     }

                    //     if (date1 < date2) {
                    //         return -1;
                    //     }

                    //     return 0;
                    // });
                }
            }
        }
        context.commit('userAppointsLoaded', citasView);
    },
    async appointCancel(
        context: ActionContext<DayState>,
        appoint: ViewAppointment
    ): Promise<any> {
        try {
            const response: AxiosResponse = await Vue.axios({
                method: 'GET',
                url: `/days/${appoint.dayid}`,
            });
            if (response && response.data) {
                const day: Day = response.data;
                for (let i = 0; i < 25; i++) {
                    if (day.appointments[i].takerid === 1) {
                        appoint.takerid = 0;
                        day.appointments[i] = appoint;
                    }
                }
                try {
                    const resp: AxiosResponse = await Vue.axios({
                        method: 'PUT',
                        url: `/days/${day.id}`,
                        data: day,
                    });
                    if (resp) {
                        await context.dispatch('fetchData');
                    }
                } catch (r) {
                    context.commit('daysError', r.message);
                }
            }
        } catch (e) {
            context.commit('daysError', e.message);
        } finally {
            if (context.rootState.utils.pastAppoints) {
                context.dispatch('fetchPastUserAppoints');
            } else {
                context.dispatch('fetchActiveUserAppoints');
            }
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
    userAppointsLoaded(state: DayState, payload: ViewAppointment[]) {
        state.viewAppointments = payload;
        console.log(state.viewAppointments);
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
    viewAppointments: [
        {
            id: 0,
            type: 0,
            notes: '',
            takerid: 0,
            date: '',
            dayid: 0,
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
