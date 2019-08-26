<template>
    <div>
        <titles-app
            class="user-appointments-title"
            title="titles.userAppointments"
        ></titles-app>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TitlesApp from '@/components/Home/TitlesApp.vue';

@Component({
    name: 'ContentAppointments',
    components: {
        TitlesApp,
    },
})
export default class ContentAppointments extends Vue {}
</script>

<style lang="scss" scoped>
.user-appointments-title {
    font-size: 2em;
    padding: 2em;
    @include mobile {
        font-size: 1em;
    }
}
</style>
