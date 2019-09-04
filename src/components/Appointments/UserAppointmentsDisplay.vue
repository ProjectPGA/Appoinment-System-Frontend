<template>
    <div>
        <no-appoints :citasView="citasView"></no-appoints>
        <div class="columns is-multiline p-4">
            <div
                v-for="(cita, index) in citasView"
                :key="index"
                class="column is-3-fullhd is-4-desktop is-6-tablet"
            >
                <div class="card" :class="_isActive(cita.date)">
                    <div class="card-content">
                        <p class="title">
                            {{ _getAppointHour(cita.type) }}
                        </p>
                        <p
                            class="subtitle"
                            v-if="_getDay(index, 'Mon', citasView)"
                        >
                            {{ $t('week.monday') }} {{ _getDayMonth(cita.date) }}
                        </p>
                        <p
                            class="subtitle"
                            v-if="_getDay(index, 'Tue', citasView)"
                        >
                            {{ $t('week.tuesday') }}
                            {{ _getDayMonth(cita.date) }}
                        </p>
                        <p
                            class="subtitle"
                            v-if="_getDay(index, 'Wed', citasView)"
                        >
                            {{ $t('week.wednesday') }}
                            {{ _getDayMonth(cita.date) }}
                        </p>
                        <p
                            class="subtitle"
                            v-if="_getDay(index, 'Thu', citasView)"
                        >
                            {{ $t('week.thursday') }}
                            {{ _getDayMonth(cita.date) }}
                        </p>
                        <p
                            class="subtitle"
                            v-if="_getDay(index, 'Fri', citasView)"
                        >
                            {{ $t('week.friday') }} {{ _getDayMonth(cita.date) }}
                        </p>
                        <p
                            class="subtitle"
                            v-if="_getDay(index, 'Sat', citasView)"
                        >
                            {{ $t('week.saturday') }}
                            {{ _getDayMonth(cita.date) }}
                        </p>
                    </div>
                    <footer class="card-footer">
                        <p
                            class="card-footer-item"
                            @click="appointCancel(cita)"
                        >
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
import { Component, Vue, Watch} from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import { GlobalState } from '@/vuex/store';

import NoAppoints from '@/components/Utils/NoAppoints.vue';
import {
    Day,
    ViewAppointment,
    Appointment,
} from '@/models/appointment/Appointment';

import { getDayMonth, getDay, getAppointHour, isActive } from '@/utils/appointHelper';

@Component({
    name: 'UserAppointmentsDisplay',
    components: {
        NoAppoints,
    },
})
export default class UserAppointmentsDisplay extends Vue {
    @State((state: GlobalState) => state.auth.user.id) private userId: number;
    @State((state: GlobalState) => state.utils.pastAppoints)
    private pastAppoints: boolean;
    @State((state: GlobalState) => state.appointment.viewAppointments)
    private citasView: ViewAppointment[];

    @Action('appointment/fetchActiveUserAppoints')
    private getUserAppoints: () => void;
    @Action('appointment/fetchPastUserAppoints')
    private getPastUserAppoints: () => void;
    @Action('appointment/appointCancel')
    private appointCancel: () => void;

    private mounted() {
        this.getUserAppoints();
    }
    private _isActive(d: string): string{
        return isActive(d)
    }
    private _getDay(key: number, arg: string, citasView: ViewAppointment[]){
        return getDay(key, arg, citasView)
    }
    private _getDayMonth(date: string ){
        return getDayMonth(date);
    }
    private _getAppointHour(type: number){
        return getAppointHour(type);
    }

    @Watch('pastAppoints')
    private showPastAppoints() {
        if (this.pastAppoints) {
            this.getPastUserAppoints();
        } else {
            this.getUserAppoints();
        }
    }

}
</script>

<style lang="scss" scoped>
.card-footer-item {
    cursor: pointer;
}
.center {
    display: flex;
    justify-content: center;
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
