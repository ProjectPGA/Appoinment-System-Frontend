<template>
  <div>
    <transition name="slide-fade">
      <template v-if="show">
        <div class="menu-container" v-click-outside="hide">
          <div class="mobile-menu">
            <button class="close-nav" @click="hide">
              <p-icon name="close"></p-icon>
            </button>
            <router-link to="/Inicio" class="menu-title" @click.native="hide">
              <img class="mobile-logo" src="../../assets/img/logo.svg" />
            </router-link>
            <mobile-navigation-link
              :label="$t('common.components.navigation.index')"
              to="/Inicio"
              @click.native="hide"
            />
            <mobile-navigation-link
              :label="$t('common.components.navigation.appointments')"
              to="/Appointments"
              @click.native="hide"
            />
            <mobile-navigation-link
              :label="$t('common.components.navigation.contactUs')"
              to="/Contact"
              @click.native="hide"
            />
            <div class="menu-item-separator">
              <hr />
            </div>
            <div class="mobile-navigation-user-link">
              <collapse icon="fas fa-angle-down">
                <template slot="collapse_title">
                  <b-icon
                    pack="fas"
                    icon="globe"
                    class="language-icon"
                  ></b-icon>
                  <span>
                    {{ $t('common.title.language') }}
                  </span>
                  <span class="current-language">
                    ({{ currentLanguage }})
                  </span>
                </template>
                <mobile-navigation-link
                  label="common.languages.spanish"
                  @click.native="changeLanguageToSpanish"
                />
                <mobile-navigation-link
                  label="common.languages.english"
                  @click.native="changeLanguageToEnglish"
                />
              </collapse>
            </div>
            <div class="mobile-navigation-user-link">
              <router-link to="/User" class="menu-title" @click.native="hide">
                <b-icon pack="fas" icon="user" />
                {{ username }}
              </router-link>
            </div>
            <div class="mobile-navigation-user-link">
              <router-link to="/" class="menu-title" @click.native="logout()">
                <b-icon pack="fas" icon="sign-out-alt" />
                {{ $t('common.components.navigation.userLogOff') }}
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import authStore from '@/store/auth-store/AuthStore';
import mainStore from '@/store/main-store/MainStore';

import MobileNavigationLink from '@/components/Navigation/MobileNavigationLink.vue';
import PIcon from '@/components/icons/PIcon.vue';
import Collapse from '@/components/Utils/Collapse.vue';

@Component({
  name: 'MobileNavigationMenu',
  components: {
    MobileNavigationLink,
    PIcon,
    Collapse,
  },
})
export default class MobileNavigationMenu extends Vue {
  @Prop(Boolean) private show: boolean;

  private authStore = authStore.context(this.$store);
  private mainStore = mainStore.context(this.$store);

  private showModal: boolean = false;

  private changeLanguageToSpanish(): void {
    this.mainStore.actions.changeLanguageToSpanish();
  }

  private changeLanguageToEnglish(): void {
    this.mainStore.actions.changeLanguageToEnglish();
  }

  private get currentLanguage(): string | null {
    return this.mainStore.state.currentLanguage;
  }

  private logout(): void {
    this.authStore.actions.logout();
  }

  private get username(): string | null {
    return this.authStore.state.name;
  }

  private hide(): void {
    this.$emit('hide');
  }
}
</script>

<style lang="scss" scoped>
.current-language {
  text-transform: uppercase;
}
a {
  color: $main-color-dark !important;
}
hr {
  background-color: $main-color-dark !important;
  height: 0.01rem !important;
}
.mobile-navigation-user-link {
  display: block;
  padding: 0.32rem 1.25rem 0.95em 1.25rem;
}
.menu-item-separator {
  padding: 2.5rem 1.56rem 0rem 0.95em;
  hr {
    height: 0.03rem !important;
  }
}
.menu-container {
  position: fixed;
  overflow-y: auto;
  top: 0;
  bottom: 0;
  left: 0;
  left: 0;
  z-index: z('menu');
  background-color: $main-color-light;
  width: 80vw;
  max-width: 41.88rem;
  min-width: 18.75rem;
  z-index: 100;
}
.mobile-menu {
  padding-left: 1.88rem;
  padding-top: 2.19rem;
  padding-right: 1.25rem;
}
.close-nav {
  background: transparent;
  border: none;
  outline: none !important;
  position: fixed;
  left: 0.62em;
  top: 0.62em;
  color: $main-color-dark;
  font-size: 1.88rem;
  cursor: pointer;
}
.mobile-logo {
  height: 9.63rem;
  width: 9.63rem;
}
.language-icon {
  margin-right: 0.32rem;
}
</style>
