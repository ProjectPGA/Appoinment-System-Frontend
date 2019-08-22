<template>
    <div>
        <div class="columns is-centered">
            <div class="column is-6"><logo-app /></div>
        </div>
        <div class="columns is-centered is-mobile">
            <div class="column is-6-desktop is-10-mobile container ">
                <p class="title">Registro</p>
                <b-field label="Nombre" class="" :type="bfieldType">
                    <b-input
                        v-model="name"
                        placeholder="Nombre"
                        value=""
                        size="is-medium"
                        class="custom-margin"
                        @keyup.native.enter="checkRegist()"
                    >
                    </b-input>
                </b-field>

                <b-field label="Apellidos" class="" :type="bfieldType">
                    <b-input
                        v-model="apellidos"
                        placeholder="Apellidos"
                        value=""
                        size="is-medium"
                        class="custom-margin"
                    >
                    </b-input>
                </b-field>
                <b-field label="Email" class="" :type="emailfieldType">
                    <b-input
                        v-model="email"
                        placeholder="Email"
                        type=""
                        value=""
                        size="is-medium"
                        class="custom-margin"
                        :onkeypress="checkEmail()"
                    >
                    </b-input>
                </b-field>
                <b-field label="Contraseña" class="" :type="passfieldType">
                    <b-input
                        v-model="password"
                        placeholder="Contraseña"
                        type="password"
                        value=""
                        size="is-medium"
                        class="custom-margin"
                        @keyup.native.enter="checkRegist()"
                        password-reveal
                    >
                    </b-input>
                </b-field>
                <b-field
                    label="Repetir Contraseña"
                    class=""
                    :type="passfieldType"
                >
                    <b-input
                        v-model="passwordRe"
                        placeholder="Contraseña"
                        type="password"
                        value=""
                        size="is-medium"
                        class="custom-margin"
                        @keyup.native.enter="checkRegist()"
                        password-reveal
                    >
                    </b-input>
                </b-field>
                <div class="columns is-vcentered">
                    <div class="column is-2">
                        <b-button
                            @click="checkRegist()"
                            :loading="isLoading"
                            outlined
                            type="is-danger"
                            size="is-medium"
                            >Registrar</b-button
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SnackbarProgrammatic as Snackbar } from 'buefy';
import Axios, { AxiosResponse } from 'axios';
import { Mutation } from 'vuex-class';
import { AuthUser } from '@/models/auth/AuthUser';
import LogoApp from '@/components/Navigation/LogoApp.vue';
import { router } from '../../router';

@Component({
    name: 'MainRegisterForm',
    components: {
        LogoApp,
    },
})
export default class MainRegisterForm extends Vue {
    private email: string = '';
    private name: string = '';
    private password: string = '';
    private emailRe: string = '';
    private apellidos: string = '';
    private passwordRe: string = '';
    private isLoading: boolean = false;
    private bfieldType: string = '';
    private emailfieldType: string = '';
    private passfieldType: string = '';

    @Mutation('auth/setUser') private saveUser: (user: AuthUser) => void;

    private async checkEmail() {
        try {
            console.log('MailCheck');
            const response: AxiosResponse = await Vue.axios({
                method: 'POST',
                url: '/mailcheck',
                data: {
                    email: this.email,
                },
            });
            console.log(response.data.cod)
            if (!response.data.cod) {
                this.emailfieldType = 'is-success';
            } else {
                this.emailfieldType = 'is-danger';
            }
        } catch (error) {
            console.log(error);
        }
    }
    private async checkRegist() {
        this.isLoading = true;
        try {
            const response: AxiosResponse = await Vue.axios({
                method: 'POST',
                url: '/register',
                data: {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                },
            });

            if (!response.data.cod) {
                this.bfieldType = 'is-danger';
                this.emailfieldType = 'is-danger';
                this.passfieldType = 'is-danger';
                this.isLoading = false;
                Snackbar.open({
                    message: response.data.mensaje,
                    type: 'is-danger',
                    position: 'is-bottom-left',
                    indefinite: true,
                    actionText: 'Volver a intentar',
                    onAction: () => {
                        this.clearInputs();
                    },
                });
            } else {
                this.isLoading = false;
                this.saveUser(response.data.user);
                router.push('/inicio');
            }
        } catch (error) {
            console.log(error);
        }
    }

    private clearInputs() {
        this.email = '';
        this.password = '';
        this.bfieldType = '';
        this.emailfieldType = '';
        this.passfieldType = '';
    }
}
</script>

<style lang="scss" scoped>
.invitation-link {
    color: #e01f2f !important;
}
.custom-size {
    font-size: 1.25em;
}
.title {
    font-family: 'CabbageTown';
    @include mobile {
        font-size: calc(0.75em + 0.5vw);
    }
    font-size: calc(0.5em + 0.5vw);
    line-height: 3em !important;
}
.custom-login-input {
    width: 50%;
    @include mobile {
        width: 85%;
    }
}
.centered-content {
    display: flex !important;
    justify-content: center !important;
}
.custom-margin {
    margin-bottom: 4%;
}
</style>
