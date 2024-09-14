import { Component } from '@angular/core';
import { CreditcardsService } from 'src/app/services/creditcards.service';
import { CreditCard } from '../creditcard.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  creditCardDetails!: CreditCard;
  constructor(private creditCardsService: CreditcardsService) {
    this.creditCardsService
      .getCreditCardById(3)
      .subscribe((data: CreditCard): void => {
        this.creditCardDetails = data;
      });
  }
}
