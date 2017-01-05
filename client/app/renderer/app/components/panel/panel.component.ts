// Core
import { Component, OnInit } from '@angular/core';

// Services
import { FakeUserService } from '../../shared/services/fake-user.service';

// Models
import { IDialog } from '../../shared/models/dialog-item.model';


@Component({
  selector: 'tm-panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.css']
})
export class PanelComponent implements OnInit {
  public dialogs: Array<IDialog>;

  constructor(
    private fakeUserService: FakeUserService
  ) { }

  ngOnInit() {
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
        this.dialogs = res;
      });
  }
}
