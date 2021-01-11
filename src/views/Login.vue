<template>
    <main-login-form />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

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

    private mounted(): void {
        this.authStore.actions.disableRegisterProcess();
    }
}
</script>

<style lang="scss" scoped>
.custom-margin {
    margin-top: 3%;
}
</style>
