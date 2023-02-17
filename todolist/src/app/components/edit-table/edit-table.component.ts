import { Component, OnInit } from '@angular/core';
import { EditTableService } from 'src/app/services/edit-table.service';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss'],
})
export class EditTableComponent implements OnInit {
  givenTable = {};

  constructor(private editTableServcie: EditTableService) {}

  ngOnInit(): void {
    this.givenTable = this.editTableServcie.givenTable;
  }
}
