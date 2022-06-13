import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject('BaseUrl') private baseUrl: string) {

  }

  private url(requestParameters: Partial<RequestParameters>): string {
    return `${requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl}/${requestParameters.controller}${requestParameters.action ? `/${requestParameters.action}` : ""}`;
  }

  get<T>(requestParameters: Partial<RequestParameters>, id?: string): Observable<T> {
    let url: string = "";
    if (requestParameters.FullEndpoint)
      url = requestParameters.FullEndpoint
    else
      url = `${this.url(requestParameters)}${id ? `/${id}` : ""}`;

    return this.httpClient.get<T>(url, { headers: requestParameters.headers });
  }

  post<T>(requestParameters: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParameters.FullEndpoint)
      url = requestParameters.FullEndpoint
    else
      url = `${this.url(requestParameters)}`;

    return this.httpClient.post<T>(url, body, { headers: requestParameters.headers });
  }

  put<T>(requestParameters: RequestParameters, body: Partial<T>): Observable<T> {

    let url: string = "";
    if (requestParameters.FullEndpoint)
      url = requestParameters.FullEndpoint;
    else
      url = `${this.url(requestParameters)}`;

    return this.httpClient.put<T>(url, body, { headers: requestParameters.headers });
  }

  delete(requestParameters: RequestParameters, id: string) {
    let url: string = "";
    if (requestParameters.FullEndpoint)
      url = requestParameters.FullEndpoint;
    else
      url = `${this.url(requestParameters)}/${id}`;
    return this.httpClient.delete(url, { headers: requestParameters.headers })
  }

}



export class RequestParameters {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  FullEndpoint?: string
}