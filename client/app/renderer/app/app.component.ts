import { ipcRenderer } from 'electron';
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';


@Component({
  selector: 'tm-app',
  styleUrls: ['styles.css'],
  template: `<tm-root-layout></tm-root-layout>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    ipcRenderer.send('render-init', 'Render Process Init!');

    ipcRenderer.on('main-init', (ev, data) => {
      console.log(data);
    });
  }
}
