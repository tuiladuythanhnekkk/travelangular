import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, retry, catchError, throwError } from 'rxjs';
import { Idestinations } from '../interfaces/Idestinations';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private _http: HttpClient) { }

  getDestinations():Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOption:Object = {
      headers:headers,
      responseType: "text"
    }

    return this._http.get<any>("/destinations", requestOption).pipe(
      map(res => JSON.parse(res) as Array<Idestinations>),
      retry(3),
      catchError(this.handleError)
    )
  }

  handleError(error:HttpErrorResponse) {
    return throwError( () => new Error(error.message))
  }
}
