import { Component } from '@angular/core';

@Component({
  selector: 'app-testcarousel',
  templateUrl: './testcarousel.component.html',
  styleUrls: ['./testcarousel.component.scss'],
})
export class TestcarouselComponent {
  private initnum = 6;
  private initarr = new Array(this.initnum).fill(0).map((ele, i) => ({
    id: i,
  }));
  list: any = [];
  position = 0 - this.initnum * 10;
  useAnimation = true;

  ngOnInit(): void {
    this.list = [...this.initarr, ...this.initarr, ...this.initarr];
  }

  toRight() {
    if (this.position / 10 === -1) {
      this.useAnimation = false;
      this.position = 0 - this.initnum * 10;
    }
    this.position += 10;
  }

  toLeft() {
    if (this.position / 10 === 0 - (2 * this.initnum - 1)) {
      this.useAnimation = false;
      this.position = 0 - this.initnum * 10;
    }
    this.position -= 10;
  }

  transitionend(ele: HTMLElement) {
    console.log(ele.style.transition);
    this.useAnimation = true;
  }
}
