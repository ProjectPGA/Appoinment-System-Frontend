<template>
    <div>
        <div class="columns is-multiline p-4">
            <div
                v-for="(cita, index) in citasView"
                :key="index"
                class="column is-3-fullhd is-4-desktop is-6-tablet"
            >
                <div
                    class="card"
                    :class="isActive(cita.date)"
                >
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
                        <p class="card-footer-item">
                            <span>
                                <b-switch :value="true" type="is-danger">
                                    Notificar
                                </b-switch>
                            </span>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
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

    private citasView: ViewAppointment[] = [];
    private citas: Appointment[] = [];

    private mounted() {
        this.getUserAppointments();
    }
    private getUserAppointments(): void {
        for (let i = 0; i < this.days.length; i++) {
            for (let k = 0; k < this.days[i].appointments.length; k++) {
                if (this.days[i].appointments[k].takerid === 1) {
                    this.citas.push(this.days[i].appointments[k]);
                    const cita: ViewAppointment = {
                        id: this.days[i].appointments[k].id,
                        type: this.days[i].appointments[k].type,
                        notes: this.days[i].appointments[k].notes,
                        takerid: this.days[i].appointments[k].takerid,
                        date: this.days[i].date,
                    };
                    this.citasView.push(cita);
                    this.citasView.reverse();
                }
            }
        }
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
            case 1:
                hourString = '10:20';
                break;
            case 2:
                hourString = '10:40';
                break;
            case 3:
                hourString = '11:00';
                break;
            case 4:
                hourString = '11:20';
                break;
            case 5:
                hourString = '11:40';
                break;
            case 6:
                hourString = '12:00';
                break;
            case 7:
                hourString = '12:20';
                break;
            case 8:
                hourString = '12:40';
                break;
            case 9:
                hourString = '13:00';
                break;
            case 10:
                hourString = '13:20';
                break;
            case 11:
                hourString = '13:40';
                break;
            case 12:
                hourString = '14:00';
                break;
            case 13:
                hourString = '17:00';
                break;
            case 14:
                hourString = '17:20';
                break;
            case 15:
                hourString = '17:40';
                break;
            case 16:
                hourString = '18:00';
                break;
            case 17:
                hourString = '18:20';
                break;
            case 18:
                hourString = '18:40';
                break;
            case 19:
                hourString = '19:00';
                break;
            case 20:
                hourString = '19:20';
                break;
            case 21:
                hourString = '19:40';
                break;
            case 22:
                hourString = '20:00';
                break;
            case 23:
                hourString = '20:20';
                break;
            case 24:
                hourString = '20:40';
                break;
            case 25:
                hourString = '21:00';
                break;
            default:
                break;
        }

        return hourString;
    }
    private isActive(d: string): string {
        var result: string = '';
        const today: number = new Date().getTime();
        const date: number = new Date(d).getTime();
        console.log('hoy: '+today)
        console.log('cita: '+date)
        if (today <= date) {
            result = 'active';
        }
        if (today > date) {
            result = 'inactive';
        }        
        return result;

    }
}
</script>

<style lang="scss" scoped>
.card.active {
    box-shadow: 0 6px 6px rgba(10, 180, 0, 0.67), 0 0 1px rgba(10, 10, 10, 0.1);
}
.card.inactive {
    box-shadow: 0 6px 6px rgba(180, 0, 0, 0.67), 0 0 1px rgba(10, 10, 10, 0.1);
}
</style>
