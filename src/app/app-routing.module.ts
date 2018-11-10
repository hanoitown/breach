import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './core/shell/shell.component';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { NewsComponent } from './core/news/news.component';
import { AboutComponent } from './core/about/about.component';

const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      { path: "secure", component: WelcomeComponent },
      { path: "news", component: NewsComponent },
      { path: "about", component: AboutComponent },
      // {
      //   path: "application",
      //   loadChildren: "./application/application.module#ApplicationModule"
      // },
      // {
      //   path: "profile",
      //   loadChildren: "./profile/profile.module#ProfileModule"
      // },
      { path: "", redirectTo: "secure", pathMatch: "full" }
    ]
  },
  // { path: "**", component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
