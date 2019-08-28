<template>
    <div>
        <div class="columns is-centered">
            <div class="column is-6"><logo-app /></div>
        </div>
        <div class="columns is-centered is-mobile">
            <div class="column is-6-desktop is-10-mobile container ">
                <p class="title">{{ $t('titles.login') }}</p>
                <b-field
                    :label="$i18n.t('components.login.email')"
                    class=""
                    :type="bfieldType"
                >
                    <b-input
                        v-model="email"
                        :placeholder="$i18n.t('components.login.email')"
                        value=""
                        size="is-medium"
                        @keyup.native.enter="checkLogin()"
                        class=""
                    >
                    </b-input>
                </b-field>

                <b-field
                    :label="$i18n.t('components.login.password')"
                    class=""
                    :type="bfieldType"
                >
                    <b-input
                        v-model="password"
                        :placeholder="$i18n.t('components.login.password')"
                        type="password"
                        value=""
                        size="is-medium"
                        class="custom-margin"
                        @keyup.native.enter="checkLogin()"
                        password-reveal
                    >
                    </b-input>
                </b-field>
                <div class="columns is-vcentered">
                    <div class="column is-2">
                        <b-button
                            @click="checkLogin()"
                            :loading="isLoading"
                            outlined
                            type="is-danger"
                            size="is-medium"
                            >{{ $t('components.login.button') }}</b-button
                        >
                    </div>
                    <div class="column ">
                        <p class="custom-size">
                            {{ $t('components.login.noAccount') }}
                            <router-link
                                class="invitation-link"
                                to="/invitation"
                            >
                                {{ $t('components.login.accessToInvitation') }}
                            </router-link>
                        </p>
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
import { router } from '@/router';

@Component({
    name: 'MainLoginForm',
    components: {
        LogoApp,
    },
})
export default class MainLoginForm extends Vue {
    private email: string = '';
    private password: string = '';
    private isLoading: boolean = false;
    private bfieldType: string = '';

    @Mutation('auth/setUser') private saveUser: (user: AuthUser) => void;

    private async checkLogin() {
        const validator = this.loginValidator();
        if (validator) {
            this.isLoading = true;
            try {
                const response: AxiosResponse = await Vue.axios({
                    method: 'POST',
                    url: '/login',
                    data: { email: this.email, password: this.password },
                });

                if (!response.data.cod || response.status === 404) {
                    this.bfieldType = 'is-danger';
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
                this.isLoading = false;
                Snackbar.open({
                    message: 'Error en la conexión',
                    type: 'is-danger',
                    position: 'is-bottom-left',
                    indefinite: true,
                    actionText: 'Volver a intentar',
                    onAction: () => {
                        this.clearInputs();
                    },
                });
                console.log(error);
            }
        }
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
                indefinite: true,
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
</style>
