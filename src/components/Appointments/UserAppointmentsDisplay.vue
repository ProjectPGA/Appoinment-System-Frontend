<template>
    <div>
        <div class="columns is-multiline p-4">
            <div
                v-for="(cita, index) in citasView"
                :key="index"
                class="column is-3-fullhd is-4-desktop is-6-tablet"
            >
                <div class="card" :class="isActive(cita.date)">
                    <div class="card-content">
                        <p class="title">
                            {{ getAppointHour(cita.type) }}
                        </p>
                        <p class="subtitle" v-if="getDay(index, 'Mon')">
                            {{ $t('week.monday') }} {{ getDayMonth(cita.date) }}
                        </p>
                        <p class="subtitle" v-if="getDay(index, 'Tue')">
                            {{ $t('week.tuesday') }}
                            {{ getDayMonth(cita.date) }}
                        </p>
                        <p class="subtitle" v-if="getDay(index, 'Wed')">
                            {{ $t('week.wednesday') }}
                            {{ getDayMonth(cita.date) }}
                        </p>
                        <p class="subtitle" v-if="getDay(index, 'Thu')">
                            {{ $t('week.thursday') }}
                            {{ getDayMonth(cita.date) }}
                        </p>
                        <p class="subtitle" v-if="getDay(index, 'Fri')">
                            {{ $t('week.friday') }} {{ getDayMonth(cita.date) }}
                        </p>
                        <p class="subtitle" v-if="getDay(index, 'Sat')">
                            {{ $t('week.saturday') }}
                            {{ getDayMonth(cita.date) }}
                        </p>
                    </div>
                    <footer class="card-footer">
                        <p class="card-footer-item">
                            <span>
                                <b-icon pack="fas" icon="ban" size="is-small">
                                </b-icon>
                                Cancelar Cita
                            </span>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import { GlobalState } from '@/vuex/store';

import {
    Day,
    ViewAppointment,
    Appointment,
} from '@/models/appointment/Appointment';

@Component({
    name: 'UserAppointmentsDisplay',
    components: {},
})
export default class UserAppointmentsDisplay extends Vue {
    @State((state: GlobalState) => state.appointment.days) private days: Day[];
    @State((state: GlobalState) => state.auth.user.id) private userId: number;
    @State((state: GlobalState) => state.utils.pastAppoints)
    private pastAppoints: boolean;
    @State((state: GlobalState) => state.appointment.viewAppointments)
    private citasView: ViewAppointment[];

    @Action('appointment/fetchActiveUserAppoints')
    private getUserAppoints: (userId: number) => void;
    @Action('appointment/fetchPastUserAppoints')
    private getPastUserAppoints: (userId: number) => void;

    private mounted() {
        this.getUserAppoints(this.userId);
    }

    @Watch('pastAppoints')
    private showPastAppoints() {
        if (this.pastAppoints) {
            this.getPastUserAppoints(this.userId);
        } else {
            this.getUserAppoints(this.userId);
        }
    }

    private isActive(d: string): string {
        let result: string = '';
        let today: number = new Date().getTime();
        today = (today - (today % 100000000)) / 100000000;
        let date: number = new Date(d + ' 10:00:00').getTime();
        date = (date - (date % 100000000)) / 100000000;
        if (today <= date) {
            result = 'active';
        }
        if (today > date) {
            result = 'inactive';
        }
        return result;
    }
    private getDay(key: number, arg: string): boolean {
        return this.citasView[key].date.includes(arg);
    }
    private getDayMonth(date: string): string {
        const fech: Date = new Date(date);
        let daymonth: string = '';
        const dia: number = fech.getDate();
        const mes: number = fech.getMonth();

        let mesString: string = '';

        switch (mes) {
            case 0:
                mesString = 'Enero';
                break;
            case 1:
                mesString = 'Febrero';
                break;
            case 2:
                mesString = 'Marzo';
                break;
            case 3:
                mesString = 'Abril';
                break;
            case 4:
                mesString = 'Mayo';
                break;
            case 5:
                mesString = 'Junio';
                break;
            case 6:
                mesString = 'Julio';
                break;
            case 7:
                mesString = 'Agosto';
                break;
            case 8:
                mesString = 'Septiembre';
                break;
            case 9:
                mesString = 'Octubre';
                break;
            case 10:
                mesString = 'Noviembre';
                break;
            case 11:
                mesString = 'Diciembre';
                break;
            default:
                break;
        }
        daymonth = dia + ' de ' + mesString;
        return daymonth;
    }
    private getAppointHour(type: number): string {
        let hourString = '';
        switch (type) {
            case 1:
                hourString = '10:00';
                break;
            case 2:
                hourString = '10:20';
                break;
            case 3:
                hourString = '10:40';
                break;
            case 4:
                hourString = '11:00';
                break;
            case 5:
                hourString = '11:20';
                break;
            case 6:
                hourString = '11:40';
                break;
            case 7:
                hourString = '12:00';
                break;
            case 8:
                hourString = '12:20';
                break;
            case 9:
                hourString = '12:40';
                break;
            case 10:
                hourString = '13:00';
                break;
            case 11:
                hourString = '13:20';
                break;
            case 12:
                hourString = '13:40';
                break;
            case 13:
                hourString = '14:00';
                break;
            case 14:
                hourString = '17:00';
                break;
            case 15:
                hourString = '17:20';
                break;
            case 16:
                hourString = '17:40';
                break;
            case 17:
                hourString = '18:00';
                break;
            case 18:
                hourString = '18:20';
                break;
            case 19:
                hourString = '18:40';
                break;
            case 20:
                hourString = '19:00';
                break;
            case 21:
                hourString = '19:20';
                break;
            case 22:
                hourString = '19:40';
                break;
            case 23:
                hourString = '20:00';
                break;
            case 24:
                hourString = '20:20';
                break;
            case 25:
                hourString = '20:40';
                break;
            default:
                break;
        }

        return hourString;
    }
}
</script>

<style lang="scss" scoped>
.card-footer-item {
    cursor: pointer;
}

.card {
    border: 0.5px solid #eee;
    &.active {
        -webkit-box-shadow: 8px 8px 9px 1px rgba(0, 255, 41, 0.38);
        box-shadow: 8px 8px 9px 1px rgba(0, 255, 41, 0.38);
    }
    &.inactive {
        -webkit-box-shadow: 8px 8px 9px 1px rgba(255, 0, 0, 0.38);
        box-shadow: 8px 8px 9px 1px rgba(255, 0, 0, 0.38);
    }
}
</style>
