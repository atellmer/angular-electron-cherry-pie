import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FakeUserService {

  constructor(private http: Http) { }

  getFakeUser(): Observable<any> {
    const URL = 'https://randomuser.me/api';

    const data$ = this.http
      .get(URL)
      .map((res: Response) => res.json());

    return data$;
  }
}
