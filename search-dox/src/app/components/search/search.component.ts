import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, switchMap, tap } from 'rxjs';
import { CardItem } from 'src/app/services/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchBook = new FormControl('');
  bookname = '';
  index = -1;
  sbp = new Subscription();
  recommendlist: CardItem[] = [];

  constructor(private readonly bookService: BookService) {}

  ngOnInit(): void {
    this.sbp = this.searchBook.valueChanges
      .pipe(
        debounceTime(500),
        //     // tap((val: string) => {
        //     //   this.handleKeyup()
        //     // })
        switchMap((val) => {
          const val2 = val !== null ? val : '';
          return this.bookService.getBooks(val2);
        })
      )
      .subscribe();

    this.sbp.add(
      this.bookService.booklist$.subscribe((cards) => {
        this.recommendlist = cards;
      })
    );
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }

  @HostListener('document:keyup', ['$event'])
  trackTheArrowButton(event: KeyboardEvent) {
    if (event.code === 'ArrowUp' && this.index > 0) {
      this.index--;
    }
    if (
      event.code === 'ArrowDown' &&
      this.index < this.recommendlist.length - 1
    ) {
      this.index++;
    }
    if (event.code === 'Enter') {
      this.searchBook.setValue(this.recommendlist[this.index].bookname, {
        emitEvent: false,
      });
      this.bookService.emptyBooklist();
    }
  }

  handleKeyup() {
    this.bookService.getBooks(this.bookname).subscribe(console.log);
  }

  handleClick(card: CardItem) {
    this.bookService.emptyBooklist();
    this.searchBook.setValue(card.bookname, { emitEvent: false });
  }
  clearInput() {
    this.searchBook.setValue('', { emitEvent: false });
  }
  handlemouseenter() {
    this.index = -1;
  }
}
