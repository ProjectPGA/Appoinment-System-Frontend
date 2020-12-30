<template>
    <div>
        <div class="columns box custom-box-padding is-multiline">
            <div
                v-for="(day, index) in daysFiltered"
                :key="index"
                class="column is-auto has-text-centered box custom-box-margin"
            >
                <div class="columns is-multiline">
                    <div class="column is-12 is-size-5">
                        <div
                            v-if="_getDay(day, 'Mon')"
                            class="custom-padding title"
                        >
                            {{ $t('week.monday') }}
                        </div>
                        <div
                            v-if="_getDay(day, 'Tue')"
                            class="custom-padding title"
                        >
                            {{ $t('week.tuesday') }}
                        </div>
                        <div
                            v-if="_getDay(day, 'Wed')"
                            class="custom-padding title"
                        >
                            {{ $t('week.wednesday') }}
                        </div>
                        <div
                            v-if="_getDay(day, 'Thu')"
                            class="custom-padding title"
                        >
                            {{ $t('week.thursday') }}
                        </div>
                        <div
                            v-if="_getDay(day, 'Fri')"
                            class="custom-padding title"
                        >
                            {{ $t('week.friday') }}
                        </div>
                        <div
                            v-if="_getDay(day, 'Sat')"
                            class="custom-padding title"
                        >
                            {{ $t('week.saturday') }}
                        </div>

                        <div class="custom-padding">
                            {{ _getDayMonth(day.date) }}
                        </div>
                    </div>
                    <div
                        v-for="(appoint, i) in day.appointments"
                        :key="i"
                        class="column is-12 box custom-box-padding is-size-4"
                        :class="{
                            'bg-user': appoint.takerid === userId,
                            'bg-free': appoint.takerid === 0,
                            'bg-taken':
                                appoint.takerid !== 0 &&
                                appoint.takerid !== userId,
                        }"
                        @click="openModal(day, appoint, i)"
                    >
                        <div v-if="appoint.takerid === userId">
                            <span class="hour-margin">{{
                                $t('components.appointments.userAppointment')
                            }}</span>
                        </div>
                        <div
                            v-if="
                                appoint.takerid !== userId &&
                                appoint.takerid !== 0
                            "
                        >
                            {{ $t('components.appointments.reserved') }}
                        </div>
                        <div
                            v-if="
                                appoint.takerid !== userId &&
                                appoint.takerid === 0
                            "
                        >
                            {{ _getAppointHour(appoint.type) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <modal :active.sync="showModal">
            <template slot="modal_title">
                {{ $t('components.modal.title') }}
            </template>
            <confirm
                :title="tituloModal"
                :acceptLabel="$t('components.modal.accept')"
                :cancelLabel="$t('components.modal.cancel')"
                @confirm="userConfirmation"
            ></confirm>
        </modal>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';
import { State, Mutation, Action } from 'vuex-class';

import { UtilState } from '@/vuex/utils/store';
// TODO: Refactor Store
// import { GlobalState } from '@/vuex/store';

import Modal from '@/components/Utils/Modal.vue';
import Confirm from '@/components/Utils/Confirm.vue';

import { Day, Appointment } from '@/models/appointment/Appointment';
// @ts-ignore
import { SnackbarProgrammatic as Snackbar } from 'buefy';
import appointment from '@/vuex/appointment/store';
import { getDay, getDayMonth, getAppointHour } from '@/utils/appointHelper';

@Component({
    name: 'MainSchedule',
    components: {
        Modal,
        Confirm,
    },
})
export default class MainSchedule extends Vue {
    @Action('appointment/assignAppoint') private assignAppoint: (Day) => void;
    @Action('appointment/cancelAppoint') private cancelAppoint: (Day) => void;
    @Action('appointment/firstLoad') private firstLoad: () => void;

    @State((state: GlobalState) => state.auth.user.id) private userId: number;
    @State((state: GlobalState) => state.auth.user.name)
    private userName: string;

    @Prop() private daysFiltered: Day[];

    private showModal: boolean = false;
    private tituloModal: string = '';
    private modalType: string = '';
    private day: Day;
    private appoint: Appointment;
    private appointIndex: number;

    private created() {
        // this.firstLoad();
    }
    private _getDay(arr: Day, arg: string): boolean {
        return getDay(arg, arr);
    }
    private openModal(day: Day, appoint: Appointment, appointIndex: number) {
        if (appoint.takerid === this.userId) {
            this.modalType = 'cancel';
            this.tituloModal = `${this.$t('components.modal.CancelMessage')}`;
            this.showModal = true;
            this.day = day;
            this.appoint = appoint;
            this.appointIndex = appointIndex;
        } else {
            this.modalType = 'assign';
            this.tituloModal = `${this.$t('components.modal.reserveMessage')}`;
            this.showModal = this.notTaken(appoint);
            this.day = day;
            this.appoint = appoint;
            this.appointIndex = appointIndex;
        }
    }
    private async userConfirmation(accepted: boolean): Promise<void> {
        if (accepted) {
            switch (this.modalType) {
                case 'assign':
                    await this.cogerCita(
                        this.day,
                        this.appoint,
                        this.appointIndex
                    );
                    this.showModal = false;
                    break;
                case 'cancel':
                    await this.cancelarCita(
                        this.day,
                        this.appoint,
                        this.appointIndex
                    );
                    this.showModal = false;
                    break;
                default:
                    break;
            }
        } else {
            this.showModal = false;
        }
    }
    private notTaken(appoint: Appointment): boolean {
        if (appoint.takerid === 0) {
            return true;
        } else {
            return false;
        }
    }
    private _getDayMonth(date: number) {
        return getDayMonth(date);
    }
    private _getAppointHour(type: number) {
        return getAppointHour(type);
    }
    private cancelarCita(day: Day, appoint: Appointment, appointIndex: number) {
        day.appointments[appointIndex].takerid = 0;
        this.cancelAppoint(day);
        Snackbar.open(
            `${this.$t('snackbar.cancelMessage')}` +
                this._getDayMonth(day.date) +
                `${this.$t('snackbar.cancelMessagedate')}` +
                this._getAppointHour(appoint.type)
        );
    }
    private cogerCita(day: Day, appoint: Appointment, appointIndex: number) {
        if (this.checkTwoAppoints(day)) {
            day.appointments[appointIndex].takerid = this.userId;
            this.assignAppoint(day);
            Snackbar.open(
                `${this.$t('snackbar.assginMessage')}` +
                    this._getDayMonth(day.date) +
                    `${this.$t('snackbar.assginMessageDate')}` +
                    this._getAppointHour(appoint.type)
            );
        } else {
            Snackbar.open(`${this.$t('snackbar.oneAppoinmetPerday')}`);
        }
    }
    private checkTwoAppoints(day: Day) {
        for (let i = 0; i < day.appointments.length; i++) {
            if (day.appointments[i].takerid === this.userId) {
                return false;
            }
        }
        return true;
    }
}
</script>
<style lang="scss" scoped>
.hour-margin {
    margin-right: 0.75rem;
}
.custom-box-margin {
    margin: 0.5rem !important;
}
.bg-free {
    background-color: #53ff53;
    cursor: pointer;
}
.bg-taken {
    background-color: #ff6969;
    cursor: not-allowed;
}
.bg-user {
    background-color: #628bff;
    cursor: pointer;
}
.custom-border {
    border: 1px black;
    border-style: solid;
}
.custom-padding {
    padding: 0.25rem !important;
}
.column {
    &.is-auto {
        padding: 1.25rem !important;
    }
    &.is-12 {
        padding: 0.5rem !important;
    }
    padding: 0rem !important;
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
