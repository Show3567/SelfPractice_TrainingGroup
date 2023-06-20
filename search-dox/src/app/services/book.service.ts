import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookItem, CardItem, GoogleBookRes } from './book.interface';
import { BehaviorSubject, Observable, filter, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  private readonly books$ = new BehaviorSubject<CardItem[]>([]);
  booklist$ = this.books$.asObservable();

  constructor(private readonly http: HttpClient) {}

  getBooks(bookname: string): Observable<CardItem[]> {
    if (bookname.trim() === '') return of([]);

    return this.http.get<GoogleBookRes>(this.baseUrl + bookname).pipe(
      map((res: GoogleBookRes) => {
        const list = res.items.map(({ id, volumeInfo }: BookItem) => {
          const card: CardItem = {
            id: id,
            bookimg: volumeInfo.imageLinks?.thumbnail || '',
            bookname: volumeInfo.title,
            authors: volumeInfo.authors,
            publish: volumeInfo.publishedDate,
            description: volumeInfo.description,
          };
          return card;
        });
        this.books$.next(list);
        return list;
      })
    );
  }
  emptyBooklist() {
    this.books$.next([]);
  }
}
