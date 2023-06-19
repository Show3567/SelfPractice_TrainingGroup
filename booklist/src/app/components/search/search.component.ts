import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private readonly bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks('javascript').subscribe(console.log);
  }
}
