<template>
    <div class="columns p-4" v-if="selected === 'info'">
        <div class="column is-8">
            <div class="title">{{ $t('userConfig.user.info.infoText') }}</div>
            <b-field
                type=""
                class="is-size-3"
                :label="$i18n.t('userConfig.user.info.emailText')"
            >
                <b-input
                    size="is-medium"
                    :value="currentEmail"
                    icon-pack="fas"
                    icon="at"
                    disabled
                >
                </b-input>
            </b-field>
            <b-field
                type=""
                class="is-size-3"
                :label="$i18n.t('userConfig.user.info.newEmailText')"
            >
                <b-input size="is-medium" icon-pack="fas" icon="at"> </b-input>
            </b-field>
            <b-button
                class="custom-edit-button-margin"
                @click=""
                outlined
                type="is-danger"
                size="is-medium"
                >{{ $t('userConfig.user.info.emailSaveButton') }}</b-button
            >
            <b-field
                type=""
                class="is-size-3"
                :label="$i18n.t('userConfig.user.info.userNameText')"
            >
                <b-input
                    size="is-medium"
                    :value="currentUsername"
                    icon-pack="fas"
                    icon="user-edit"
                    disabled
                >
                </b-input>
            </b-field>
            <b-field
                type=""
                class="is-size-3"
                :label="$i18n.t('userConfig.user.info.newUserNameText')"
            >
                <b-input size="is-medium" icon-pack="fas" icon="user-edit">
                </b-input>
            </b-field>
            <b-button
                class="custom-edit-button-margin"
                @click=""
                outlined
                type="is-danger"
                size="is-medium"
                >{{ $t('userConfig.user.info.userNameButton') }}</b-button
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { GlobalState } from '@/vuex/store';

@Component({
    name: 'UserConfigInfo',
    components: {},
})
export default class UserConfigInfo extends Vue {
    @State((state: GlobalState) => state.utils.selectedSettingsMenu)
    private selected: string;
    @State((state: GlobalState) => state.auth.user.email)
    private currentEmail: string;
    @State((state: GlobalState) => state.auth.user.name)
    private currentUsername: string;
}
</script>

<style lang="scss" scoped>
.custom-border {
    @include mobile {
        border-top: thin;
        border-top-style: solid;
        border-top-color: #4a4a4aab;
    }
    @include fullhd {
        border-left: thin;
        border-left-style: solid;
        border-left-color: #4a4a4aab;
    }
}
.custom-edit-button-margin {
    margin-top: 1rem;
    margin-bottom: 2.75rem;
}
</style>
