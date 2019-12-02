import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: ":id",
    loadChildren: () =>
      import("./countries/countrie/countrie.module").then(m => m.CountrieModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
