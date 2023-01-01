export interface IResCurrencies {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

export interface IResponse {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: IResCurrencies[];
}

export interface ICurrencies {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  rubValue: string;
  usdValue: string;
  eurValue: string;
  cnyValue: string;
  Name: string;
}

export interface IInitialState {
  lastUpdate: number;
  currencies: ICurrencies[];
  isLoading: boolean;
}
