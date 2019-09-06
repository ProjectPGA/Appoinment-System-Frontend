<template>
    <div class="columns p-4" v-if="selected === 'security'">
<div class="column is-8 ">
            <div class="title">{{$t('userConfig.user.security.passChangeTittle')}}</div>
            <b-field type="" class="is-size-3" :label="$i18n.t('userConfig.user.security.actualPassText')">
                <b-input
                    size="is-medium"
                    icon-pack="fas"
                    icon="history"
                    type="password"
                    password-reveal
                >
                </b-input>
            </b-field>
            <b-field type="" class="is-size-3" :label="$i18n.t('userConfig.user.security.newPassText')">
                <b-input
                    size="is-medium"
                    icon-pack="fas"
                    icon="key"
                    type="password"
                    password-reveal
                >
                </b-input>
            </b-field>
            <b-field
                type=""
                class="is-size-3"
                :label="$i18n.t('userConfig.user.security.repeatNewPassText')"
            >
                <b-input
                    size="is-medium"
                    :value="currentUsername"
                    icon-pack="fas"
                    icon="key"
                    type="password"
                    password-reveal
                >
                </b-input>
            </b-field>
            <b-button
                class="custom-edit-button-margin"
                @click=""
                outlined
                type="is-danger"
                size="is-medium"
                >{{$t('userConfig.user.security.changePassButton')}}</b-button
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { GlobalState } from '@/vuex/store';

@Component({
    name: 'UserConfigSecurity',
    components: {},
})
export default class UserConfigSecurity extends Vue {
    @State((state: GlobalState) => state.utils.selectedSettingsMenu)
    private selected: string;
}
</script>

<style lang="scss" scoped>
.custom-border {
    border-left: thin;
    border-left-style: solid;
    border-left-color: #4a4a4aab;
}
.custom-edit-button-margin {
    margin-top: 1rem;
    margin-bottom: 2.75rem;
}
</style>
