<template>
    <div class="main-app"><router-view></router-view></div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Action, Getter, State } from 'vuex-class';
import Axios from 'axios';

import { GlobalState } from '@/vuex/store';

@Component({
    name: 'App',
    components: {},
})
export default class App extends Vue {
    public created() {
        const store = this.$store;
    }
}
</script>
<style lang="scss">
.main-app {
    min-width: 320px;
}
.p-1 {
    padding: 0.25em !important;
}
.p-2 {
    padding: 0.5em !important;
}
.p-3 {
    padding: !important;
}
.p-4 {
    padding: 1.5em !important;
}
.p-5 {
    padding: 3em !important;
}
.h-100 {
    height: 100% !important;
}
.w-100 {
    width: 100% !important;
}
</style>
