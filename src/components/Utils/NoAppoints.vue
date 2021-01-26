<template>
    <div>
        <div class="column is-12" v-if="citas.length === 0">
            <section class="hero is-danger">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">{{ $('components.utils.noAppointsTitle') }}</h1>
                        <h2 class="subtitle">
                            <router-link to="/inicio"
                                >{{ $('components.utils.noAppointsSubtitle') }}</router-link
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

import { Appointment } from '@/models/appointment/Appointment';

@Component({
    name: 'NoAppoints',
})
export default class NoAppoints extends Vue {
    @Prop() private citas: Appointment[];
}
</script>

<style lang="scss" scoped></style>
