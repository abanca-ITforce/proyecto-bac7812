import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'https://api.worldbank.org/v2/country?per_page=1000&format=json'
  countriesList: any [];

  constructor(private http: HttpClient) {
   }
  
   getCountries$() {
    return this.http.get<any[]>(this.url).pipe(map(data => (data[1])));
  }

  getCountrieId$(id) {
    return this.http.get<any> (`https://api.worldbank.org/v2/country/${id}?per_page=1000&format=json`).pipe(map(data => (data[1][0])));
  }
}
