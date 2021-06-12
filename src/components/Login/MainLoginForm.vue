<template>
  <form class="main-login-form" data-cy="login-view">
    <button-translation />
    <div class="columns is-centered">
      <div class="column main-login-form_logo">
        <logo-app />
      </div>
    </div>
    <div class="columns is-centered is-mobile">
      <div class="column is-6-desktop is-10-mobile is-8-tablet container">
        <h1 class="main-login-form_title title" data-cy="login-title">
          {{ $t('titles.login') }}
        </h1>

        <email-input
          @input="onEmailInput"
          @check-email="onCheckEmail"
          @enter="onEnter"
          view="login"
        />

        <password-input
          @input="onPasswordInput"
          @check-password="onCheckPassword"
          @enter="onEnter"
          view="login"
        />

        <div class="columns is-vcentered main-login-form_button-section">
          <div class="column is-3 is-2-fullhd">
            <b-button
              @click="checkLogin()"
              outlined
              type="is-danger"
              size="is-medium"
              data-cy="login-submit-button"
              :disabled="isInvalidForm"
            >
              {{ $t('components.login.button') }}
            </b-button>
          </div>
          <div class="column">
            <p class="main-login-form_invitation">
              {{ $t('components.login.noAccount') }}
              <span
                @click="enableRegisterProgress"
                class="main-login-form_invitation-link"
                data-cy="login-invitation-link"
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
  private isEmailValid: boolean = true;

  private password: string = '';
  private isPasswordValid: boolean = true;

  private get isInvalidForm(): boolean {
    return this.email === '' && this.password === ''
      ? true
      : !this.isEmailValid || !this.isPasswordValid
      ? true
      : false;
  }

  private onEnter(): void {
    if (!this.isInvalidForm) {
      this.checkLogin();
    }
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
  &_button-section {
    padding-top: 2.25rem;
  }

  &_invitation-link {
    cursor: pointer;
    color: $main-color !important;
    &:hover {
      text-decoration-line: underline;
    }
  }

  &_invitation {
    font-size: 1.25em;
  }
  &_logo {
    margin-top: 3.12rem;
    margin-bottom: 3.12rem;
  }
}
</style>
