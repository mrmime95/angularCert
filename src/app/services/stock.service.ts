import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import QuoteResponse from '../interfaces/quote-response';
import SymbolLookupResponse from '../interfaces/symbol-lookup-response';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  getStocksBySymbol(symbol: string) {
    return this.http.get<SymbolLookupResponse>(
      `https://finnhub.io/api/v1/search?q=${symbol}&token=bu4f8kn48v6uehqi3cqg`
    );
  }

  getFirstStockBySymbol(symbol: string) {
    return this.getStocksBySymbol(symbol).pipe(
      map((resp: SymbolLookupResponse) => resp.result[0])
    );
  }

  isValidSymbol(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.getStocksBySymbol(control.value).pipe(
        map((response) => (response.count > 0 ? null : { invalidSymbol: true }))
      );
    };
  }

  getQuoteOfSymbol(symbol: string) {
    return this.http.get<QuoteResponse>(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=bu4f8kn48v6uehqi3cqg`
    );
  }
}
