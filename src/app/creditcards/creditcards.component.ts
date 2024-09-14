import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreditCard } from '../models/credit-card';
import { CreditcardsService } from '../services/creditcards.service';

/*
const TABLE_DATA: CreditCard[] = [
 
  {
    id: 1,
    name: 'Islamic Bank',
    description: 'Islamic Bank offers customers with various options',
    bankName: 'Islamic Bank',
    maxCredit: 30000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Follow the terms and conditions',
    createdDate: '2024-01-01',
    updatedDate: '2024-01-01',
  },
  {
    id: 2,
    name: 'Islamic Bank',
    description: 'Islamic Bank offers customers with various options',
    bankName: 'Islamic Bank',
    maxCredit: 30000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Follow the terms and conditions',
    createdDate: '2024-01-01',
    updatedDate: '2024-01-01',
  },
  {
    id: 3,
    name: 'Islamic Bank',
    description: 'Islamic Bank offers customers with various options',
    bankName: 'Islamic Bank',
    maxCredit: 30000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Follow the terms and conditions',
    createdDate: '2024-01-01',
    updatedDate: '2024-01-01',
  },
  {
    id: 3,
    name: 'Islamic Bank',
    description: 'Islamic Bank offers customers with various options',
    bankName: 'Islamic Bank',
    maxCredit: 30000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Follow the terms and conditions',
    createdDate: '2024-01-01',
    updatedDate: '2024-01-01',
  },
  {
    id: 3,
    name: 'Islamic Bank',
    description: 'Islamic Bank offers customers with various options',
    bankName: 'Islamic Bank',
    maxCredit: 30000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Follow the terms and conditions',
    createdDate: '2024-01-01',
    updatedDate: '2024-01-01',
  },
  {
    id: 3,
    name: 'Islamic Bank',
    description: 'Islamic Bank offers customers with various options',
    bankName: 'Islamic Bank',
    maxCredit: 30000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Follow the terms and conditions',
    createdDate: '2024-01-01',
    updatedDate: '2024-01-01',
  },
  {
    id: 3,
    name: 'Islamic Bank',
    description: 'Islamic Bank offers customers with various options',
    bankName: 'Islamic Bank',
    maxCredit: 30000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Follow the terms and conditions',
    createdDate: '2024-01-01',
    updatedDate: '2024-01-01',
  },
  {
    id: 3,
    name: 'Islamic Bank',
    description: 'Islamic Bank offers customers with various options',
    bankName: 'Islamic Bank',
    maxCredit: 30000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Follow the terms and conditions',
    createdDate: '2024-01-01',
    updatedDate: '2024-01-01',
  },
  {
    id: 3,
    name: 'Islamic Bank',
    description: 'Islamic Bank offers customers with various options',
    bankName: 'Islamic Bank',
    maxCredit: 30000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Follow the terms and conditions',
    createdDate: '2024-01-01',
    updatedDate: '2024-01-01',
  },
  {
    id: 3,
    name: 'Islamic Bank',
    description: 'Islamic Bank offers customers with various options',
    bankName: 'Islamic Bank',
    maxCredit: 30000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Follow the terms and conditions',
    createdDate: '2024-01-01',
    updatedDate: '2024-01-01',
  },
  
];
*/
@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss'],
})
export class CreditcardsComponent {
  creditcards: CreditCard[] = [];
  constructor(private creditcardsService: CreditcardsService) {
    this.creditcardsService.getCreditCards().subscribe((data: any[]) => {
      this.creditcards = data;
      this.dataSource = new MatTableDataSource(this.creditcards);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  dataSource = new MatTableDataSource(this.creditcards);
  displayColumns = [
    'select',
    'id',
    'name',
    'description',
    'bankName',
    'maxCredit',
    'interestRate',
    'active',
    'recommendedScore',
    'actions',
  ];
  // dataSource = new MatTableDataSource(TABLE_DATA);

  //mapping the actual data need 1.selection model

  selection = new SelectionModel(true, []);
  // checkbox in the table to select the data
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selectHandler(row: CreditCard) {
    this.selection.toggle(row as never);
  }
}
