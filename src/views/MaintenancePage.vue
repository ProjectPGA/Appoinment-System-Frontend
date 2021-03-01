<template>
    <maintenance-layout
        :title="$t('maintenance.title')"
        :subtitle="$t('maintenance.subtitle')"
        urlImage="maintenance-image-1080x720.svg"
    />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import MaintenanceLayout from '@/components/Maintenance/MaintenanceLayout.vue';

@Component({
    name: 'MaintenancePage',
    components: {
        MaintenanceLayout,
    },
})
export default class MaintenancePage extends Vue {}
</script>

<style lang="scss" scoped></style>
