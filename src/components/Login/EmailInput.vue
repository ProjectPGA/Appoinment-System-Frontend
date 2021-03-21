<template>
    <b-field
        :label="$t('components.loginInputs.email')"
        :message="errorMessage"
        :type="{
            'is-danger': !isValid,
        }"
    >
        <b-input
            v-model="email"
            :placeholder="$t('components.loginInputs.email')"
            size="is-medium"
            :data-cy="`${view}-input-email`"
            @blur="checkEmail"
            @input="onInput"
            @keypress.native.enter="onEnterEmail"
        />
    </b-field>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'EmailInput',
})
export default class EmailInput extends Vue {
    @Prop(String) private view: string;

    private mainStore = mainStore.context(this.$store);

    private email: string = '';
    private isValid: boolean = true;
    private errorMessage: string = '';

    private onInput(): void {
        this.$emit('input', this.email);

        this.checkEmail();
    }

    private onEnterEmail(): void {
        this.checkEmail();

        if (this.isValid) {
            this.$emit('enter');
        }
    }

    private checkEmail(): void {
        this.email === ''
            ? this.inputEmpty()
            : this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
            ? this.inputValid()
            : this.inputEmailInvalid();

        this.$emit('check-email', this.isValid);
    }

    private inputEmpty(): void {
        this.errorMessage = `${this.$t('components.loginInputs.inputEmpty')}`;

        this.isValid = false;
    }

    private inputEmailInvalid(): void {
        this.errorMessage = `${this.$t('components.loginInputs.emailInvalid')}`;

        this.isValid = false;
    }

    private inputValid(): void {
        this.errorMessage = '';
        this.isValid = true;
    }

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    @Watch('currentLanguage')
    private onChangeLanguage(): void {
        this.checkEmail();
    }
}
</script>

<style lang="scss" scoped></style>
