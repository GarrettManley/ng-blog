import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  public async putAsync(url: string, content: any) {
    return this.httpClient
      .put(url, content)
      .toPromise()
      .then(resp => {
        return resp;
      })
      .catch(error => {
        throw error;
      });
  }

  public async postAsync(url: string, content: any) {
    return this.httpClient
      .post(url, content)
      .toPromise()
      .then(resp => {
        return resp;
      })
      .catch(err => {
        throw err;
      });
  }

  public async getAsync(url: string): Promise<any> {
    const requestUrl = url;
    const request: HttpRequest<any> = new HttpRequest('GET', requestUrl);
    return await this.httpClient
      .get(request.url)
      .toPromise()
      .then(resp => {
        return resp;
      })
      .catch(error => {
        throw error;
      });
  }
}
