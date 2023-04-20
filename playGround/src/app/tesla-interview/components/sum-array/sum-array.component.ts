import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum-array',
  templateUrl: './sum-array.component.html',
  styleUrls: ['./sum-array.component.scss'],
})
export class SumArrayComponent implements OnInit {
  arr = [1, 2, 3];
  sumarr = 0;

  ngOnInit(): void {
    this.sum();
  }

  sumAndRemove() {
    this.arr.pop();
    this.sum();
  }
  sum() {
    this.sumarr = this.arr.reduce((acc, cur) => acc + cur, 0);
  }
}
