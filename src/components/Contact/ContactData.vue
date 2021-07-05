<template>
    <div class="contact-data">
        <div class="contact-data_section-container">
            <div class="contact-data_icon">
                <b-icon
                    pack="far"
                    icon="calendar-alt"
                    class="contact-data_icon-phone"
                />
            </div>
            <div class="contact-data_section">
                <h2 class="contact-data_title">
                    {{ $t('views.contact.componentContact.titleSchedule') }}
                </h2>
                <p>
                    {{
                        $t('views.contact.componentContact.textMondayToFriday')
                    }}
                </p>
                <p>
                    {{ $t('views.contact.componentContact.textSaturday') }}
                </p>
            </div>
        </div>
        <div class="contact-data_section-container">
            <div class="contact-data_icon">
                <b-icon
                    pack="fas"
                    icon="phone"
                    class="contact-data_icon-phone"
                />
            </div>
            <div class="contact-data_section">
                <h2 class="contact-data_title">
                    {{ $t('views.contact.componentContact.titlePhone') }}
                </h2>
                <p>
                    {{ $t('views.contact.componentContact.textPhone') }}
                </p>
            </div>
        </div>
        <div class="contact-data_section-container">
            <div class="contact-data_icon">
                <b-icon
                    pack="fas"
                    icon="map-marker-alt"
                    class="contact-data_icon-phone"
                />
            </div>
            <div class="contact-data_section">
                <h2 class="contact-data_title">
                    {{ $t('views.contact.componentContact.titleAddress') }}
                </h2>
                <p>
                    {{ $t('views.contact.componentContact.textAddress') }}
                </p>
                <p>
                    {{ $t('views.contact.componentContact.textCity') }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ContactData',
})
export default class ContactData extends Vue {}
</script>

<style lang="scss" scoped>
.contact-data {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 45vh;
  background-color: $main-color-light;
  padding: 2rem;
  font-size: 1.15rem;

  @include tablet-only {
    flex-direction: column;
    height: inherit;
  }
  @include mobile {
    flex-direction: column;
    height: inherit;
  }

  &_icon {
    display: flex;
    align-items: flex-start;
    justify-content: right;
    font-size: 2rem;
    min-height: 12.5em;
    color: $main-color;

    @include tablet-only {
      // align-items: center;
      display: block;
    }
    @include mobile {
      // align-items: center;
      display: block;
    }

    @include paddingY(2rem);
    @include paddingX(0.75rem);
  }

  &_section-container {
    display: flex;
    width: 100%;
    min-height: 12.5em;
    justify-content: center;
    flex-direction: row;
    color: $main-color-medium-dark;

    -webkit-animation: slide-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @include tablet-only {
      justify-content: flex-start;
    }
    @include mobile {
      justify-content: flex-start;
    }
  }

  &_section {
    padding: 1rem;
  }

  &_title {
    font-size: 1.75rem;
    font-weight: bold;
    display: flex;
    align-items: flex-start;
  }
}
</style>
