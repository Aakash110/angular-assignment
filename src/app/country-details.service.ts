import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {
  private url = environment.apiUrl + 'name/';
  private fetchAllDetailsUrl = environment.apiUrl + 'all'
  constructor(private http: HttpClient) { }

  getCountriesFilteredByName(searchInput) {
    return this.http.get(this.url + searchInput);
  }

  getCountries() {
    return this.http.get(this.fetchAllDetailsUrl);
  }
}
