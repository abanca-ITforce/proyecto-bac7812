import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountrieComponent } from './countrie.component';

const routes: Routes = [{ path: '', component: CountrieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountrieRoutingModule { }
