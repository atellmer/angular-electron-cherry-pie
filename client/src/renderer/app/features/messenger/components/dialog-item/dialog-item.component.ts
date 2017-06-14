import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { IDialog } from '@/shared/models';


@Component({
  selector: 'tm-dialog-item',
  templateUrl: 'dialog-item.component.html',
  styleUrls: ['dialog-item.component.css']
})
export class DialogItemComponent implements OnInit {
  @Input() dialog: IDialog;

  constructor() { }

  ngOnInit() { }
}
