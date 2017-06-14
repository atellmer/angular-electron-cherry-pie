import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '@/reducers';
import { UserActions } from '@/actions/user';
import { FakeUserService } from '@/shared/services/fake-user.service';
import { IUser } from '@/shared/models/user.model';


@Component({
  selector: 'tm-appbar-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['appbar.component.css'],
  template: `
    <tm-appbar [me]="me$ | async"></tm-appbar>
  `
})
export class AppbarContainerComponent implements OnInit {
  public me$: Observable<IUser>;

  constructor(
    private store: Store<fromRoot.AppState>,
    private fakeUserService: FakeUserService,
    private userActions: UserActions
  ) {
    this.me$ = this.store.select(state => state.user.me);
  }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.fakeUserService
      .getFakeUser({ results: 1 })
      .map(res => {
        return res.results.map(item => {
          return {
            id: item.login.salt,
            name: {
              first: item.name.first,
              last: item.name.last
            },
            avatar: {
              thumbnail: item.picture.thumbnail
            },
            online: true
          };
        });
      })
      .subscribe((res: Array<IUser>) => {
        this.store.dispatch(this.userActions.fetchUser(res[0]));
      });
  }
}
