<template>
  <div class="only-mobile">
    <a href="tel:34679938186" class="float" target="_blank">
      <b-icon pack="fas" icon="phone-alt" size="is-medium" class="my-float" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'CallButton',
})
export default class CallButton extends Vue {}
</script>

<style lang="scss" scoped>
.float {
  position: fixed;
  width: 3.75rem;
  height: 3.75rem;
  bottom: 1.25rem;
  left: 1.25rem;
  background-color: $main-color-medium-dark;
  color: #fff;
  border-radius: 3.12rem;
  text-align: center;
  font-size: 1.88rem;
  box-shadow: 0.12em 0.12em 0.19em #999;
  z-index: 29;
}

.my-float {
  margin-top: 0.9rem;
  margin-left: 0.1rem;
  font-family: 'FontAwesome';

  ::v-deep .fa-lg {
    font-size: 1.8rem;
  }
}
.only-mobile {
  display: none;
  @include touch {
    display: unset;
  }
}
</style>
