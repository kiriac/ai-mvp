import {Component, OnInit} from '@angular/core';
import {Covid19Service} from '../../shared/services/covid19.service';
import {ICovidAll19} from '../../shared/interfaces/covidAll19';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  covid19All: ICovidAll19;
  param = '';

  constructor(private covidService: Covid19Service) {
  }

  ngOnInit() {
    this.getAllCovid19(this.param);
  }

  getAllCovid19(reqParam) {
    this.covidService.getAllCcovid19(reqParam)
      .subscribe((resp) => {
          this.covid19All = {...resp.body};
          console.log(this.covid19All);
        },
        error => console.log(error)
      );
  }
}
