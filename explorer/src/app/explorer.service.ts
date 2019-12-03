import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ExplorerService {
  private web = "https://api.worldbank.org/v2/country";
  private format = "?per_page=1000&format=json";

  constructor(private httpClient: HttpClient) {}

  getCountries$() {
    const url = this.web + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(data => data[1]));
  }

  getCountryId$(countryId) {
    const url = this.web + "/" + countryId + this.format;
    return this.httpClient.get<any>(url).pipe(map(data => data[1][0]));
  }
}
