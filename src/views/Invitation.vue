<template>
    <div>
        <div class="columns is-centered">
            <div class="column is-6">
                <logo-app />
            </div>
        </div>
        <div class="columns is-centered is-mobile">
            <div class="column is-6 container has-text-centered">
                <h1 class="title is-size-2">
                    Intoduce tu codigo de invitación
                </h1>
                <b-panel content-position="center">
                    <b-field type="" message="">
                        <b-input
                            class="custom-invitation-input"
                            size="is-medium"
                            placeholder="Ejemplo: TX23DF2"
                            custom-class
                        >
                        </b-input>
                    </b-field>
                </b-panel>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LogoApp from '@/components/Navigation/LogoApp.vue';

@Component({
    name: 'Invitation',
    components: {
        LogoApp,
    },
})
export default class Invitation extends Vue {}
</script>
<style lang="scss" scoped>
.custom-invitation-input {
    // width: 50%;
}
.title {
    font-family: 'Campesina';
}
</style>
