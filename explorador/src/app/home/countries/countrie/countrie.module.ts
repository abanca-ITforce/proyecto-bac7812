import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CountrieRoutingModule } from "./countrie-routing.module";
import { CountrieComponent } from "./countrie.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [CountrieComponent],
  imports: [
    CommonModule,
    CountrieRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CountrieModule {}
