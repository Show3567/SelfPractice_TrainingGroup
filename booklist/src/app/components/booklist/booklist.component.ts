import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardItem } from 'src/app/services/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit, OnDestroy {
  currentItem!: CardItem | null;
  sbp = new Subscription();

  constructor(private readonly bookService: BookService) {}

  ngOnInit(): void {
    this.sbp = this.bookService.currentBook$.subscribe((book) => {
      this.currentItem = book;
    });
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }
}
