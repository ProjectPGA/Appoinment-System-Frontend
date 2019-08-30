<template>
    <div>
        <div class="columns">
            <div class="column pb-custom">
                <div class="custom-filter">
                    <b-switch
                        type="is-danger"
                        class="subtitle"
                        v-model="pastAppoints"
                        @input="showPastAppoints()"
                    >
                        Mostrar citas pasadas</b-switch
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'UserAppointmentsFilter',
    components: {},
})
export default class UserAppointmentsFilter extends Vue {
    private pastAppoints: boolean = false;

    private showPastAppoints(): void {
        if (this.pastAppoints) {
            // test
        }
    }
}
</script>

<style lang="scss" scoped>
.custom-filter {
    display: flex;
    flex-direction: row-reverse;
}
.subtitle {
    @include mobile {
        font-size: 1em;
    }
}
.pb-custom {
    padding-top: 3em !important;
    padding-left: 1.5em !important;
    padding-right: 2.75em !important;
    padding-bottom: 0em !important;
}
</style>
