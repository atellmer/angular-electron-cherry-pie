import { ipcRenderer } from 'electron';
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';


@Component({
  selector: 'tm-app',
  styleUrls: ['styles.css'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <tm-appbar-container></tm-appbar-container>
    <router-outlet></router-outlet>
  `
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
