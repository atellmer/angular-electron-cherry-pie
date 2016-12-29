import { ipcRenderer } from 'electron';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'tm-app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['styles.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  ngOnInit() {
    ipcRenderer.send('render-init', 'Render Process Init!');

    ipcRenderer.on('main-init', (ev, data) => {
      console.log(data);
    });
  }
}
