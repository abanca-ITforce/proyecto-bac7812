import { Component, OnInit } from "@angular/core";
import { HomeService } from "../home.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"]
})
export class CountriesComponent implements OnInit {
  countriesList$: Observable<any[]>;

  constructor(private homeService: HomeService) {
    this.countriesList$ = this.homeService.getCountries$();
  }

  ngOnInit() {}
}
