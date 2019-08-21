<template>
    <div>
        <InvitationalCode />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LogoApp from '@/components/Navigation/LogoApp.vue';
import InvitationalCode from '@/components/Invitation/InvitationalCode.vue';

@Component({
    name: 'Invitation',
    components: {
        LogoApp,
        InvitationalCode,
    },
})
export default class Invitation extends Vue {}
</script>
<style lang="scss" scoped>
.custom-invitation-input {
    // width: 50%;
}
.title {
    font-family: 'Campesina';
}
</style>
