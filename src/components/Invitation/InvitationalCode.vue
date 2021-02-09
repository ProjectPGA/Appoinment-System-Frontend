<template>
    <div>
        <button-translation />
        <div class="columns is-centered">
            <div class="column is-6"><logo-app /></div>
        </div>
        <div class="columns is-centered is-mobile">
            <div
                class="column is-8-desktop is-10-mobile container has-text-centered"
            >
                <p class="title">
                    {{ $t('components.invitation.title') }}
                </p>
                <b-field
                    label=""
                    :type="bfieldType"
                    :message="errorMessage"
                    class="centered-content"
                >
                    <b-input
                        v-model="code"
                        class="custom-invitation-input"
                        size="is-medium is-uppercase"
                        placeholder="Ej. TX23DF2"
                        @keyup.native.enter="checkInvitationalCode()"
                    >
                    </b-input>
                    <p class="control">
                        <b-button
                            @click="checkInvitationalCode()"
                            class="button is-success"
                            size="is-medium"
                            >{{ $t('components.invitation.button') }}</b-button
                        >
                    </p>
                </b-field>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import LogoApp from '@/components/Navigation/LogoApp.vue';
import ButtonTranslation from '@/components/Login/ButtonTranslation.vue';

import authStore from '@/store/auth-store/AuthStore';

import { SnackbarProgrammatic as Snackbar } from 'buefy';

@Component({
    name: 'InvitationalCode',
    components: {
        LogoApp,
        ButtonTranslation,
    },
})
export default class InvitationalCode extends Vue {
    private authStore = authStore.context(this.$store);

    private code: string = '';
    private errorMessage: string = '';

    private bfieldType: string = '';

    private checkInvitationalCode(): void {
        this.authStore.actions.checkInvitationalCode(this.code);
    }

    private get isInvitationalCodeError(): boolean {
        return this.authStore.state.isInvitationalCodeError;
    }

    @Watch('isInvitationalCodeError')
    private onChangeInvitationalCodeError(): void {
        if (this.isInvitationalCodeError) {
            Snackbar.open({
                message: `${this.$i18n.t('components.invitation.error')}`,
                type: 'is-danger',
                position: 'is-bottom-left',
                duration: 5000,
                actionText: `${this.$i18n.t('components.invitation.clean')}`,
                onAction: () => {
                    this.clearFormInput();
                },
            });
        }

        this.clearFormInput();
    }

    private async clearFormInput() {
        this.errorMessage = '';
        this.code = '';

        this.bfieldType = 'is-danger';
    }
}
</script>
<style lang="scss" scoped>
.title {
    font-family: 'CabbageTown';
    font-size: calc(0.25em + 0.5vw);
    line-height: 3em !important;
}
.custom-invitation-input {
    width: 50%;
    @include mobile {
        width: 85%;
    }
}
.centered-content {
    display: flex !important;
    justify-content: center !important;
}
.button.is-success {
    background-color: $main-color !important;
}
</style>
