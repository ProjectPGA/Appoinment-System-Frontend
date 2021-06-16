<template>
  <div class="content-loading" data-cy="loading">
    <img class="image-loading" src="../../assets/img/hipster.svg" alt="" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Loading',
})
export default class Loading extends Vue {}
</script>

<style lang="scss" scoped>
.content-loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  background: $main-color-light;
  z-index: 100;
}
.image-loading {
  @include mobile {
    width: 50%;
  }
  width: 25%;
  position: absolute;
  margin: auto;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
