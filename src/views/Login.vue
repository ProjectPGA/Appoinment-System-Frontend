<template>
    <div>
        <main-login-form></main-login-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { Route } from 'vue-router';

import authStore from '@/store/auth-store/AuthStore';

import MainLoginForm from '@/components/Login/MainLoginForm.vue';

@Component({
    name: 'Login',
    components: {
        MainLoginForm,
    },
})
export default class Login extends Vue {
    private authStore = authStore.context(this.$store);

    private get isLogged(): boolean {
        return this.authStore.state.loggedIn;
    }

    public async beforeRouteEnter(from: Route, to: Route, next: any) {
        next((vm: Login) => {
            if (vm.isLogged) {
                next('/inicio');
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
