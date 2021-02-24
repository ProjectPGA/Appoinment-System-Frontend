<template>
    <b-field
        :label="$t('components.loginInputs.password')"
        :message="errorMessage"
        :type="{
            'is-danger': !isValid,
        }"
    >
        <b-input
            v-model="password"
            :placeholder="$t('components.loginInputs.password')"
            size="is-medium"
            :data-cy="`${view}-input-password`"
            type="password"
            password-reveal
            required
            @blur="checkPassword"
            @input="onInput"
            class="password-input"
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
    private isValid: boolean = true;
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
            : this.inputPasswordIncomplete();

        this.$emit('checkPassword', this.isValid);
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

    private inputValid(): void {
        this.errorMessage = '';
        this.isValid = true;
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
