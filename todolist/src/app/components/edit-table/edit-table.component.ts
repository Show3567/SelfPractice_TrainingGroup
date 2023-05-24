import { Component, OnInit } from '@angular/core';
import { EditTableService } from 'src/app/services/edit-table.service';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss'],
})
export class EditTableComponent implements OnInit {
  givenTable: any = {};

  constructor(private editTableServcie: EditTableService) {}

  ngOnInit(): void {
    this.givenTable = this.editTableServcie.givenTable;
  }

  moveUp(id: number) {
    if (id > 1) {
      const mark = this.givenTable.rows[id - 2];
      this.givenTable.rows[id - 2] = {
        ...this.givenTable.rows[id - 1],
        id: id - 1,
      };
      this.givenTable.rows[id - 1] = {
        ...mark,
        id: id,
      };
    }
  }
  moveDown(id: number) {
    if (id < this.givenTable.rows.length) {
      const mark = this.givenTable.rows[id];
      this.givenTable.rows[id] = {
        ...this.givenTable.rows[id - 1],
        id: id + 1,
      };
      this.givenTable.rows[id - 1] = {
        ...mark,
        id: id,
      };
    }
  }
  addRow(id: number) {
    const arr = this.givenTable.rows;
    for (let i = id; i < arr.length; i++) {
      arr[i].id++;
    }
    this.givenTable.rows.splice(id, 0, {
      id,
      values: new Array(this.givenTable.header.length).fill(''),
    });
  }
  deleteRow(id: number) {
    const arr = this.givenTable.rows;
    for (let i = id; i < arr.length; i++) {
      arr[i].id--;
    }
    this.givenTable.rows.splice(id - 1, 1);
  }
}
