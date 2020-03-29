import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ICovidAll19} from '../interfaces/covidAll19';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor( private http: HttpClient) { }
  configUrlCovid19 = 'https://covid19.mathdro.id/api';

  getAllCcovid19(url): Observable<HttpResponse<ICovidAll19>> {
    return this.http.get<ICovidAll19>(
      this.configUrlCovid19 + url , { observe: 'response'}
    );
  }
}
