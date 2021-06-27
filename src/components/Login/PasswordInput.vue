<template>
    <b-field
        :label="$t('common.password')"
        :message="errorMessage"
        :type="{
            'is-danger': !isValid,
        }"
    >
        <b-input
            v-model="password"
            :placeholder="$t('common.password')"
            size="is-medium"
            :data-cy="`${view}-input-password`"
            type="password"
            password-reveal
            required
            @blur="checkPassword"
            @input="onInput"
            @keypress.native.enter="onEnterPassword"
            class="password-input"
        />
    </b-field>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'PasswordInput',
})
export default class PasswordInput extends Vue {
    @Prop(String) private view: string;

    private mainStore = mainStore.context(this.$store);

    private password: string = '';
    private isValid: boolean = true;
    private errorMessage: string = '';

    private onInput(): void {
        this.$emit('input', this.password);

        this.checkPassword();
    }

    private onEnterPassword(): void {
        this.checkPassword();

        if (this.isValid) {
            this.$emit('enter');
        }
    }

    private checkPassword(): void {
        this.password === ''
            ? this.inputEmpty()
            : this.password.match(
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
              )
            ? this.inputValid()
            : this.inputPasswordIncomplete();

        this.$emit('check-password', this.isValid);
    }

    private inputEmpty(): void {
        this.errorMessage = `${this.$t('views.login.inputEmpty')}`;

        this.isValid = false;
    }

    private inputPasswordIncomplete(): void {
        this.errorMessage = `${this.$t('common.passwordInvalid')}`;

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
        this.checkPassword();
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
