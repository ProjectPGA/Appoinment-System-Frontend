import Vue from 'vue';
import Vuex, { MutationTree } from 'vuex';
import { ActionTree, ActionContext, GetterTree } from '@/types';
import { AxiosResponse } from 'axios';
import { Day, Appointment } from '@/models/appointment/Appointment';
import { appointDateCompare } from '@/utils/appointHelper';

Vue.use(Vuex);

export interface DayState {
    days: Day[];
    daysFiltered: Day[];
    Appointments: Appointment[];
    error: boolean;
    errorMessage: string;
    isLoading: boolean;
}

const actions: ActionTree<DayState> = {
    // async firstLoad(context: ActionContext<DayState>): Promise<any> {
    //     const days: Day[] = [];
    //     let diaDate: number = 0;
    //     let rId: number = 0;

    //     function addDays(d: number): number {
    //         const result = new Date();
    //         result.setDate(result.getDate() + d);
    //         diaDate = result.getTime();
    //         return diaDate;
    //     }
    //     function addDaysHour(type: number): number {
    //         let result: number = 0;
    //         switch (type) {
    //             case 1:

    //                 let fecha1 = new Date(new Date(diaDate).toDateString() + ' 10:00:00')
    //                 result = fecha1.getTime();
    //                 break;
    //             case 2:
    //                 let fecha2 = new Date(new Date(diaDate).toDateString() + ' 10:20:00');
    //                 result = fecha2.getTime();
    //                 break;
    //             case 3:
    //                 const fecha3 = new Date(new Date(diaDate).toDateString() + ' 10:40:00');
    //                 result = fecha3.getTime();
    //                 break;
    //             case 4:
    //                 const fecha4 = new Date(new Date(diaDate).toDateString() + ' 11:00:00');
    //                 result = fecha4.getTime();
    //                 break;
    //             case 5:
    //                 const fecha5 = new Date(new Date(diaDate).toDateString() + ' 11:20:00');
    //                 result = fecha5.getTime();
    //                 break;
    //             case 6:
    //                 const fecha6 = new Date(new Date(diaDate).toDateString() + ' 11:40:00');
    //                 result = fecha6.getTime();
    //                 break;
    //             case 7:
    //                 const fecha7 = new Date(new Date(diaDate).toDateString() + ' 12:00:00');
    //                 result = fecha7.getTime();
    //                 break;
    //             case 8:
    //                 const fecha8 = new Date(new Date(diaDate).toDateString() + ' 12:20:00');
    //                 result = fecha8.getTime();
    //                 break;
    //             case 9:
    //                 const fecha9 = new Date(new Date(diaDate).toDateString() + ' 12:40:00');
    //                 result = fecha9.getTime();
    //                 break;
    //             case 10:
    //                 const fecha10 = new Date(new Date(diaDate).toDateString() + ' 13:00:00');
    //                 result = fecha10.getTime();
    //                 break;
    //             case 11:
    //                 const fecha11 = new Date(new Date(diaDate).toDateString() + ' 13:20:00');
    //                 result = fecha11.getTime();
    //                 break;
    //             case 12:
    //                 const fecha12 = new Date(new Date(diaDate).toDateString() + ' 13:40:00');
    //                 result = fecha12.getTime();
    //                 break;
    //             case 13:
    //                 const fecha13 = new Date(new Date(diaDate).toDateString() + ' 17:00:00');
    //                 result = fecha13.getTime();
    //                 break;
    //             case 14:
    //                 const fecha14 = new Date(new Date(diaDate).toDateString() + ' 17:20:00');
    //                 result = fecha14.getTime();
    //                 break;
    //             case 15:
    //                 const fecha15 = new Date(new Date(diaDate).toDateString() + ' 17:40:00');
    //                 result = fecha15.getTime();
    //                 break;
    //             case 16:
    //                 const fecha16 = new Date(new Date(diaDate).toDateString() + ' 18:00:00');
    //                 result = fecha16.getTime();
    //                 break;
    //             case 17:
    //                 const fecha17 = new Date(new Date(diaDate).toDateString() + ' 18:20:00');
    //                 result = fecha17.getTime();
    //                 break;
    //             case 18:
    //                 const fecha18 = new Date(new Date(diaDate).toDateString() + ' 18:40:00');
    //                 result = fecha18.getTime();
    //                 break;
    //             case 19:
    //                 const fecha19 = new Date(new Date(diaDate).toDateString() + ' 19:00:00');
    //                 result = fecha19.getTime();
    //                 break;
    //             case 20:
    //                 const fecha20 = new Date(new Date(diaDate).toDateString() + ' 19:20:00');
    //                 result = fecha20.getTime();
    //                 break;
    //             case 21:
    //                 const fecha21 = new Date(new Date(diaDate).toDateString() + ' 19:40:00');
    //                 result = fecha21.getTime();
    //                 break;
    //             case 22:
    //                 const fecha22 = new Date(new Date(diaDate).toDateString() + ' 20:00:00');
    //                 result = fecha22.getTime();
    //                 break;
    //             case 23:
    //                 const fecha23 = new Date(new Date(diaDate).toDateString() + ' 20:20:00');
    //                 result = fecha23.getTime();
    //                 break;
    //             case 24:
    //                 const fecha24 = new Date(new Date(diaDate).toDateString() + ' 20:40:00');
    //                 result = fecha24.getTime();
    //                 break;
    //             default:
    //                 break;
    //         }
    //         return result;
    //     }
    //     function randomId(): number {
    //         const n = Math.floor(Math.random() * 1000000000) + 5;
    //         return n;
    //     }
    //     function emptyAppoint(): Appointment[] {
    //         const appoints: Appointment[] = [];
    //         for (let index = 0; index < 24; index++) {
    //             const appoint = {
    //                 id: randomId(),
    //                 takerid: 0,
    //                 notes: '',
    //                 type: index + 1,
    //                 date: addDaysHour(index + 1),
    //                 dayid: rId,
    //             };
    //             appoints.push(appoint);
    //         }
    //         return appoints;
    //     }

    //     for (let i = 0; i < 365; i++) {
    //         const day: Day = { id: 0, date: 0, appointments: [] };
    //         diaDate = addDays(i);
    //         rId = randomId();
    //         day.id = rId;
    //         day.date = diaDate;
    //         day.appointments = emptyAppoint();
    //         days.push(day);
    //     }

    //     try {
    //         const response: AxiosResponse = await Vue.axios({
    //             method: 'POST',
    //             url: '/days',
    //             data: days,
    //         });
    //         const payload: Day[] = response && response.data;

    //         // context.commit('daysLoaded', payload);
    //     } catch (e) {
    //         // context.commit('daysError', e.message);
    //     } finally {
    //         console.log('LOAD');
    //     }
    // },

    async fetchData(context: ActionContext<DayState>): Promise<any> {
        try {
            context.commit('activeLoading');
            const response: AxiosResponse = await Vue.axios({
                url: '/days',
            });
            const payload: Day[] = response && response.data;

            context.commit('daysLoaded', payload);
        } catch (e) {
            context.commit('daysError', e.message);
        } finally {
            console.log('LOAD');
            context.commit('desactiveLoading');
        }
    },
    async assignAppoint(
        context: ActionContext<DayState>,
        day: Day
    ): Promise<any> {
        try {
            context.commit('activeLoading');
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
            context.commit('desactiveLoading');
            console.log('EDIT');
        }
    },
    async fetchActiveUserAppoints(
        context: ActionContext<DayState>
    ): Promise<any> {
        const citas: Appointment[] = [];
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
        const pastCitas: Appointment[] = [];

        for (let i = 0; i < citas.length; i++) {
            if (appointDateCompare(citas[i].date)) {
                pastCitas.push(citas[i]);
            }
        }
        context.commit('userAppointsLoaded', pastCitas);
    },
    async fetchPastUserAppoints(
        context: ActionContext<DayState>
    ): Promise<any> {
        const citas: Appointment[] = [];
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
        context.commit('userAppointsLoaded', citas);
    },
    // Cancelar cita desde Appoints (inicio)
    async cancelAppoint(
        context: ActionContext<DayState>,
        day: Day
    ): Promise<any> {
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
    },

    // Cancelar cita desde MyAppoints
    async appointCancel(
        context: ActionContext<DayState>,
        appoint: Appointment
    ): Promise<any> {
        try {
            const response: AxiosResponse = await Vue.axios({
                method: 'GET',
                url: `/days/${appoint.dayid}`,
            });
            if (response && response.data) {
                const day: Day = response.data;
                for (let i = 0; i < 24; i++) {
                    if (
                        day.appointments[i].takerid ===
                        context.rootState.auth.user.id
                    ) {
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
    daysFilteredLoaded(state: DayState, days: Day[]) {
        state.daysFiltered = days;
    },
    daysError(state: DayState, payload: string) {
        state.error = true;
        state.errorMessage = payload;
        state.days = [];
    },
    userAppointsLoaded(state: DayState, payload: Appointment[]) {
        state.Appointments = payload;
    },
    activeLoading(currentState: DayState) {
        currentState.isLoading = true;
    },
    desactiveLoading(currentState: DayState) {
        currentState.isLoading = false;
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
            date: 0,
            appointments: [],
        },
    ],
    daysFiltered: [
        {
            id: 0,
            date: 0,
            appointments: [],
        },
    ],
    Appointments: [
        {
            id: 0,
            type: 0,
            notes: '',
            takerid: 0,
            date: 0,
            dayid: 0,
        },
    ],
    error: false,
    errorMessage: '',
    isLoading: false,
});

const appointment = {
    namespaced: true,
    state: getInitialState(),
    mutations,
    actions,
    getters,
};

export default appointment;
