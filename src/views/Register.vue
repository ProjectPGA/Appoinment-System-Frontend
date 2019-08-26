<template>
    <div>
        <main-register-form></main-register-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

import { GlobalState } from '@/vuex/store';

import MainRegisterForm from '@/components/Login/MainRegisterForm.vue';

@Component({
    name: 'Login',
    components: {
        MainRegisterForm,
    },
})
export default class Register extends Vue {
    @State((state: GlobalState) => state.utils.showWhatsappButton)
    private showWhatsappButton: boolean;

    @Mutation('utils/changeStateWhatsappButton')
    private changeStateWhatsappButton;

    private mounted() {
        if (this.showWhatsappButton) {
            this.changeStateWhatsappButton();
        }
    }
}
</script>

<style lang="scss" scoped>
.custom-margin {
    margin-top: 3%;
}
</style>
