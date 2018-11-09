import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './core/shell/shell.component';
import { WelcomeComponent } from './core/welcome/welcome.component';

const routes: Routes =[
  {
    path: "",
    component: ShellComponent,
    children: [
      { path: "welcome", component: WelcomeComponent },
      // {
      //   path: "application",
      //   loadChildren: "./application/application.module#ApplicationModule"
      // },
      // {
      //   path: "profile",
      //   loadChildren: "./profile/profile.module#ProfileModule"
      // },
      { path: "", redirectTo: "welcome", pathMatch: "full" }
    ]
  },
  // { path: "**", component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
