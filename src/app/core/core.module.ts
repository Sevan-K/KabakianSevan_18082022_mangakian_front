import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import * as fr from '@angular/common/locales/fr';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  imports: [CommonModule, RouterModule, HttpClientModule, SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
