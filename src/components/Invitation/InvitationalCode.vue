<template>
    <div>
        <div class="columns is-centered">
            <div class="column is-6"><logo-app /></div>
        </div>
        <div class="columns is-centered is-mobile">
            <div
                class="column is-8-desktop is-10-mobile container has-text-centered"
            >
                <p class="title">Introduce tu codigo de invitacion</p>
                <b-field
                    label=""
                    :type="bfieldType"
                    :message="errorMessage"
                    class="centered-content"
                >
                    <b-input
                        v-model="code"
                        class="custom-invitation-input"
                        size="is-medium is-uppercase"
                        placeholder="Ej. TX23DF2"
                        @keyup.native.enter="check()"
                    >
                    </b-input>
                    <p class="control">
                        <b-button
                            @click="check()"
                            class="button is-success"
                            size="is-medium"
                            >Validar</b-button
                        >
                    </p>
                </b-field>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LogoApp from '@/components/Navigation/LogoApp.vue';
import { Action } from 'vuex-class';
import { AxiosResponse } from 'axios';
import { InvCode } from '@/models/utils/Code';
import { SnackbarProgrammatic as Snackbar } from 'buefy';
import { router } from '../../router';

@Component({
    name: 'InvitationalCode',
    components: {
        LogoApp,
    },
})
export default class InvitationalCode extends Vue {
    private code: string = '';
    private errorMessage: string = '';
    private bfieldType: string = '';
    private codeObj: InvCode = { code: '' };

    private async check() {
        try {
            const response: AxiosResponse = await Vue.axios({
                method: 'POST',
                url: '/code',
                data: this.codeObj = { code: this.code },
            });

            if (!response.data.cod) {
                this.bfieldType = 'is-danger';
                Snackbar.open({
                    message: response.data.mensaje + '. Intentelo de nuevo.',
                    type: 'is-danger',
                    position: 'is-bottom-left',
                    duration: 5000,
                    actionText: 'LIMPIAR',
                    onAction: () => {
                        this.clear();
                    },
                });
            } else {
                router.push('/registro');
            }
        } catch (error) {
            console.log('Error en el checkeo del codigo invitacional');
        }
    }
    private clear() {
        this.errorMessage = '';
        this.code = '';
        this.bfieldType = '';
    }
}
</script>
<style lang="scss" scoped>
.title {
    font-family: 'CabbageTown';
    font-size: calc(0.25em + 0.5vw);
    line-height: 3em !important;
}
.custom-invitation-input {
    width: 50%;
    @include mobile {
        width: 85%;
    }
}
.centered-content {
    display: flex !important;
    justify-content: center !important;
}
.button.is-success {
    background-color: #e01f2f !important;
}
</style>
