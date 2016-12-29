import { Component, OnInit } from '@angular/core';

import { FakeUserService } from '../../shared/services/fake-user.service';
import { User } from '../../shared/models/user.model';


@Component({
  selector: 'tm-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {
  public user: User;

  constructor(private fakeUserService: FakeUserService) {
    this.user = new User();
  }

  ngOnInit() {
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
      .subscribe((res: Array<User>) => {
        this.user.id = res[0].id;
        this.user.name = res[0].name;
        this.user.avatar = res[0].avatar;
        this.user.online = res[0].online;

        console.log('random user: ', this.user);
      });
  }
}
