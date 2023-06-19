import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, of, tap } from 'rxjs';
import { BookItem, CardItem, GoodBookRes } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  private readonly selectedBook$ = new BehaviorSubject<CardItem | null>(null);
  currentBook$ = this.selectedBook$.asObservable();

  private readonly books$ = new BehaviorSubject<CardItem[]>([]);
  booklist$ = this.books$.asObservable();

  get currentBooksNumber() {
    return this.books$.value.length;
  }

  constructor(private readonly http: HttpClient) {}

  getBooks(bookname: string) {
    if (bookname.trim() === '') {
      this.books$.next([]);
      return of([]);
    }
    return this.http.get<GoodBookRes>(this.baseUrl + bookname).pipe(
      filter((res) => {
        return res.totalItems > 10;
      }),
      tap((res) => {
        const list: CardItem[] = res.items.reduce(
          (acc: CardItem[], { id, volumeInfo }: BookItem) => {
            const book: CardItem = {
              id: id,
              bookimg: volumeInfo.imageLinks?.thumbnail || '',
              bookname: volumeInfo.title,
              authors: volumeInfo.authors,
              publish: volumeInfo.publishedDate,
              description: volumeInfo.description,
            };
            acc.push(book);
            return acc;
          },
          []
        );
        this.books$.next(list);
      })
    );
  }
  emptyList() {
    this.books$.next([]);
  }
  selectBook(book: CardItem) {
    this.selectedBook$.next(book);
  }
}
