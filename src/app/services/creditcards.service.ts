import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../creditcards/creditcard.interface';
@Injectable({
  providedIn: 'root',
})
export class CreditcardsService {
  private apiUrl = 'http://localhost:3000/creditcards';
  constructor(private httpClient: HttpClient) {}

  //CRUD Functionality
  //create new credit card
  createdCreditCard(creditCard: CreditCard): Observable<CreditCard> {
    return this.httpClient.post<CreditCard>(this.apiUrl, creditCard);
  }
  //getAll credit
  getCreditCards(): Observable<CreditCard[]> {
    return this.httpClient.get<CreditCard[]>(this.apiUrl);
  }
  //Get Specefic Credit
  getCreditCardById(id: number): Observable<CreditCard> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<CreditCard>(url);
  }
  // Update functionality
  updateCreditCard(creditCard: CreditCard): Observable<CreditCard> {
    const url = `${this.apiUrl}/${creditCard.id}`;
    return this.httpClient.put<CreditCard>(url, creditCard);
  }
  //Delete
  deleteCreditCard(id: Number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
