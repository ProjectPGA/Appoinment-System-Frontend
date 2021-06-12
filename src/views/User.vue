<template>
  <div class="columns p-4">
    <!-- <user-config-menu />
        <content-profile /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// import ContentProfile from '@/components/User/ContentProfile.vue';
// import UserConfigMenu from '@/components/User/UserConfigMenu.vue';

@Component({
  name: 'User',
  components: {
    // ContentProfile,
    // UserConfigMenu,
  },
})
export default class User extends Vue {}
</script>

<style lang="scss" scoped></style>
