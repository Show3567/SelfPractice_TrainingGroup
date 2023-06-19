import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, filter, map, switchMap } from 'rxjs';
import { CardItem } from 'src/app/services/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchBook: FormControl = new FormControl('');
  booklist!: string[];
  recommendIndex: number = -1;

  @HostListener('document:keyup', ['$event'])
  selectRecommendByArrowButon(event: KeyboardEvent) {
    if (event.code === 'ArrowUp' && this.recommendIndex > 0) {
      this.recommendIndex--;
    } else if (
      event.code === 'ArrowDown' &&
      this.recommendIndex < this.bookService.currentBooksNumber
    ) {
      this.recommendIndex++;
    } else if (event.code === 'Enter' && this.recommendIndex > -1) {
      this.searchBook.setValue(this.booklist[this.recommendIndex], {
        emitEvent: false,
      });
      this.bookService.emptyList();
      this.recommendIndex = -1;
    }
  }

  constructor(private readonly bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.booklist$
      .pipe(
        map((cardbooks: CardItem[]) => {
          return cardbooks.reduce((acc: string[], cur: CardItem) => {
            acc.push(cur.bookname);
            return acc;
          }, []);
        })
      )
      .subscribe((data) => {
        this.booklist = data;
      });

    this.searchBook.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((bookname) => {
          return this.bookService.getBooks(bookname);
        })
      )
      .subscribe();
  }
  selectRecommend(name: string) {
    this.searchBook.setValue(name, { emitEvent: false });
    this.bookService.emptyList();
    this.recommendIndex = -1;
  }
  mouseoverEvent(index: number) {
    this.recommendIndex = index;
  }
}
