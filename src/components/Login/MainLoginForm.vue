<template>
    <form>
        <button-translation></button-translation>
        <div class="columns is-centered">
            <div class="column login-logo">
                <logo-app data-cy="login-logo"></logo-app>
            </div>
        </div>
        <div class="columns is-centered is-mobile">
            <div class="column is-6-desktop is-10-mobile is-8-tablet container">
                <p class="title">{{ $t('titles.login') }}</p>
                <b-field
                    :label="$t('components.login.email')"
                    :type="bfieldType"
                >
                    <b-input
                        v-model="email"
                        :placeholder="$t('components.login.email')"
                        size="is-medium"
                        @keyup.native.enter="checkLogin()"
                        data-cy="email"
                    >
                    </b-input>
                </b-field>

                <b-field
                    :label="$t('components.login.password')"
                    :type="bfieldType"
                >
                    <b-input
                        v-model="password"
                        :placeholder="$t('components.login.password')"
                        type="password"
                        size="is-medium"
                        class="custom-margin"
                        @keyup.native.enter="checkLogin()"
                        data-cy="password"
                        password-reveal
                    >
                    </b-input>
                </b-field>
                <div class="columns is-vcentered">
                    <div class="column is-3 is-2-fullhd">
                        <b-button
                            @click="checkLogin()"
                            :loading="isLoading"
                            outlined
                            type="is-danger"
                            size="is-medium"
                            data-cy="submit"
                        >
                            {{ $t('components.login.button') }}
                        </b-button>
                    </div>
                    <div class="column">
                        <p class="custom-size" data-cy="invitation">
                            {{ $t('components.login.noAccount') }}
                            <span
                                @click="enableRegisterProgress"
                                class="invitation-link"
                            >
                                {{ $t('components.login.accessToInvitation') }}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SnackbarProgrammatic as Snackbar } from 'buefy';

import authStore from '@/store/auth-store/AuthStore';

import LogoApp from '@/components/Navigation/LogoApp.vue';
import ButtonTranslation from '@/components/Login/ButtonTranslation.vue';
import { LoginRequest } from '@/webservices/models/auth/LoginRequest';

@Component({
    name: 'MainLoginForm',
    components: {
        LogoApp,
        ButtonTranslation,
    },
})
export default class MainLoginForm extends Vue {
    private email: string = '';
    private password: string = '';
    private isLoading: boolean = false;
    private bfieldType: string = '';

    private authStore = authStore.context(this.$store);

    private async checkLogin() {
        const validator = this.loginValidator();
        if (validator) {
            this.isLoading = true;
            try {
                const loginData: LoginRequest = {
                    email: this.email,
                    password: this.password,
                };

                this.authStore.actions.login({ loginData });

                // if (!response.data.cod || response.status === 404) {
                //     this.bfieldType = 'is-danger';
                //     this.isLoading = false;
                //     Snackbar.open({
                //         message: response.data.mensaje,
                //         type: 'is-danger',
                //         position: 'is-bottom-left',
                //         duration: 3000,
                //         actionText: 'Volver a intentar',
                //         onAction: () => {
                //             this.clearInputs();
                //         },
                //     });
                // } else {
                //     this.isLoading = false;
                //     this.saveUser(response.data.user);
                //     router.push('/inicio');
                // }
            } catch (error) {
                this.isLoading = false;
                Snackbar.open({
                    message: 'Error en la conexión',
                    type: 'is-danger',
                    position: 'is-bottom-left',
                    duration: 3000,
                    actionText: 'Volver a intentar',
                    onAction: () => {
                        this.clearInputs();
                    },
                });
                // TODO: Show Error
                // console.log(error);
            }
        }
    }

    private enableRegisterProgress(): void {
        this.authStore.actions.enableRegisterProcess();
        this.$router.push('/invitation');
    }

    private clearInputs(): void {
        this.email = '';
        this.password = '';
        this.bfieldType = '';
    }
    private loginValidator(): boolean {
        if (this.email.length === 0 || this.password.length === 0) {
            this.bfieldType = 'is-danger';
            Snackbar.open({
                message: 'Por favor introduzca la informacion requerida',
                type: 'is-danger',
                position: 'is-bottom-left',
                duration: 3000,
                actionText: 'Volver a intentar',
                onAction: () => {
                    this.clearInputs();
                },
            });
            return false;
        } else {
            return true;
        }
    }
}
</script>

<style lang="scss" scoped>
.margin-rigth {
    @include desktop {
        margin-right: 4%;
    }
}
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
    margin-bottom: 6%;
}
.login-logo {
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>
