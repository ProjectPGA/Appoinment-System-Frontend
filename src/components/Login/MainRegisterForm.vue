<template>
    <div>
        <button-translation></button-translation>
        <div class="columns is-centered">
            <div class="column is-6"><logo-app /></div>
        </div>
        <div class="columns is-centered is-mobile">
            <div class="column is-6-desktop is-10-mobile container">
                <p class="title">{{ $t('titles.register') }}</p>
                <b-field
                    :label="$t('components.register.name')"
                    :type="bfieldType"
                >
                    <b-input
                        v-model="name"
                        :placeholder="$t('components.register.name')"
                        size="is-medium"
                        class="custom-margin"
                    >
                    </b-input>
                </b-field>
                <b-field
                    :label="$t('components.register.surname')"
                    :type="bfieldType"
                >
                    <b-input
                        v-model="apellidos"
                        :placeholder="$t('components.register.surname')"
                        size="is-medium"
                        class="custom-margin"
                    >
                    </b-input>
                </b-field>
                <b-field
                    :label="$t('components.register.email')"
                    :type="emailfieldType"
                >
                    <b-input
                        v-model="email"
                        :placeholder="$t('components.register.email')"
                        size="is-medium"
                        class="custom-margin"
                    >
                    </b-input>
                </b-field>
                <b-field
                    :label="$t('components.register.password')"
                    :type="passfieldType"
                >
                    <b-input
                        v-model="password"
                        :placeholder="$t('components.register.password')"
                        type="password"
                        size="is-medium"
                        class="custom-margin"
                        password-reveal
                    >
                    </b-input>
                </b-field>
                <b-field
                    :label="$t('components.register.repeatPassword')"
                    :type="passfieldType"
                >
                    <b-input
                        v-model="passwordRe"
                        :placeholder="$t('components.register.password')"
                        type="password"
                        size="is-medium"
                        class="custom-margin"
                        password-reveal
                        @keyup.native.enter="checRegist()"
                    >
                    </b-input>
                </b-field>
                <div class="columns is-vcentered">
                    <div class="column is-2">
                        <b-button
                            @click="checRegist()"
                            :loading="isLoading"
                            outlined
                            type="is-danger"
                            size="is-medium"
                            >{{ $t('components.register.button') }}</b-button
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
import router from '../../router';
import { Mutation } from 'vuex-class';
import { setTimeout } from 'timers';

import { AuthUser } from '@/models/auth/AuthUser';

import LogoApp from '@/components/Navigation/LogoApp.vue';
import ButtonTranslation from '@/components/Login/ButtonTranslation.vue';

@Component({
    name: 'MainRegisterForm',
    components: {
        LogoApp,
        ButtonTranslation,
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
    @Mutation('utils/setInvitationProgress') private changeinvitationProgress: (
        inv: boolean
    ) => void;

    private async checRegist() {
        if (this.password === this.passwordRe) {
            try {
                const response: AxiosResponse = await Vue.axios({
                    method: 'POST',
                    url: '/mailcheck',
                    data: {
                        email: this.email,
                    },
                });
                if (!response.data.cod) {
                    this.emailfieldType = 'is-success';
                    this.Regist();
                } else {
                    Snackbar.open({
                        message: `${this.$t('snackbar.existEmail')}`,
                        type: 'is-danger',
                        position: 'is-bottom-left',
                        indefinite: true,
                        actionText: `${this.$t('snackbar.try')}`,
                        onAction: () => {
                            this.clearInputs();
                        },
                    });
                    this.emailfieldType = 'is-danger';
                }
            } catch (error) {
                // TODO: Show Error
                // console.log(error);
            }
        } else {
            this.passfieldType = 'is-danger';
            Snackbar.open({
                message: `${this.$t('snackbar.notLikePassword')}`,
                type: 'is-danger',
                position: 'is-bottom-left',
                indefinite: true,
                actionText: `${this.$t('snackbar.try')}`,
                onAction: () => {
                    this.clearPassInputs();
                },
            });
        }
    }
    private async Regist() {
        this.isLoading = true;
        try {
            const response: AxiosResponse = await Vue.axios({
                method: 'POST',
                url: '/users',
                data: {
                    id: Date.now(),
                    email: this.email,
                    password: this.password,
                    name: this.name + ' ' + this.apellidos,
                    admin: false,
                },
            });

            if (response.status === 201) {
                this.isLoading = false;
                const user = {
                    id: response.data.id,
                    email: response.data.email,
                    name: response.data.name,
                    admin: response.data.admin,
                };
                this.saveUser(user);
                this.changeinvitationProgress(false);
                router.push('/inicio');
            } else {
                this.bfieldType = 'is-danger';
                this.emailfieldType = 'is-danger';
                this.passfieldType = 'is-danger';
                this.isLoading = false;
                Snackbar.open({
                    message: 'Error en el registro',
                    type: 'is-danger',
                    position: 'is-bottom-left',
                    indefinite: true,
                    actionText: 'Volver a intentar',
                    onAction: () => {
                        this.clearInputs();
                    },
                });
            }
        } catch (error) {
            // TODO: Show Error
            // console.log(error);
        }
    }

    private clearInputs() {
        this.email = '';
        this.password = '';
        this.passwordRe = '';
        this.bfieldType = '';
        this.emailfieldType = '';
        this.passfieldType = '';
    }
    private clearPassInputs() {
        this.passwordRe = '';
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
