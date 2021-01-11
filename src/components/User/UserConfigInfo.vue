<template>
    <div class="columns p-4" v-if="selected === 'info'">
        <!-- <div class="column is-8">
            <div class="title">{{ $t('userConfig.user.info.infoText') }}</div>
            <b-field
                type=""
                class="is-size-3"
                :label="$t('userConfig.user.info.emailText')"
            >
                <b-input
                    size="is-medium"
                    :value="user.email"
                    icon-pack="fas"
                    icon="at"
                    disabled
                >
                </b-input>
            </b-field>
            <b-field
                :message="emailMessage"
                :type="emailType"
                class="is-size-3"
                :label="$t('userConfig.user.info.newEmailText')"
            >
                <b-input
                    size="is-medium"
                    icon-pack="fas"
                    icon="at"
                    v-model="newEmail"
                    @keypress.native.enter="checkEmail()"
                >
                </b-input>
            </b-field>
            <b-button
                class="custom-edit-button-margin"
                @click="checkEmail()"
                outlined
                type="is-danger"
                size="is-medium"
                >{{ $t('userConfig.user.info.emailSaveButton') }}</b-button
            >
            <b-field
                class="is-size-3"
                :label="$t('userConfig.user.info.userNameText')"
            >
                <b-input
                    size="is-medium"
                    :value="user.name"
                    icon-pack="fas"
                    icon="user-edit"
                    disabled
                >
                </b-input>
            </b-field>
            <b-field
                :type="usernameType"
                class="is-size-3"
                :message="usernameMessage"
                :label="$t('userConfig.user.info.newUserNameText')"
            >
                <b-input
                    size="is-medium"
                    icon-pack="fas"
                    icon="user-edit"
                    v-model="newUsername"
                    @keypress.native.enter="checkUsername()"
                >
                </b-input>
            </b-field>
            <b-button
                class="custom-edit-button-margin"
                @click="checkUsername()"
                outlined
                type="is-danger"
                size="is-medium"
                >{{ $t('userConfig.user.info.userNameButton') }}</b-button
            >
        </div> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { State, Action } from 'vuex-class';
// TODO: Refactor Store
// import { GlobalState } from '@/vuex/store';
// import { AuthUser } from '../../models/auth/AuthUser';
// import { AxiosResponse } from 'axios';
// import { SnackbarProgrammatic as Snackbar } from 'buefy';

@Component({
    name: 'UserConfigInfo',
    components: {},
})
export default class UserConfigInfo extends Vue {
    // @State((state: GlobalState) => state.utils.selectedSettingsMenu)
    // private selected: string;
    // @State((state: GlobalState) => state.auth.user)
    // private user: AuthUser;
    // @Action('auth/fetchUser') private fetchUser: () => void;
    // private newUsername: string = '';
    // private newEmail: string = '';
    // private usernameType: string = '';
    // private usernameMessage: string = '';
    // private emailType: string = '';
    // private emailMessage: string = '';
    // private async changeEmail() {
    //     try {
    //         const response: AxiosResponse = await Vue.axios({
    //             method: 'GET',
    //             url: '/users/' + this.user.id,
    //         });
    //         if (response.status === 200) {
    //             const userTemp: any = response.data;
    //             userTemp.email = this.newEmail;
    //             const resp: AxiosResponse = await Vue.axios({
    //                 method: 'PUT',
    //                 url: '/users/' + this.user.id,
    //                 data: userTemp,
    //             });
    //             if (resp.status === 200) {
    //                 Snackbar.open({
    //                     message: 'El email de usuario ha sido actualizado',
    //                     position: 'is-bottom-left',
    //                     duration: 3000,
    //                 });
    //                 setTimeout(() => {
    //                     this.newEmail = '';
    //                     this.emailType = '';
    //                     this.emailMessage = '';
    //                     this.fetchUser();
    //                 }, 3000);
    //             }
    //         }
    //     } catch (error) {
    //         // TODO: Show Error
    //         // console.log(error);
    //     }
    // }
    // private async changeUsername() {
    //     try {
    //         const response: AxiosResponse = await Vue.axios({
    //             method: 'GET',
    //             url: '/users/' + this.user.id,
    //         });
    //         if (response.status === 200) {
    //             const userTemp: any = response.data;
    //             userTemp.name = this.newUsername;
    //             const resp: AxiosResponse = await Vue.axios({
    //                 method: 'PUT',
    //                 url: '/users/' + this.user.id,
    //                 data: userTemp,
    //             });
    //             if (resp.status === 200) {
    //                 Snackbar.open({
    //                     message: 'El nombre de usuario ha sido actualizado',
    //                     position: 'is-bottom-left',
    //                     duration: 3000,
    //                 });
    //                 setTimeout(() => {
    //                     this.newUsername = '';
    //                     this.usernameType = '';
    //                     this.usernameMessage = '';
    //                     this.fetchUser();
    //                 }, 3000);
    //             }
    //         }
    //     } catch (error) {
    //         // TODO: Show Error
    //         // console.log(error);
    //     }
    // }
    // private checkUsername() {
    //     if (this.newUsername === this.user.name) {
    //         this.usernameType = 'is-danger';
    //         this.usernameMessage =
    //             'El nuevo nuevo nombre de usuario tiene que ser distinto al actual';
    //     } else if (this.newUsername === '') {
    //         this.usernameType = 'is-danger';
    //         this.usernameMessage = 'El campo no puede estar vacio';
    //     } else {
    //         this.usernameType = 'is-success';
    //         this.usernameMessage = '';
    //         this.changeUsername();
    //     }
    // }
    // private checkEmail() {
    //     if (this.newEmail === this.user.email) {
    //         this.emailType = 'is-danger';
    //         this.emailMessage =
    //             'El nuevo nuevo email tiene que ser distinto al actual';
    //     } else if (this.newEmail === '') {
    //         this.emailType = 'is-danger';
    //         this.emailMessage = 'El campo no puede estar vacio';
    //     } else if (!this.newEmail.includes('@')) {
    //         this.emailType = 'is-danger';
    //         this.emailMessage = 'El valor introducido no es tipo email';
    //     } else if (this.newEmail.length < 6) {
    //         this.emailType = 'is-danger';
    //         this.emailMessage = 'El email es demasiado corto';
    //     } else {
    //         this.emailType = 'is-success';
    //         this.emailMessage = '';
    //         this.changeEmail();
    //     }
    // }
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
