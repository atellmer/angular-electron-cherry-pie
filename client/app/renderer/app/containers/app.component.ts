import { ipcRenderer } from 'electron';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import { UserActions } from '../actions/user';
import { FakeUserService } from '../shared/services/fake-user.service';
import { IUser } from '../shared/models/user.model';
import { IDialog } from '../shared/models/dialog-item.model';


@Component({
  selector: 'tm-app-root',
  styleUrls: ['styles.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<tm-root-layout [me]="me$" [dialogs]="dialogs$"></tm-root-layout>`
})
export class AppComponent implements OnInit {
  public me$: Observable<IUser>;
  public dialogs$: Observable<IDialog[]>;

  constructor(
    private store: Store<fromRoot.AppState>,
    private fakeUserService: FakeUserService,
    private userActions: UserActions
  ) {
    this.me$ = this.store.select(state => state.user.me);
    this.dialogs$ = this.store.select(state => state.user.dialogs);
  }

  ngOnInit() {
    ipcRenderer.send('render-init', 'Render Process Init!');

    ipcRenderer.on('main-init', (ev, data) => {
      console.log(data);
    });

    this.fetchUser();
    this.fetchDialogs();
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

  fetchDialogs() {
    this.fakeUserService
      .getFakeUser({ results: 10 })
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
