import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistComponent } from './todo-list.component';
import { TodoService } from 'src/app/services/todo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { baseUrl } from 'src/app/app.module';
import { FormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [TodolistComponent],
      providers: [
        TodoService,
        {
          provide: baseUrl,
          useValue: 'https://jsonplaceholder.typicode.com',
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
