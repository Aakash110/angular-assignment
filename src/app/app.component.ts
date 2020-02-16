import { Component, ViewChild, ElementRef } from '@angular/core';
import { CountryDetailsService } from './country-details.service';
import 'rxjs/Rx'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('numericCodeInput') nameInputRef1: ElementRef;
  @ViewChild('nativeNameInput') nameInputRef2: ElementRef;
  title = 'angular-assignment';
  filteredCountryDetails;
  fetchAllData;
  selectedLevel;
  selectedData;
  showingData;
  previousShowingData;

  constructor(private countryDetailsService: CountryDetailsService) {
  }

  inputSearchKeyPress(event) {
    let searchInput = event.target.value
    if(searchInput.length >= 1) {
      this.countryDetailsService.getCountriesFilteredByName(searchInput).subscribe( data => {
        this.filteredCountryDetails = data;
      });
    }
  }

  searchData() {
   this.countryDetailsService.getCountries().subscribe( data => {
    this.fetchAllData = data;
   });
  }

  selected() {
    this.countryDetailsService.getCountries().subscribe( data => {
      this.selectedData = data;
      this.selectedData.forEach(element => {
        if(this.selectedLevel == element.name) {
          this.showingData = [element];
        }
      });
    });
    this.previousShowingData = this.showingData;
    console.log(this.selectedLevel);
  }

  compareTwoObject() {
    if(this.showingData[0].name !== this.previousShowingData[0].name) {
      this.nameInputRef.nativeElement.style.color = 'red';
    }
    if(this.showingData[0].numericCode !== this.previousShowingData[0].numericCode) {
      this.nameInputRef1.nativeElement.style.color = 'red';
    }
    if(this.showingData[0].nativeName !== this.previousShowingData[0].nativeName) {
      this.nameInputRef2.nativeElement.style.color = 'red';
    }
  }
}
