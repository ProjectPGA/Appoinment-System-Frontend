<template>
    <div>
        <!-- <no-appoints :citas="citas"></no-appoints>
        <div class="columns is-multiline p-4">
            <div
                v-for="(cita, index) in citas"
                :key="index"
                class="column is-3-fullhd is-4-desktop is-6-tablet"
            >
                <div class="card" :class="_isActive(cita.date)">
                    <div class="card-content">
                        <p class="title">
                            {{ _getAppointHour(cita.type) }}
                        </p>
                        <p class="subtitle" v-if="_getDay('Mon', cita)">
                            {{ $t('week.monday') }}
                            {{ _getDayMonth(cita.date) }}
                        </p>
                        <p class="subtitle" v-if="_getDay('Tue', cita)">
                            {{ $t('week.tuesday') }}
                            {{ _getDayMonth(cita.date) }}
                        </p>
                        <p class="subtitle" v-if="_getDay('Wed', cita)">
                            {{ $t('week.wednesday') }}
                            {{ _getDayMonth(cita.date) }}
                        </p>
                        <p class="subtitle" v-if="_getDay('Thu', cita)">
                            {{ $t('week.thursday') }}
                            {{ _getDayMonth(cita.date) }}
                        </p>
                        <p class="subtitle" v-if="_getDay('Fri', cita)">
                            {{ $t('week.friday') }}
                            {{ _getDayMonth(cita.date) }}
                        </p>
                        <p class="subtitle" v-if="_getDay('Sat', cita)">
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
        </div> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { State, Action } from 'vuex-class';

// TODO: Refactor Store
// import { GlobalState } from '@/vuex/store';

// import NoAppoints from '@/components/Utils/NoAppoints.vue';
// import { Day, Appointment } from '@/models/appointment/Appointment';

import {
    getDayMonth,
    getDay,
    getAppointHour,
    isActive,
} from '@/utils/appointHelper';

@Component({
    name: 'UserAppointmentsDisplay',
    components: {
        // NoAppoints,
    },
})
export default class UserAppointmentsDisplay extends Vue {
    // @State((state: GlobalState) => state.auth.user.id) private userId: number;
    // @State((state: GlobalState) => state.utils.pastAppoints)
    // private pastAppoints: boolean;
    // @State((state: GlobalState) => state.appointment.Appointments)
    // private citas: Appointment[];
    // @Action('appointment/fetchActiveUserAppoints')
    // private getUserAppoints: () => void;
    // @Action('appointment/fetchPastUserAppoints')
    // private getPastUserAppoints: () => void;
    // @Action('appointment/appointCancel')
    // private appointCancel: () => void;
    // private mounted() {
    //     this.getUserAppoints();
    // }
    // private _isActive(d: number): string {
    //     return isActive(d);
    // }
    // private _getDay(arg: string, citas: Appointment) {
    //     return getDay(arg, citas);
    // }
    // private _getDayMonth(date: number) {
    //     return getDayMonth(date);
    // }
    // private _getAppointHour(type: number) {
    //     return getAppointHour(type);
    // }
    // @Watch('pastAppoints')
    // private showPastAppoints() {
    //     if (this.pastAppoints) {
    //         this.getPastUserAppoints();
    //     } else {
    //         this.getUserAppoints();
    //     }
    // }
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
