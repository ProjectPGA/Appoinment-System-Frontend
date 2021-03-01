<template>
    <div class="main-register-form">
        <button-translation />
        <div class="columns is-centered">
            <div class="column is-12"><logo-app /></div>
        </div>
        <div class="columns is-centered is-mobile">
            <div class="column is-6-desktop is-10-mobile container">
                <h1 class="main-register-form_title title">
                    {{ $t('titles.register') }}
                </h1>
                <b-field :label="$t('components.register.name')">
                    <b-input
                        v-model="name"
                        :placeholder="$t('components.register.name')"
                        size="is-medium"
                    >
                    </b-input>
                </b-field>

                <b-field :label="$t('components.register.surname')">
                    <b-input
                        v-model="surname"
                        :placeholder="$t('components.register.surname')"
                        size="is-medium"
                    >
                    </b-input>
                </b-field>

                <email-input
                    @input="onEmailInput"
                    @checkEmail="onCheckEmail"
                    view="register"
                />

                <repeat-password-input
                    @inputPassword="onPasswordInput"
                    @checkPassword="onCheckPassword"
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
import { Component, Vue } from 'vue-property-decorator';

import authStore from '@/store/auth-store/AuthStore';

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

    private name: string = '';
    private surname: string = '';

    private email: string = '';
    private isEmailValid: boolean = true;

    private password: string = '';
    private isPasswordValid: boolean = true;

    private repeatPassword: string = '';
    private isRepeatPasswordValid: boolean = true;

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
            this.isRepeatPasswordValid
        );
    }
}
</script>

<style lang="scss" scoped>
.main-register-form {
    &_title {
        font-size: calc(0.5em + 0.5vw);
        line-height: 3em !important;
        @include mobile {
            font-size: calc(0.75em + 0.5vw);
        }
    }

    &_button {
        margin-top: 15px;
    }
}
</style>
