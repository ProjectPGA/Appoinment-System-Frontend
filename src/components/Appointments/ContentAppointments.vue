<template>
  <div>
    <!-- <titles-app
            class="user-appointments-title"
            title="titles.userAppointments"
        ></titles-app> -->
    <user-appointments-filter></user-appointments-filter>
    <user-appointments-display></user-appointments-display>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// import TitlesApp from '@/components/Home/TitlesApp.vue';
import UserAppointmentsDisplay from '@/components/Appointments/UserAppointmentsDisplay.vue';
import UserAppointmentsFilter from '@/components/Appointments/UserAppointmentsFilter.vue';

@Component({
  name: 'ContentAppointments',
  components: {
    // TitlesApp,
    UserAppointmentsDisplay,
    UserAppointmentsFilter,
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
