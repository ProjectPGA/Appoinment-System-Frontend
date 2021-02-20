<template>
    <form class="main-login-form">
        <button-translation />
        <div class="columns is-centered">
            <div class="column main-login-form_logo">
                <logo-app data-cy="login-logo" />
            </div>
        </div>
        <div class="columns is-centered is-mobile">
            <div class="column is-6-desktop is-10-mobile is-8-tablet container">
                <h1 class="main-login-form_title title">
                    {{ $t('titles.login') }}
                </h1>

                <email-input
                    @input="onEmailInput"
                    @checkEmail="onCheckEmail"
                    view="login"
                />

                <password-input
                    @input="onPasswordInput"
                    @checkPassword="onCheckPassword"
                    view="login"
                />

                <div class="columns is-vcentered">
                    <div class="column is-3 is-2-fullhd">
                        <b-button
                            @click="checkLogin()"
                            outlined
                            type="is-danger"
                            size="is-medium"
                            data-cy="submit"
                            :disabled="isInvalidForm"
                        >
                            {{ $t('components.login.button') }}
                        </b-button>
                    </div>
                    <div class="column">
                        <p
                            class="main-login-form_invitation"
                            data-cy="invitation"
                        >
                            {{ $t('components.login.noAccount') }}
                            <span
                                @click="enableRegisterProgress"
                                class="main-login-form_invitation-link"
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

import authStore from '@/store/auth-store/AuthStore';

import LogoApp from '@/components/Navigation/LogoApp.vue';
import EmailInput from '@/components/Login/EmailInput.vue';
import PasswordInput from '@/components/Login/PasswordInput.vue';
import ButtonTranslation from '@/components/common/ButtonTranslation.vue';

import { LoginRequest } from '@/webservices/models/auth/LoginRequest';

@Component({
    name: 'MainLoginForm',
    components: {
        LogoApp,
        EmailInput,
        PasswordInput,
        ButtonTranslation,
    },
})
export default class MainLoginForm extends Vue {
    private authStore = authStore.context(this.$store);

    private email: string = '';
    private isEmailVaild: boolean = true;

    private password: string = '';
    private isPasswordVaild: boolean = true;

    private get isInValidform(): boolean {
        return this.email === '' && this.password === ''
            ? true
            : !this.isEmailVaild || !this.isPasswordVaild
            ? true
            : false;
    }

    private onEmailInput(email: string): void {
        this.email = email;
    }

    private onCheckEmail(isEmailVaild: boolean): void {
        this.isEmailVaild = isEmailVaild;
    }

    private onPasswordInput(password: string): void {
        this.password = password;
    }

    private onCheckPassword(isPasswordVaild: boolean): void {
        this.isPasswordVaild = isPasswordVaild;
    }

    private async checkLogin() {
        const loginData: LoginRequest = {
            email: this.email,
            password: this.password,
        };

        this.authStore.actions.login({ loginData });
    }

    private enableRegisterProgress(): void {
        this.authStore.actions.enableRegisterProcess();
        this.$router.push('/invitation');
    }
}
</script>

<style lang="scss" scoped>
.main-login-form {
    &_invitation-link {
        cursor: pointer;
        color: $main-color !important;
        &:hover {
            text-decoration-line: underline;
        }
    }

    &_title {
        font-size: calc(0.75em + 0.5vw);
        line-height: 3em !important;
    }

    &_invitation {
        font-size: 1.25em;
    }
    &_logo {
        margin-top: 50px;
        margin-bottom: 50px;
    }
}
</style>
