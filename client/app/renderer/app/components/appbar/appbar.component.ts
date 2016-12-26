import { Component, OnInit } from '@angular/core';
import { FakeUserService } from '../../services/fake-user.service';


@Component({
  selector: 'tm-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {
  public userAvatar: string;

  constructor(private fakeUserService: FakeUserService) {}

  ngOnInit() {
    this.fakeUserService
      .getFakeUser()
      .subscribe((res: any) => {
        this.userAvatar = res.results[0].picture.thumbnail;
        console.log('random user: ', res.results[0]);
      });
  }
}
