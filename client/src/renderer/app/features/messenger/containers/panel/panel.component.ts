import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '@/reducers';
import { UserActions } from '@/actions';
import { FakeUserService } from '@/shared/services';
import { IDialog } from '@/shared/models';


@Component({
  selector: 'tm-panel-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<tm-panel [dialogs]="dialogs$ | async"></tm-panel>`,
})
export class PanelContainerComponent implements OnInit {
  public dialogs$: Observable<IDialog[]>;

  constructor(
    private store: Store<fromRoot.AppState>,
    private fakeUserService: FakeUserService,
    private userActions: UserActions
  ) {
    this.dialogs$ = this.store.select(state => state.user.dialogs);
  }

  ngOnInit() {
    this.fetchDialogs();
  }

  fetchDialogs() {
    this.fakeUserService
      .getFakeUser({ results: 20 })
      .map(res => {
        return res.results.map((item, index) => {
          return {
            id: index,
            user: {
              id: item.login.salt,
                name: {
                  first: item.name.first,
                  last: item.name.last
                },
              avatar: {
                thumbnail: item.picture.thumbnail
              },
              online: false
            },
            message: {
              from: {
                id: item.login.salt,
                name: {
                  first: item.name.first,
                  last: item.name.last
                },
                avatar: {
                  thumbnail: item.picture.thumbnail
                },
                online: false
              },
              to: {
                id: item.login.salt,
                name: {
                  first: item.name.first,
                  last: item.name.last
                },
                avatar: {
                  thumbnail: item.picture.thumbnail
                },
                online: false
              },
              value: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
              },
              status: {
                delivered: false,
                read: true,
                new: false
              },
              timestamp: new Date()
            }
          };
        });
      })
      .subscribe((res: Array<IDialog>) => {
        this.store.dispatch(this.userActions.fetchDialogs(res));
      });
  }
}
