  export interface IConfirmed {
    value: number;
    detail: string;
  }

  export interface IRecovered {
    value: number;
    detail: string;
  }

  export interface IDeaths {
    value: number;
    detail: string;
  }

  export interface IDailyTimeSeries {
    pattern: string;
    example: string;
  }

  export interface ICountryDetail {
    pattern: string;
    example: string;
  }

  export interface ICovidAll19 {
    confirmed: IConfirmed;
    recovered: IRecovered;
    deaths: IDeaths;
    dailySummary: string;
    dailyTimeSeries: IDailyTimeSeries;
    image: string;
    source: string;
    countries: string;
    countryDetail: ICountryDetail;
    lastUpdate: Date;
    provinceState?: string;
    countryRegion?: string;
    lat?: number;
    long?: number;
    active?: number;
    admin2?: string;
    fips?: string;
    combinedKey?: string;
    incidentRate?: any;
    peopleTested?: any;
    iso2?: string;
    iso3?: string;
  }

