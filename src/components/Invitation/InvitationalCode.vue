<template>
  <div class="invitational-code section">
    <button-translation />
    <div class="columns is-multiline">
      <div class="column is-12"><logo-app /></div>
      <div class="column is-12 invitational-code_content">
        <h1
          class="invitational-code_content-title title"
          data-cy="invitational-code-title"
        >
          {{ $t('components.invitation.title') }}
        </h1>
        <b-field class="invitational-code_content-field">
          <b-input
            v-model="invitationalCode"
            size="is-medium is-uppercase "
            expanded
            placeholder="Ej. ASJAOLHDYWIP"
            @keypress.native.enter="onEnterInvitationalCode"
            data-cy="invitational-code-input"
          >
          </b-input>
          <p class="control">
            <b-button
              @click="checkInvitationalCode()"
              type="is-danger"
              size="is-medium"
              :disabled="isInvalidCode"
              data-cy="invitational-code-button"
            >
              {{ $t('components.invitation.button') }}
            </b-button>
          </p>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LogoApp from '@/components/Navigation/LogoApp.vue';
import ButtonTranslation from '@/components/common/ButtonTranslation.vue';

import authStore from '@/store/auth-store/AuthStore';

@Component({
  name: 'InvitationalCode',
  components: {
    LogoApp,
    ButtonTranslation,
  },
})
export default class InvitationalCode extends Vue {
  private authStore = authStore.context(this.$store);

  private invitationalCode: string = '';

  private onEnterInvitationalCode(): void {
    if (!this.isInvalidCode) {
      this.checkInvitationalCode();
    }
  }

  private checkInvitationalCode(): void {
    this.authStore.actions.checkInvitationalCode(this.invitationalCode);
  }

  private get isInvalidCode(): boolean {
    return this.invitationalCode.length === 12 ? false : true;
  }
}
</script>

<style lang="scss" scoped>
.invitational-code {
  &_content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &_content-field {
    width: 75%;
    @include touch {
      width: 100%;
    }
  }
  &_content-title {
    text-align: center;
  }
}
</style>
