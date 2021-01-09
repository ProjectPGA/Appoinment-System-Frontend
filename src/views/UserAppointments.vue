<template>
    <content-appointments />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ContentAppointments from '@/components/Appointments/ContentAppointments.vue';

@Component({
    name: 'UserAppointments',
    components: {
        ContentAppointments,
    },
})
export default class UserAppointments extends Vue {}
</script>

<style lang="scss" scoped></style>
