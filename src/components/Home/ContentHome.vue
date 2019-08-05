<template>
    <div class="columns custom-padding">
        <div class="column"><MainSchedule /></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { GlobalState } from '@/vuex/store';

import MainSchedule from './MainSchedule.vue';

@Component({
    name: 'ContentHome',
    components: {
        MainSchedule,
    },
})
export default class ContentHome extends Vue {}
</script>

<style lang="scss" scoped>
.custom-padding {
    padding: 4.5rem;
}
</style>
