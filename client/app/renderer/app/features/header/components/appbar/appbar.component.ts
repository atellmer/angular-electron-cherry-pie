import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { Observable } from 'rxjs';
import { IUser } from '../../../../shared/models/user.model';


@Component({
  selector: 'tm-appbar',
  templateUrl: 'appbar.component.html',
  styleUrls: ['appbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppbarComponent implements OnInit {
  @Input() me: IUser;

  constructor() { }

  ngOnInit() {
  }
}
