<template>
  <maintenance-layout
    :title="$t('common.title.maintenance')"
    :subtitle="$t('common.subtitle.maintenance')"
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
