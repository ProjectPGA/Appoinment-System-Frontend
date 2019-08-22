<template>
    <div>
        <MainLoginForm></MainLoginForm>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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
