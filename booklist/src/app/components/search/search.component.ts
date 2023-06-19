import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, switchMap } from 'rxjs';
import { CardItem } from 'src/app/services/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchBook: FormControl = new FormControl('');
  booklist!: CardItem[];
  recommendIndex: number = -1;

  sbp = new Subscription();

  constructor(private readonly bookService: BookService) {}

  ngOnInit(): void {
    this.sbp = this.bookService.booklist$.subscribe((data) => {
      this.booklist = data;
    });

    this.sbp.add(
      this.searchBook.valueChanges
        .pipe(
          debounceTime(500),
          switchMap((bookname) => {
            return this.bookService.getBooks(bookname);
          })
        )
        .subscribe()
    );
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }

  @HostListener('document:keyup', ['$event'])
  selectRecommendByArrowButon(event: KeyboardEvent) {
    if (event.code === 'ArrowUp' && this.recommendIndex > 0) {
      this.recommendIndex--;
    } else if (
      event.code === 'ArrowDown' &&
      this.recommendIndex < this.bookService.currentBooksNumber - 1
    ) {
      this.recommendIndex++;
    } else if (event.code === 'Enter' && this.recommendIndex > -1) {
      this.searchBook.setValue(this.booklist[this.recommendIndex].bookname, {
        emitEvent: false,
      });
      this.bookService.selectBook(this.booklist[this.recommendIndex]);
      this.bookService.emptyList();
      this.recommendIndex = -1;
    }
  }

  selectRecommend(item: CardItem) {
    this.searchBook.setValue(item.bookname, { emitEvent: false });
    this.bookService.emptyList();
    this.recommendIndex = -1;
    this.bookService.selectBook(item);
  }

  emptyInput() {
    this.searchBook.setValue('');
  }

  mouseoverEvent(index: number) {
    this.recommendIndex = index;
  }
}
