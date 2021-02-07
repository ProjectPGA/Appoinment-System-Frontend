<template>
    <div>
        <div class="columns">
            <div class="column pb-custom">
                <div class="custom-filter">
                    <p class="custom-margin-right">
                        {{ $t('components.appointments.pastAppointments') }}
                    </p>
                    <b-switch
                        type="is-danger"
                        class="subtitle"
                        name=""
                        v-model="pastAppoints"
                        @input="showPastAppoints()"
                    >
                    </b-switch>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

@Component({
    name: 'UserAppointmentsFilter',
    components: {},
})
export default class UserAppointmentsFilter extends Vue {
    @Mutation('utils/setPastAppoints') private setPastAppoints;

    private pastAppoints: boolean = false;

    private showPastAppoints(): void {
        this.setPastAppoints(this.pastAppoints);
    }
}
</script>

<style lang="scss" scoped>
.custom-filter {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.pb-custom {
    padding-top: 3em !important;
    padding-left: 1.5em !important;
    padding-right: 2.75em !important;
    padding-bottom: 0em !important;
}
.custom-margin-right {
    @include mobile {
        font-size: 1em;
    }
    font-size: 1.25em;
    margin-right: 0.75em;
}
</style>
