import {
  Component,
  OnInit,
  Input
} from '@angular/core';


@Component({
  selector: 'tm-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() source: string;
  @Input() width: number;
  @Input() height: number;

  constructor() { }

  ngOnInit() { }

}
