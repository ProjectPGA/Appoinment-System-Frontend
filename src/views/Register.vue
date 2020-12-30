<template>
    <div>
        <main-register-form></main-register-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

// TODO: Refactor Store
// import { GlobalState } from '@/vuex/store';

import MainRegisterForm from '@/components/Login/MainRegisterForm.vue';
import { Route } from 'vue-router';

@Component({
    name: 'Login',
    components: {
        MainRegisterForm,
    },
})
export default class Register extends Vue {
    @State((state: GlobalState) => state.utils.invitationProgress)
    private invitationProgress: boolean;

    @Mutation('utils/changeStateWhatsappButton')
    private changeStateWhatsappButton;

    public async beforeRouteEnter(from: Route, to: Route, next: any) {
        next((vm: Register) => {
            if (vm.invitationProgress === false) {
                next('/');
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.custom-margin {
    margin-top: 3%;
}
</style>
