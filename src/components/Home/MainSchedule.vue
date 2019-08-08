<template>
    <div>
        <div
            v-for="(day, index) in daysFiltered"
            :key="index"
            class="columns box custom-box-padding is-size-4 is-multiline"
        >
            <div
                :class="{
                    'is-auto custom-box-margin': isMobile,
                    'is-12': !isMobile,
                }"
                class="column has-text-centered box "
            >
                <div class="columns is-multiline">
                    <div class="column is-12 is-size-5">
                        <div
                            v-if="getDay(index, 'Mon')"
                            class="custom-padding title"
                        >
                            Lunes
                        </div>
                        <div
                            v-if="getDay(index, 'Tue')"
                            class="custom-padding title"
                        >
                            Martes
                        </div>
                        <div
                            v-if="getDay(index, 'Wed')"
                            class="custom-padding title"
                        >
                            Miercoles
                        </div>
                        <div
                            v-if="getDay(index, 'Thu')"
                            class="custom-padding title"
                        >
                            Jueves
                        </div>
                        <div
                            v-if="getDay(index, 'Fri')"
                            class="custom-padding title"
                        >
                            Viernes
                        </div>
                        <div
                            v-if="getDay(index, 'Sat')"
                            class="custom-padding title"
                        >
                            Sabado
                        </div>

                        <div class="custom-padding">
                            {{ getDayMonth(day.date) }}
                        </div>
                    </div>
                    <div
                        v-for="(appoint, i) in day.appointments"
                        :key="i"
                        class="column is-12 box custom-box-padding is-size-4"
                        :class="{
                            'bg-free': appoint.takerid === 0,
                            'bg-taken': appoint.takerid !== 0,
                        }"
                        @click="TakeAppoint(day, appoint, i);"
                    >
                        {{ getAppointHour(appoint.type) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import { State, Mutation, Action } from 'vuex-class';

import { UtilState } from '@/vuex/utils/store';
import { GlobalState } from '@/vuex/store';

import { Day, Appointment } from '../../models/appointment/Appointment';
// @ts-ignore
import { SnackbarProgrammatic as Snackbar } from 'buefy';

@Component({
    name: 'MainSchedule',
    components: {},
})
export default class MainSchedule extends Vue {
    @State((state: GlobalState) => state.appointment.days)
    private days: Day[];

    @Action('appointment/fetchData') private fetchData: () => void;
    @Action('appointment/firstLoad') private firstLoad: () => void;
    @Action('appointment/assignAppoint') private assignAppoint: (Day) => void;

    private daysFiltered: Day[] = [];

    private created() {
        this.cargarDatos().then((resp: void) => {
            const week: string[] = [];
            let j: number = 5;

            for (let i = 0; i <= j; i++) {
                const fech = new Date();
                fech.setDate(fech.getDate() + i);
                week[i] = fech.toDateString();
                if (week[i].includes('Sun')) {
                    week.splice(i);
                    fech.setDate(fech.getDate() + 1);
                    week[i] = fech.toDateString();
                    i++;
                    j++;
                }
            }
            for (let i = 0; i < this.days.length; i++) {
                for (let k = 0; k < week.length; k++) {
                    if (this.days[i].date === week[k]) {
                        this.daysFiltered.push(this.days[i]);
                    }
                }
            }
        });
    }
    private async cargarDatos(): Promise<any> {
        return await this.fetchData();
    }

    private getDay(key: number, arg: string): boolean {
        return this.daysFiltered[key].date.includes(arg);
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

    private TakeAppoint(day: Day, appoint: Appointment, appointIndex: number) {
        day.appointments[appointIndex].takerid = 1;
        this.assignAppoint(day);
        Snackbar.open(
            'Cita asignada el dia ' +
                this.getDayMonth(day.date) +
                ' a las ' +
                this.getAppointHour(appoint.type)
        );
    }
    get isMobile(): boolean {
        return this.$mq === 'xl';
    }
}
</script>
<style scoped>
.custom-box-margin {
    margin: 0.5rem !important;
}
.bg-free {
    background-color: #53ff53;
}
.bg-taken {
    background-color: #ff6969;
}
.custom-border {
    border: 1px black;
    border-style: solid;
}
.custom-padding {
    padding: 0.25rem !important;
}
.column {
    padding: 1.25rem !important;
}
.box {
    margin-bottom: 1.5rem;
}
.custom-box-padding {
    padding: 0.5rem !important;
}
.title {
    margin-bottom: 0.25rem !important;
}
</style>
