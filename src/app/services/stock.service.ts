import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ChangesResponse from '../interfaces/changes-response';
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
    return this.http
      .get<QuoteResponse>(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=bu4f8kn48v6uehqi3cqg`
      )
      .pipe(
        map((quote) => ({
          todayChange: quote.dp || 0,
          currentPrice: quote.c || 0,
          openingPrice: quote.o || 0,
          highPrice: quote.h || 0,
        }))
      );
  }

  getLastYearChangesOfSymbol(symbol: string) {
    const d = new Date();
    const fromDate = `${d.getFullYear() - 1}-01-01`;
    const toDate = `${d.getFullYear()}-${(d.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${d.getDate()}`;
    return this.http
      .get<ChangesResponse>(
        `https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=bu4f8kn48v6uehqi3cqg`
      )
      .pipe(map((result) => result.data));
  }

  getLast3MonthsChangesOfSymbol(symbol: string) {
    const d = new Date();
    const fromDate = `${d.getFullYear()}-${(d.getMonth() + 1 - 3)
      .toString()
      .padStart(2, '0')}-01`;
    const toDate = `${d.getFullYear()}-${(d.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${d.getDate()}`;
    return this.http
      .get<ChangesResponse>(
        `https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=bu4f8kn48v6uehqi3cqg`
      )
      .pipe(map((result) => result.data));
  }
}
