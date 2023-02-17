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
  moveDown(id: number) {}
  addRow(id: number) {}
}
