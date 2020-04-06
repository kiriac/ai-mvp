import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Covid19Service} from '../../shared/services/covid19.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {CountryModalComponent} from '../../shared/components/country-modal/country-modal.component';
import {SnackbarComponent} from '../../shared/components/snackbar/snackbar.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ICovidAll19} from '../../shared/interfaces/covidAll19';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit {

  constructor(
    private router: Router,
    private covidService: Covid19Service,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
  }

  myForm = new FormControl();
  covid: ICovidAll19;
  options = [];
  filteredOptions: Observable<string[]>;

  private static capitalize(inputValue) {
    if (typeof inputValue !== 'string') {
      return '';
    }
    return inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  }

  ngOnInit() {
    this.getAllCovid19Countries(this.router.url);
    this.filteredOptions = this.myForm.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  getAllCovid19Countries(reqParam: string) {
    this.covidService.getAllCcovid19(reqParam)
      .subscribe((resp) => {
          this.covid = {...resp.body};
          this.addOptionsValue(this.covid);
          return this.covid;
        },
        error => console.log(error));
  }

  openDialog(): void {
    const inputValue = CountryComponent.capitalize(this.myForm.value);
    if (!this.options.includes(inputValue)) {
      this.openSnackBar();
      return;
    }
    const dialogRef = this.dialog.open(CountryModalComponent, {
      width: '500px',
      data: {country: this.myForm.value}
    });
    dialogRef.afterClosed();
  }

  private addOptionsValue(covid) {
    this.options.push(covid.countries.map(val => val.name));
    return this.options = this.options[0];
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 5000,
    });
  }
}
