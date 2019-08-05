import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  public async putAsync(url: string, content: any) {
    this.httpClient.put(url, content).subscribe(resp => {
      return resp;
    });
  }

  public async postAsync(url: string, content: any) {
    this.httpClient.post(url, content).subscribe(resp => {
      return resp;
    });
  }

  public async getAsync(url: string) {
    const requestUrl = url;
    const request: HttpRequest<any> = new HttpRequest('GET', requestUrl);
    return await this.httpClient
      .get(request.url)
      .toPromise()
      .then(resp => {
        return resp;
      })
      .catch((error: Error) => {
        return null;
      });
  }
}
