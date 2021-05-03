<template>
    <div class="repeat-password-input">
        <password-input
            @input="onPasswordInput"
            @checkPassword="onCheckPassword"
            :view="view"
        />
        <p class="repeat-password-input_password-requeriments">
            {{ $t('components.loginInputs.passwordRequirements') }}
        </p>
        <b-field
            :label="$t('components.loginInputs.repeatPassword')"
            :message="errorMessage"
            :type="{
                'is-danger': !isValid,
            }"
        >
            <b-input
                v-model="repeatPassword"
                :placeholder="$t('components.loginInputs.password')"
                size="is-medium"
                :data-cy="`${view}-input-repeat-password`"
                type="password"
                password-reveal
                required
                @blur="checkRepeatPassword"
                @input="onInputRepeatPassword"
                class="repeat-password-input_password-input"
            />
        </b-field>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

import PasswordInput from '@/components/Login/PasswordInput.vue';

@Component({
    name: 'RepeatPasswordInput',
    components: {
        PasswordInput,
    },
})
export default class RepeatPasswordInput extends Vue {
    @Prop(String) private view: string;

    private mainStore = mainStore.context(this.$store);

    private password: string = '';
    private isValid: boolean = true;
    private errorMessage: string = '';
    private repeatPassword: string = '';

    private onInputRepeatPassword(): void {
        this.$emit('inputRepeatPassword', this.repeatPassword);

        this.checkRepeatPassword();
    }

    private checkRepeatPassword(): void {
        this.repeatPassword === ''
            ? this.inputEmpty()
            : !this.repeatPassword.match(
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
              )
            ? this.inputPasswordInvalid()
            : this.repeatPassword === this.password
            ? this.inputRepeatPasswordValid()
            : this.inputRepeatPasswordInvalid();

        this.$emit('checkRepeatPassword', this.isValid);
    }

    private inputEmpty(): void {
        this.errorMessage = `${this.$t('components.loginInputs.inputEmpty')}`;
        this.isValid = false;
    }

    private inputPasswordInvalid(): void {
        this.errorMessage = `${this.$t(
            'components.loginInputs.passwordInvalid'
        )}`;
        this.isValid = false;
    }

    private inputRepeatPasswordInvalid(): void {
        this.errorMessage = `${this.$t(
            'components.loginInputs.notSamePassword'
        )}`;
        this.isValid = false;
    }

    private inputRepeatPasswordValid(): void {
        this.errorMessage = '';
        this.isValid = true;
    }

    private onPasswordInput(password: string): void {
        this.password = password;

        this.$emit('inputPassword', password);
    }

    private onCheckPassword(isPasswordValid: boolean): void {
        this.$emit('checkPassword', isPasswordValid);
    }

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    @Watch('password')
    private onChangePassword(): void {
        this.checkRepeatPassword();
    }

    @Watch('currentLanguage')
    private onChangeLanguage(): void {
        this.checkRepeatPassword();
    }
}
</script>

<style lang="scss" scoped>
.repeat-password-input {
    &_password-requeriments {
        font-size: 0.75em;
        color: $main-color-dark;
        margin-bottom: 0.62em;
        font-weight: 700;
    }
    &_password-input {
        /deep/.icon {
            color: $main-color-medium-light !important;
        }
    }
}
</style>
