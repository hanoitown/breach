import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ShellComponent } from './shell/shell.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { DbService } from './services/db.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NewsComponent, MenuComponent, FooterComponent, ShellComponent, WelcomeComponent, AboutComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    DbService
  ],
  exports: [
  ]
})
export class CoreModule { }
