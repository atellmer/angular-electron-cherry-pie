import { Injectable } from '@angular/core';


@Injectable()
export class PlatformDetector {

  constructor() {}

  public getPlatformSize() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    console.log('width: ', width);
    console.log('height: ', height);

    return {
      width, height
    };
  }
}
