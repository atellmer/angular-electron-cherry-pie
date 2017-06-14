import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { IDialog } from '@/shared/models';


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
