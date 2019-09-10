<template>
    <div class="columns p-4" v-if="selected === 'security'">
        <div class="column is-8 ">
            <div class="title">
                {{ $t('userConfig.user.security.passChangeTittle') }}
            </div>
            <b-field
                :type="oldPassType"
                :message="oldPassMessage"
                class="is-size-3"
                :label="$i18n.t('userConfig.user.security.actualPassText')"
            >
                <b-input
                    v-model="currentPass"
                    @keypress.native.enter="saveNewPassword()"
                    size="is-medium"
                    icon-pack="fas"
                    icon="history"
                    type="password"
                    password-reveal
                >
                </b-input>
            </b-field>
            <b-field
                :type="newPassType"
                :message="newPassMessage"
                class="is-size-3"
                :label="$i18n.t('userConfig.user.security.newPassText')"
            >
                <b-input
                    v-model="newPass"
                    @keypress.native.enter="saveNewPassword()"
                    size="is-medium"
                    icon-pack="fas"
                    icon="key"
                    type="password"
                    password-reveal
                >
                </b-input>
            </b-field>
            <b-field
                :type="reNewPassType"
                :message="reNewPassMessage"
                class="is-size-3"
                :label="$i18n.t('userConfig.user.security.repeatNewPassText')"
            >
                <b-input
                    v-model="reNewPass"
                    @keypress.native.enter="saveNewPassword()"
                    size="is-medium"
                    icon-pack="fas"
                    icon="key"
                    type="password"
                    password-reveal
                >
                </b-input>
            </b-field>
            <b-button
                class="custom-edit-button-margin"
                @click="saveNewPassword()"
                outlined
                type="is-danger"
                size="is-medium"
                >{{ $t('userConfig.user.security.changePassButton') }}</b-button
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { GlobalState } from '@/vuex/store';
import { AxiosResponse } from 'axios';
import { AuthUser } from '../../models/auth/AuthUser';
import { SnackbarProgrammatic as Snackbar } from 'buefy';

@Component({
    name: 'UserConfigSecurity',
    components: {},
})
export default class UserConfigSecurity extends Vue {
    @State((state: GlobalState) => state.utils.selectedSettingsMenu)
    private selected: string;
    @State((state: GlobalState) => state.auth.user)
    private user: AuthUser;

    private currentPass: string = '';
    private newPass: string = '';
    private reNewPass: string = '';

    private oldPassType: string = '';
    private oldPassMessage: string = '';
    private newPassType: string = '';
    private newPassMessage: string = '';
    private reNewPassType: string = '';
    private reNewPassMessage: string = '';

    private async saveNewPassword() {
        if (await this.checkOldPass()) {
            if (await this.checkNewPass()) {
                this.newPassType = 'is-success';
                this.newPassMessage = '';
                this.newPassType = 'is-success';
                this.newPassMessage = '';

                await this.doPassChange().then(() => {
                    this.clearInputs();
                    Snackbar.open({
                        message: 'La contraseña ha sido actualizada con exito',
                        position: 'is-bottom-left',
                        duration: 3000,
                    });
                });
            }
        }
    }
    private async doPassChange(): Promise<any> {
        const userTemp: any = {
            id: this.user.id,
            email: this.user.email,
            password: this.newPass,
            name: this.user.name,
            admin: this.user.admin,
        };
        try {
            const resp: AxiosResponse = await Vue.axios({
                method: 'PUT',
                url: '/users/' + this.user.id,
                data: userTemp,
            });
        } catch (error) {
            console.log(error);
        }
    }
    private async checkOldPass(): Promise<any> {
        try {
            const response: AxiosResponse = await Vue.axios({
                method: 'POST',
                url: '/passcheck',
                data: { userId: this.user.id, pass: this.currentPass },
            });
            if (response.data.cod) {
                this.oldPassType = 'is-success';
                this.oldPassMessage = '';
                return true;
            } else {
                this.oldPassType = 'is-danger';
                this.oldPassMessage = 'La contraseña no coincide con la actual';
                return false;
            }
        } catch (error) {
            console.log(error);
        }
    }
    private async checkNewPass(): Promise<any> {
        if (this.newPass.length < 8) {
            this.newPassType = 'is-danger';
            this.newPassMessage = 'Contraseña demasido corta';
            return false;
        } else if (this.newPass !== this.reNewPass) {
            this.newPassType = 'is-danger';
            this.newPassMessage = 'Las contraseñas no coinciden';
            return false;
        } else {
            this.newPassType = '';
            this.newPassMessage = '';
        }
        return true;
    }
    private clearInputs() {
        this.currentPass = '';
        this.newPass = '';
        this.reNewPass = '';
        this.oldPassType = '';
        this.oldPassMessage = '';
        this.newPassType = '';
        this.newPassMessage = '';
        this.reNewPassType = '';
        this.reNewPassMessage = '';
    }
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
