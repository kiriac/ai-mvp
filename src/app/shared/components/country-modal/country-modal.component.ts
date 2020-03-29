import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {Covid19Service} from '../../services/covid19.service';

@Component({
  selector: 'app-country-modal',
  templateUrl: './country-modal.component.html'
})
export class CountryModalComponent implements OnInit{
  detailsOfCountry;
  constructor(
    public dialogRef: MatDialogRef<CountryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router,
    private covidService: Covid19Service) {
  }

  ngOnInit(): void {
  this.getDetailsOfCountry(`${this.router.url}/${this.data.country}`);
  }

  getDetailsOfCountry(reqParam) {
    this.covidService.getAllCcovid19(reqParam)
      .subscribe((resp) => {
          this.detailsOfCountry = {...resp.body};
          console.log(this.detailsOfCountry);
        },
        error => console.log(error));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
