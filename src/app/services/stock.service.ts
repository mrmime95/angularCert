import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import SymbolLookupResponse from '../interfaces/symbol-lookup-response';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  getStockBySymbol(symbol: string) {
    return this.http.get<SymbolLookupResponse>(
      `https://finnhub.io/api/v1/search?q=${symbol}&token=bu4f8kn48v6uehqi3cqg`
    );
  }

  isValidSymbol(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.getStockBySymbol(control.value).pipe(
        map((response) =>
          response.count > 0 ? response.result[0] : { invalidSymbol: true }
        )
      );
    };
  }
}
