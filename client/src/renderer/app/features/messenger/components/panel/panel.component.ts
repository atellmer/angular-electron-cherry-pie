import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs';

import { IDialog } from '@/shared/models';


@Component({
  selector: 'tm-panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent implements OnInit {
  @Input() dialogs: Array<IDialog>;

  constructor() { }

  ngOnInit() { }
}
