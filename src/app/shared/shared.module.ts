import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { PhoneMaskDirective } from './directives/card.directive'

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    CurrencyMaskModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    CurrencyMaskModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PhoneMaskDirective
  ],
  declarations: [PhoneMaskDirective]
})
export class SharedModule { }
