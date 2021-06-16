<template>
  <div class="">
    <contact-title title="Contact" />
    <contact-data />
    <contact-map />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ContactData from '@/components/Contact/ContactData.vue';
import ContactMap from '@/components/Contact/ContactMap.vue';
import ContactTitle from '@/components/Contact/ContactTitle.vue';

@Component({
  name: 'Contact',
  components: {
    ContactData,
    ContactMap,
    ContactTitle,
  },
})
export default class Contact extends Vue {}
</script>

<style lang="scss" scoped>
.contact {
  display: block;
}
</style>
