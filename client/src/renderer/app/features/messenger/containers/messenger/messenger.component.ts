import {
  Component,
  OnInit,
} from '@angular/core';

import { PlatformDetector } from '../../../../shared/services/platform-detector.service';


@Component({
  selector: 'tm-messenger-container',
  templateUrl: 'messenger.component.html',
  styleUrls: ['messenger.component.css']
})
export class MessengerContainerComponent implements OnInit {

  constructor(private platformDetector: PlatformDetector) {}

  ngOnInit() {
    this.platformDetector.getPlatformSize();
  }
}
