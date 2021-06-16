<template>
  <div class="column is-9 custom-border">
    <user-config-info></user-config-info>
    <user-config-security></user-config-security>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserConfigInfo from '@/components/User/UserConfigInfo.vue';
import UserConfigSecurity from '@/components/User/UserConfigSecurity.vue';

@Component({
  name: 'ContentProfile',
  components: {
    UserConfigInfo,
    UserConfigSecurity,
  },
})
export default class ContentProfile extends Vue {}
</script>

<style lang="scss" scoped>
.custom-border {
  border-left: thin;
  border-left-style: solid;
  border-left-color: #4a4a4aab;
}
</style>
