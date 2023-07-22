import { Component } from '@angular/core';

@Component({
  selector: 'app-testcarousel',
  templateUrl: './testcarousel.component.html',
  styleUrls: ['./testcarousel.component.scss'],
})
export class TestcarouselComponent {
  private initnum = 6;
  private i = this.initnum;
  private initarr = new Array(this.initnum).fill(0).map((ele, i) => ({
    id: i,
  }));
  list: any = [];
  left = 0;
  position = 0 - this.initnum * 10;

  ngOnInit(): void {
    this.list = [...this.initarr, ...this.initarr, ...this.initarr];
  }

  toRight() {
    if (this.i === 0) {
      this.position = this.position - this.initnum * 10;
      this.i = this.initnum;
    }
    this.i--;
    this.left += 10;
  }

  toLeft() {
    if (this.i === this.initnum * 2) {
      this.position = this.position + this.initnum * 10;
      this.i = this.initnum;
    }
    this.i++;
    this.left -= 10;
  }
}
