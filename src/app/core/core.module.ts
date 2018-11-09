import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ShellComponent } from './shell/shell.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewsComponent, MenuComponent, FooterComponent, ShellComponent, WelcomeComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule,
    NgbModule
  ],
  exports:[
    NgbModule
  ]
})
export class CoreModule { }
