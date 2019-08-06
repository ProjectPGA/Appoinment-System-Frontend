<template>
    <div>
        <div class="columns is-multiline">
            <div class="column is-12">
                <logo-app/>
            </div>
            <div class="column is-12">
                <p class="title-contact">Contacto</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LogoApp from '@/components/Navigation/LogoApp.vue';

@Component({
    name: 'ContactData',
    components: {
        LogoApp,
    },
})
export default class ContactData extends Vue {}
</script>

<style lang="scss" scoped>
.title-contact{
font-family: 'Campesina';
}
</style>
