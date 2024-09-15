import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',

  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  private subscription: Subscription | undefined;

  constructor(
    private creditcardsService: CreditcardsService,
    private router: Router
  ) {}
  saveCreditCard() {
    console.log('Forms Submitted');
    console.log(this.newCreditCard);
  }
  newCreditCard: CreditCard = {
    id: undefined,
    name: '',
    description: '',
    bankName: '',
    maxCredit: 5000,
    interestRate: 12,
    active: true,
    recommendedScore: '100-500',
    annualFee: 12,
    termsAndConditions: 'Terms and conditins for the credit card',
    createdDate: Date(),
    updatedDate: Date(),
  };
}
