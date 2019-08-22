<template>
    <div>
        <MainRegisterForm></MainRegisterForm>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainRegisterForm from '@/components/Login/MainRegisterForm.vue';

@Component({
    name: 'Login',
    components: {
        MainRegisterForm,
    },
})
export default class Register extends Vue {}
</script>

<style lang="scss" scoped>
.custom-margin {
    margin-top: 3%;
}
</style>
