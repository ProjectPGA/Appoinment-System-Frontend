<template>
  <div class="contact-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388.79178950974364!2d-4.689039684039182!3d36.63905601405855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c3bb7c5a14a585c!2sBarberia+Castillo!5e0!3m2!1ses!2ses!4v1565093491702!5m2!1ses!2ses"
      class="contact-map_iframe"
      frameborder="0"
      style="border: 0"
      allowfullscreen
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ContactMap',
})
export default class ContactMap extends Vue {}
</script>

<style lang="scss" scoped>
.contact-map {
  overflow: hidden;

  &_iframe {
    width: 100%;
    height: 100vh;
  }
}
</style>
