<template>
    <div>
        <button-translation></button-translation>
        <div class="columns is-centered">
            <div class="column is-6"><logo-app /></div>
        </div>
        <!-- TODO. Default error messages need to be translated -->
        <div class="columns is-centered is-mobile">
            <div class="column is-6-desktop is-10-mobile container">
                <p class="title">{{ $t('titles.register') }}</p>
                <b-field :label="$t('components.register.name')">
                    <b-input
                        v-model="name"
                        :placeholder="$t('components.register.name')"
                        size="is-medium"
                        class="custom-margin"
                        required
                    >
                    </b-input>
                </b-field>
                <b-field :label="$t('components.register.surname')">
                    <b-input
                        v-model="surname"
                        :placeholder="$t('components.register.surname')"
                        size="is-medium"
                        class="custom-margin"
                        required
                    >
                    </b-input>
                </b-field>
                <b-field :label="$t('components.register.email')">
                    <b-input
                        v-model="email"
                        :placeholder="$t('components.register.email')"
                        size="is-medium"
                        class="custom-margin"
                        type="email"
                        required
                    >
                    </b-input>
                </b-field>
                <b-field
                    :label="$t('components.register.repeatPassword')"
                    :message="isNotRequiredLength"
                    :type="{
                        'is-danger': isNotRequiredLength || isPasswordEmpty,
                    }"
                >
                    <b-input
                        v-model="password"
                        :placeholder="$t('components.register.password')"
                        type="password"
                        size="is-medium"
                        class="custom-margin"
                        required
                        password-reveal
                        @blur="checkPasswordEmpty"
                    >
                    </b-input>
                </b-field>
                <b-field
                    :label="$t('components.register.repeatPassword')"
                    :message="isNotSamePassword"
                    :type="{
                        'is-danger': isNotSamePassword || isRepeatPasswordEmpty,
                    }"
                >
                    <b-input
                        v-model="passwordRepeat"
                        :placeholder="$t('components.register.password')"
                        type="password"
                        size="is-medium"
                        class="custom-margin"
                        required
                        password-reveal
                        @blur="checkRepeatPasswordEmpty"
                        @keyup.native.enter="doRegister()"
                    >
                    </b-input>
                </b-field>
                <div class="columns is-vcentered">
                    <div class="column is-2">
                        <b-button
                            @click="doRegister()"
                            :loading="isRegisterLoading"
                            outlined
                            type="is-danger"
                            size="is-medium"
                            :disabled="areFieldsEmpty"
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

import authStore from '@/store/auth-store/AuthStore';

import LogoApp from '@/components/Navigation/LogoApp.vue';
import ButtonTranslation from '@/components/Login/ButtonTranslation.vue';
import { RegisterRequest } from '@/webservices/models/auth/RegisterRequest';
import { UserRoles } from '@/models/user/UserData';

@Component({
    name: 'MainRegisterForm',
    components: {
        LogoApp,
        ButtonTranslation,
    },
})
export default class MainRegisterForm extends Vue {
    private authStore = authStore.context(this.$store);

    private name: string = '';
    private surname: string = '';
    private email: string = '';
    private password: string = '';
    private isPasswordEmpty: boolean = false;
    private isRepeatPasswordEmpty: boolean = false;
    private passwordRepeat: string = '';

    private doRegister(): void {
        const userRequest: RegisterRequest = {
            user: {
                email: this.email,
                name: this.name,
                surname: this.surname,
                roles: [UserRoles.COMMON_USER],
                password: this.password,
            },
        };

        this.register(userRequest);
    }

    private clearPassInputs(): void {
        this.password = '';
        this.passwordRepeat = '';
    }

    private async checkIfMailAlreadyExist(email: string): Promise<void> {
        await this.authStore.actions.checkIfMailAlreadyExist(email);
    }

    private setRegisterInProgress(): void {
        this.authStore.actions.setRegisterInProgress();
    }

    private unsetRegisterInProgress(): void {
        this.authStore.actions.unsetRegisterInProgress();
    }

    private register(registerRequest: RegisterRequest): void {
        this.authStore.actions.register({ registerData: registerRequest });
    }

    private checkPasswordEmpty(): void {
        this.password === ''
            ? (this.isPasswordEmpty = true)
            : (this.isPasswordEmpty = false);
    }
    private checkRepeatPasswordEmpty(): void {
        this.passwordRepeat === ''
            ? (this.isRepeatPasswordEmpty = true)
            : (this.isRepeatPasswordEmpty = false);
    }

    private get isPasswordValid(): boolean {
        return this.isNotSamePassword === null &&
            this.isNotRequiredLength === null
            ? true
            : false;
    }

    private get isNotSamePassword(): string | null {
        return this.password === this.passwordRepeat
            ? null
            : `${this.$t('components.register.notSamePassword')}`;
    }
    private get isNotRequiredLength(): string | null {
        return this.password.length >= 8 || this.password.length === 0
            ? null
            : `${this.$t('components.register.notPasswordLength')}`;
    }

    private get isRegisterLoading(): boolean {
        return this.authStore.state.isLoading;
    }

    private get areFieldsEmpty(): boolean {
        return this.name === '' ||
            this.surname === '' ||
            this.email === '' ||
            this.password === '' ||
            this.passwordRepeat === '' ||
            !this.isPasswordValid
            ? true
            : false;
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
