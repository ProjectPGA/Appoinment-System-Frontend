<template>
    <div class="column is-3">
        <b-menu>
            <b-menu-list
                class="custom-menu-title"
                icon-pack="fas"
                icon="cog"
                :label="$i18n.t('userConfig.configText')"
            >
                <b-menu-item icon="user" active expanded>
                    <template slot="label" slot-scope="props">
                        {{ $t('userConfig.userText') }}
                        <b-icon
                            class="is-pulled-right"
                            pack="fas"
                            :icon="props.expanded ? 'menu-down' : 'menu-up'"
                        >
                        </b-icon>
                    </template>
                    <b-menu-item
                        @click="setSelectedSettings('info')"
                        icon="info"
                        :label="$i18n.t('userConfig.user.infoText')"
                    ></b-menu-item>
                    <b-menu-item
                        @click="setSelectedSettings('security')"
                        icon-pack="fas"
                        icon="lock"
                        :label="$i18n.t('userConfig.user.securityText')"
                    ></b-menu-item>
                </b-menu-item>
                <b-menu-item
                    :v-if="admin"
                    icon="user-shield"
                    :label="$i18n.t('userConfig.adminText')"
                >
                    <b-menu-item
                        :label="$i18n.t('userConfig.adminText')"
                    ></b-menu-item>
                </b-menu-item>
            </b-menu-list>
        </b-menu>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation, State } from 'vuex-class';
import { GlobalState } from '@/vuex/store';

@Component({
    name: 'UserConfigMenu',
    components: {},
})
export default class UserConfigMenu extends Vue {
    @Mutation('utils/setSelectedSettingsMenu') private setSelectedSettings: (
        menu: string
    ) => void;
    @State((state: GlobalState) => state.auth.user.admin)
    private admin: boolean;
}
</script>

<style lang="scss" scoped>
.menu-label {
    font-size: 1rem !important;
}
</style>
