<template>
    <div>
        <div class="columns box custom-box-padding is-size-4 is-multiline">
            <div
                class="column is-auto-desktop has-text-centered box custom-box-margin"
            >
                <div class="columns is-multiline">
                    <div class="column is-12 is-size-5">
                        <div class="custom-padding title">Lunes</div>
                        <div class="custom-padding">5 de Agosto</div>
                    </div>
                    <div
                        class="column is-12 box custom-box-padding is-size-4 bg-free"
                        @click="TakeAppoint();"
                    >
                        10:00
                    </div>
                </div>
            </div>
        </div>

        <MessageText Text="Cita asignada" :isActive="isActive" />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import { UtilState } from '@/vuex/utils/store';
import MessageText from '@/components/Utils/MessageText.vue';
import { GlobalState } from '../../vuex/store';

@Component({
    name: 'MainSchedule',
    components: {
        MessageText,
    },
})
export default class MainSchedule extends Vue {
    @Mutation('utils/setMessageisActive') private setMessageActive: () => void;
        @State((state: GlobalState) => state.utils.messageisActive) private isActive !: boolean;

    private TakeAppoint() {
        this.setMessageActive();
        console.log(this.isActive);
    }
}
</script>
<style scoped>
.custom-box-margin {
    margin: 0.5rem !important;
}
.bg-free {
    background-color: #53ff53;
}
.bg-occupied {
    background-color: #ff6969;
}
.custom-border {
    border: 1px black;
    border-style: solid;
}
.custom-padding {
    padding: 0.25rem !important;
}
.column {
    padding: 1.25rem !important;
}
.box {
    margin-bottom: 1.5rem;
}
.custom-box-padding {
    padding: 0.5rem !important;
}
.title {
    margin-bottom: 0.25rem !important;
}
</style>
