<template>
    <div>
        <password-input
            @input="onPasswordInput"
            @checkPassword="onCheckPassword"
            :view="view"
        />
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
                class="password-input"
            />
        </b-field>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import PasswordInput from '@/components/Login/PasswordInput.vue';

@Component({
    name: 'RepeatPasswordInput',
    components: {
        PasswordInput,
    },
})
export default class RepeatPasswordInput extends Vue {
    @Prop(String) private view: string;

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
            : this.repeatPassword.length <= 8
            ? this.inputPasswordIncomplete()
            : this.repeatPassword === this.password
            ? this.inputRepeatPasswordValid()
            : this.inputRepeatPasswordInvalid();

        this.$emit('checkRepeatPassword', this.isValid);
    }

    private inputEmpty(): void {
        this.errorMessage = `${this.$t('components.loginInputs.inputEmpty')}`;
        this.isValid = false;
    }

    private inputPasswordIncomplete(): void {
        this.errorMessage = `${this.$t(
            'components.loginInputs.passwordIncomplete'
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

    private onCheckPassword(isPasswordVaild: boolean): void {
        this.$emit('checkPassword', isPasswordVaild);
    }
}
</script>

<style lang="scss" scoped>
.password-input {
    /deep/.icon {
        color: $main-color-medium-light !important;
    }
}
</style>
