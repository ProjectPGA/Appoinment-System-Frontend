<template>
    <div>
        <div class="columns is-multiline">
            <div class="column is-12"><logo-app /></div>
            <div class="column is-12">
                <titles-app title="Contacto" />
                <ul class="info-contact">
                    <li>
                        <ol class="title-info-contact">
                            Horarios:
                        </ol>
                        <ol>
                            Lunes a viernes: 10:00-14:00 / 17:00-21:00
                        </ol>
                        <ol>
                            Sabado: 10:00-14:00
                        </ol>
                    </li>
                    <li>
                        <ol class="title-info-contact">
                            Teléfono:
                        </ol>
                        <ol>
                            +34 679839952
                        </ol>
                    </li>
                    <li>
                        <ol class="title-info-contact">
                            Dirección:
                        </ol>
                        <ol>
                            Av. Blas Infante, 105, 29120
                        </ol>
                        <ol>
                            Alhaurín el Grande, Málaga
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LogoApp from '@/components/Navigation/LogoApp.vue';
import TitlesApp from '@/components/Home/TitlesApp.vue';

@Component({
    name: 'ContactData',
    components: {
        LogoApp,
        TitlesApp,
    },
})
export default class ContactData extends Vue {}
</script>

<style lang="scss" scoped>
.title-contact {
    font-family: 'Campesina';
    text-align: center;
    font-size: 3em;
}
.info-contact {
    text-align: center;
}
.title-info-contact {
    font-size: 1.5em;
}
</style>
