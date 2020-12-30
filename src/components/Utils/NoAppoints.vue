<template>
    <div>
        <div class="column is-12" v-if="citas.length === 0">
            <section class="hero is-danger">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">Ninguna cita Asignada</h1>
                        <h2 class="subtitle">
                            <router-link to="/inicio"
                                >Puedes asignarte una cita pulsando
                                aquí</router-link
                            >
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { Appointment } from '@/models/appointment/Appointment';

@Component({
    name: 'NoAppoints',
})
export default class NoAppoints extends Vue {
    @Prop() private citas: Appointment[];
}
</script>

<style lang="scss" scoped></style>
