import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class SearchService {
  private _initURL = "https://public-be.oski.io/hotel/v1.0/search/init";
  private _statusURL = "https://public-be.oski.io/hotel/v1.0/search/status";
  private _resultURL = "https://public-be.oski.io/hotel/v1.0/search/results";

  private _sessionId: string;
  
  constructor(private http: Http) {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json'); 
    headers.append('oski-tenantId', 'Demo'); 
    headers.append('Accept-Encoding', 'Accept-Encoding'); 
    headers.append('Accept-language', 'en-US'); 
    headers.append('en-US', 'en-US'); 
   
  }

  getCurrentSessionId() : string {
    return this._sessionId;
  }

  getStaus() : Observable<any> {
    let headers = new Headers();

    return this.http.post(this._statusURL, {}, { headers: headers})
          .map((response: Response) => {
             this._sessionId = response.json();
          })
          .catch(this.handleError);
  }

  getResults(): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.
                post(this._resultURL, {}, { headers: headers})
                .map((response: Response) => {
                  return <any>response.json();
                })
                .catch(this.handleError);
 }

  postSearchData(data): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.
                post(this._initURL, data, { headers: headers})
                .map((response: Response) => {
                  return <any>response.json();
                })
                .catch(this.handleError);
  }

  private handleError (error: Response) {
    return Observable.throw(error.statusText);
  }
}
