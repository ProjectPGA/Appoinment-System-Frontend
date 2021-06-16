<template>
  <invitational-code />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import InvitationalCode from '@/components/Invitation/InvitationalCode.vue';

@Component({
  name: 'Invitation',
  components: {
    InvitationalCode,
  },
})
export default class Invitation extends Vue {}
</script>
<style lang="scss" scoped>
.title {
  font-family: 'Campesina';
}
</style>
