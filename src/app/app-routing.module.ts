import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { MainpageComponent } from "./mainpage/mainpage.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "mainpage"
  },
  {
    path: "users",
    component: Page1Component
  },
  {
    path: "home",
    component: MainpageComponent
  },
  {
    path: "adduser",
    component: Page2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
