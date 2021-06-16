import { Mutations } from 'vuex-smart-module';
import MainState from './MainState';

export default class MainMutations extends Mutations<MainState> {
  public changeTestData(): void {
    this.state.testData = !this.state.testData;
  }

  public changeLanguageToSpanish(): void {
    this.state.currentLanguage = 'es';
  }

  public changeLanguageToEnglish(): void {
    this.state.currentLanguage = 'en';
  }

  public activateMaintenancePage(): void {
    this.state.isMaintenance = true;
  }

  public desactivateMaintenancePage(): void {
    this.state.isMaintenance = false;
  }
}
