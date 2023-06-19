import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { BookItem, CardItem, GoodBookRes } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  private readonly books$ = new BehaviorSubject<BookItem[]>([]);

  constructor(private readonly http: HttpClient) {}

  getBooks(bookname: string) {
    return this.http.get<GoodBookRes>(this.baseUrl + bookname).pipe(
      map((res) => {
        return res.items.reduce((acc: CardItem[], cur: BookItem) => {
          const book: CardItem = {
            id: cur.id,
            bookimg: cur.volumeInfo.imageLinks.thumbnail,
            bookname: cur.volumeInfo.title,
            authors: cur.volumeInfo.authors,
            publish: cur.volumeInfo.publishedDate,
            description: cur.volumeInfo.description,
          };
          acc.push(book);
          return acc;
        }, []);
      })
    );
  }
}
