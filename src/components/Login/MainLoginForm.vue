<template>
    <form>
        <button-translation />
        <div class="columns is-centered">
            <div class="column login-logo">
                <logo-app data-cy="login-logo" />
            </div>
        </div>
        <div class="columns is-centered is-mobile">
            <div class="column is-6-desktop is-10-mobile is-8-tablet container">
                <p class="title">{{ $t('titles.login') }}</p>

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
                            :loading="isLoading"
                            outlined
                            type="is-danger"
                            size="is-medium"
                            data-cy="submit"
                            :disabled="isInValidform"
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

    private isLoading: boolean = false;

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
.margin-rigth {
    @include desktop {
        margin-right: 4%;
    }
}
.invitation-link {
    color: $main-color !important;
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
    color: $main-color-dark;
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
