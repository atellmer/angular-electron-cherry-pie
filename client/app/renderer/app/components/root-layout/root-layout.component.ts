import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { Observable } from 'rxjs';
import { IUser } from '../../shared/models/user.model';
import { IDialog } from '../../shared/models/dialog-item.model';


@Component({
  selector: 'tm-root-layout',
  templateUrl: 'root-layout.component.html',
  styleUrls: ['root-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootLayoutComponent implements OnInit {
  @Input() me: Observable<IUser>;
  @Input() dialogs: Observable<IDialog[]>;

  constructor() {}

  ngOnInit() { }
}
