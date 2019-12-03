import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ExplorerService {
  private country = "https://api.worldbank.org/v2/country";
  private region = "https://api.worldbank.org/v2/region";
  private format = "per_page=1000&format=json";

  constructor(private httpClient: HttpClient) {}

  getCountries$() {
    const url = this.country + "?" + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(data => data[1]));
  }

  getCountryId$(countryId) {
    const url = this.country + "/" + countryId + "?" + this.format;
    return this.httpClient.get<any>(url).pipe(map(data => data[1][0]));
  }

  getRegions$() {
    const url = this.region + "?" + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(data => data[1]));
  }

  getRegionsCode$(regionCode) {
    const url = this.region + "/" + regionCode + "?" + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(data => data[1][0]));
  }

}
