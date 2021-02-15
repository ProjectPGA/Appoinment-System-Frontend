<template>
    <b-field
        :label="$t('components.loginInputs.password')"
        :message="errorMessage"
        :type="{
            'is-danger': !isVaild,
        }"
    >
        <b-input
            v-model="password"
            :placeholder="$t('components.loginInputs.password')"
            size="is-medium"
            :data-cy="`${view}-password`"
            type="password"
            password-reveal
            required
            @blur="checkPassword"
            @input="onInput"
        />
    </b-field>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'PasswordInput',
})
export default class PasswordInput extends Vue {
    @Prop(String) private view: string;

    private password: string = '';
    private isVaild: boolean = true;
    private errorMessage: string = '';

    private onInput(): void {
        this.$emit('input', this.password);
        this.checkPassword();
    }

    private checkPassword(): void {
        this.password === ''
            ? this.inputEmpty()
            : this.password.length >= 8
            ? this.inputValid()
            : this.inputPasswordInvalid();

        this.$emit('checkPassword', this.isVaild);
    }

    private inputEmpty(): void {
        this.errorMessage = `${this.$t('components.loginInputs.inputEmpty')}`;
        this.isVaild = false;
    }

    private inputPasswordInvalid(): void {
        this.errorMessage = `${this.$t(
            'components.loginInputs.passwordInvalid'
        )}`;
        this.isVaild = false;
    }

    private inputValid(): void {
        this.errorMessage = '';
        this.isVaild = true;
    }
}
</script>

<style lang="scss" scoped></style>
