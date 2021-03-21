<template>
    <div class="main-register-form">
        <button-translation />
        <div class="columns is-centered">
            <div class="column is-12"><logo-app /></div>
        </div>
        <div class="columns is-centered is-mobile">
            <div class="column is-6-desktop is-10-mobile is-8-tablet container">
                <h1 class="main-register-form_title title">
                    {{ $t('titles.register') }}
                </h1>
                <b-field
                    :label="$t('components.register.name')"
                    :message="errorNameMessage"
                    :type="{
                        'is-danger': !isNameValid,
                    }"
                >
                    <b-input
                        v-model="name"
                        :placeholder="$t('components.register.name')"
                        size="is-medium"
                        required
                        @blur="checkName"
                        @input="checkName"
                    >
                    </b-input>
                </b-field>

                <b-field
                    :label="$t('components.register.surname')"
                    :message="errorSurnameMessage"
                    :type="{
                        'is-danger': !isSurnameValid,
                    }"
                >
                    <b-input
                        v-model="surname"
                        :placeholder="$t('components.register.surname')"
                        size="is-medium"
                        required
                        @blur="checkSurname"
                        @input="checkSurname"
                    >
                    </b-input>
                </b-field>

                <email-input
                    @input="onEmailInput"
                    @check-email="onCheckEmail"
                    view="register"
                />

                <repeat-password-input
                    @inputPassword="onPasswordInput"
                    @check-password="onCheckPassword"
                    @inputRepeatPassword="onRepeatPasswordInput"
                    @checkRepeatPassword="onCheckRepeatPassword"
                    view="register"
                />

                <div class="main-register-form_button columns is-vcentered">
                    <div class="column is-2">
                        <b-button
                            @click="register()"
                            outlined
                            type="is-danger"
                            size="is-medium"
                            :disabled="!isValidForm"
                        >
                            {{ $t('components.register.button') }}
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import authStore from '@/store/auth-store/AuthStore';
import mainStore from '@/store/main-store/MainStore';

import LogoApp from '@/components/Navigation/LogoApp.vue';
import EmailInput from '@/components/Login/EmailInput.vue';
import ButtonTranslation from '@/components/common/ButtonTranslation.vue';
import RepeatPasswordInput from '@/components/Login/RepeatPasswordInput.vue';

import { RegisterRequest } from '@/webservices/models/auth/RegisterRequest';
import { UserRoles } from '@/models/user/UserData';

@Component({
    name: 'MainRegisterForm',
    components: {
        LogoApp,
        EmailInput,
        ButtonTranslation,
        RepeatPasswordInput,
    },
})
export default class MainRegisterForm extends Vue {
    private authStore = authStore.context(this.$store);
    private mainStore = mainStore.context(this.$store);

    private name: string = '';
    private surname: string = '';

    private email: string = '';
    private isEmailValid: boolean = true;

    private password: string = '';
    private isPasswordValid: boolean = true;

    private repeatPassword: string = '';
    private isRepeatPasswordValid: boolean = true;

    private errorNameMessage: string = '';
    private isNameValid: boolean = true;

    private errorSurnameMessage: string = '';
    private isSurnameValid: boolean = true;

    private register(): void {
        const registerData: RegisterRequest = {
            user: {
                email: this.email,
                name: this.name,
                surname: this.surname,
                roles: [UserRoles.COMMON_USER],
                password: this.password,
            },
        };

        this.authStore.actions.register({ registerData });
    }

    private checkName(): void {
        this.name.length > 0
            ? (this.isNameValid = true)
            : (this.isNameValid = false);

        this.name.length > 0
            ? (this.errorNameMessage = '')
            : (this.errorNameMessage = `${this.$t(
                  'components.loginInputs.inputEmpty'
              )}`);
    }

    private checkSurname(): void {
        this.surname.length > 0
            ? (this.isSurnameValid = true)
            : (this.isSurnameValid = false);

        this.surname.length > 0
            ? (this.errorSurnameMessage = '')
            : (this.errorSurnameMessage = `${this.$t(
                  'components.loginInputs.inputEmpty'
              )}`);
    }

    private onEmailInput(email: string): void {
        this.email = email;
    }

    private onCheckEmail(isEmailValid: boolean): void {
        this.isEmailValid = isEmailValid;
    }

    private onPasswordInput(password: string): void {
        this.password = password;
    }

    private onCheckPassword(isPasswordValid: boolean): void {
        this.isPasswordValid = isPasswordValid;
    }

    private onRepeatPasswordInput(password: string): void {
        this.repeatPassword = password;
    }

    private onCheckRepeatPassword(isPasswordValid: boolean): void {
        this.isRepeatPasswordValid = isPasswordValid;
    }

    private get isValidForm(): boolean {
        return (
            this.isEmailValid &&
            this.isPasswordValid &&
            this.isRepeatPasswordValid &&
            this.isNameValid &&
            this.isSurnameValid &&
            this.name.length > 0 &&
            this.email.length > 0 &&
            this.password.length > 0 &&
            this.repeatPassword.length > 0 &&
            this.surname.length > 0
        );
    }

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    @Watch('currentLanguage')
    private onChangeLanguage(): void {
        this.checkName();
        this.checkSurname();
    }
}
</script>

<style lang="scss" scoped>
.main-register-form {
    &_button {
        margin-top: 15px;
    }
}
</style>
