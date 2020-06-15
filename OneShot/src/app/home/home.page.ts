import { Component } from '@angular/core';
import {faCheck, faGlobe, faKey, faStore, faUser, faUserTie} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loginIcon = faUserTie;
  passwordIcon = faKey;
  logoIcon = faStore;
  langIcon = faGlobe;
  lang;
  checkIcon = faCheck;

  constructor() {}

  changeLanguage(fr: string) {

  }
}
