// Core
import {
  Component,
  OnInit,
  Input
} from '@angular/core';

// Models
import { IDialog } from '../../shared/models/dialog-item.model';


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
