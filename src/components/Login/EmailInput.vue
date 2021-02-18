<template>
    <b-field
        :label="$t('components.loginInputs.email')"
        :message="errorMessage"
        :type="{
            'is-danger': !isVaild,
        }"
    >
        <b-input
            v-model="email"
            :placeholder="$t('components.loginInputs.email')"
            size="is-medium"
            :data-cy="`${view}-input-email`"
            @blur="checkEmail"
            @input="onInput"
        />
    </b-field>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'EmailInput',
})
export default class EmailInput extends Vue {
    @Prop(String) private view: string;

    private email: string = '';
    private isVaild: boolean = true;
    private errorMessage: string = '';

    private onInput(): void {
        this.$emit('input', this.email);
        this.checkEmail();
    }

    private checkEmail(): void {
        this.email === ''
            ? this.inputEmpty()
            : this.email.includes('@')
            ? this.inputValid()
            : this.inputEmailInvalid();

        this.$emit('checkEmail', this.isVaild);
    }

    private inputEmpty(): void {
        this.errorMessage = `${this.$t('components.loginInputs.inputEmpty')}`;
        this.isVaild = false;
    }

    private inputEmailInvalid(): void {
        this.errorMessage = `${this.$t('components.loginInputs.emailInvalid')}`;
        this.isVaild = false;
    }

    private inputValid(): void {
        this.errorMessage = '';
        this.isVaild = true;
    }
}
</script>

<style lang="scss" scoped></style>
