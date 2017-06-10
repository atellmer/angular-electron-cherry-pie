// Core
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

// Models
import { IDialog } from '../../../../shared/models/dialog-item.model';


@Component({
  selector: 'tm-dialog-tabs',
  templateUrl: 'dialog-tabs.component.html',
  styleUrls: ['dialog-tabs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogTabsComponent implements OnInit {
  @Input() dialogs: Array<IDialog>;

  constructor() { }

  ngOnInit() { }
}
