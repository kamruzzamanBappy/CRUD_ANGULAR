import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditcardsService } from 'src/app/services/creditcards.service';
import { CreditCard } from '../creditcard.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  creditCardDetails!: CreditCard;
  creditCardId!: Number;
  constructor(
    private creditCardsService: CreditcardsService,
    private router: ActivatedRoute
  ) {
    this.creditCardId = parseInt(this.router.snapshot.paramMap.get('id') || '');
    this.creditCardsService
      .getCreditCardById(Number(this.creditCardId))
      .subscribe((data: CreditCard): void => {
        this.creditCardDetails = data;
      });
  }
}
