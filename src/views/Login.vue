<template>
    <div>
        <main-login-form></main-login-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

import { GlobalState } from '@/vuex/store';

import MainLoginForm from '@/components/Login/MainLoginForm.vue';

@Component({
    name: 'Login',
    components: {
        MainLoginForm,
    },
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
.custom-margin {
    margin-top: 3%;
}
</style>
