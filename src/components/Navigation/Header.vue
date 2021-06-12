<template>
  <navigation-bar />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import NavigationBar from './Navigationbar.vue';

@Component({
  name: 'Header',
  components: {
    NavigationBar,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped></style>
