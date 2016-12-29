import {
  Component,
  OnInit,
  ElementRef
} from '@angular/core';


@Component({
  selector: 'tm-searchbar',
  templateUrl: 'searchbar.component.html',
  styleUrls: ['searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() { }

  onFocus(ev) {
    this.elementRef.nativeElement.style.backgroundColor = 'rgba(255, 255, 255, 0.20)';
  }

  onBlur(ev) {
    this.elementRef.nativeElement.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
  }
}
