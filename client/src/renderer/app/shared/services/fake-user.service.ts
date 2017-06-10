import { Injectable } from '@angular/core';
import {
  Http,
  Response,
  URLSearchParams
} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FakeUserService {

  constructor(private http: Http) { }

  getFakeUser(options: any): Observable<any> {
    const params: URLSearchParams = new URLSearchParams();
    const URL = 'https://randomuser.me/api';

    params.set('results', options.results);

    const data$ = this.http
      .get(URL, { search: params })
      .map((res: Response) => res.json());

    return data$;
  }
}
