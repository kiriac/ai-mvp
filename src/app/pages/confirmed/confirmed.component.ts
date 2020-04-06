import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Covid19Service} from '../../shared/services/covid19.service';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {ICovidAll19} from '../../shared/interfaces/covidAll19';


@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html'
})
export class ConfirmedComponent {
  displayedColumns: string[] = [
    'Country/Province',
    'Confirmed',
    'Recovered',
    'Deaths'
  ];
  isLoadingResults = true;
  dataSource: MatTableDataSource<ICovidAll19>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private router: Router,
              private covidService: Covid19Service) {
    let ELEMENT_DATA;
    this.covidService.getAllCcovid19(this.router.url)
      .subscribe((resp) => {
          ELEMENT_DATA = resp.body;
          this.dataSource = new MatTableDataSource(ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
          this.isLoadingResults = false;
        },
        error => console.log(error)
      );
  }
}
