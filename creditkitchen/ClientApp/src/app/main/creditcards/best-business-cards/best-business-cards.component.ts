import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdvertiserDisclosureComponent } from 'app/main/modal/advertiser-disclosure/advertiser-disclosure.component';
import { RatingsComponent } from 'app/main/modal/ratings/ratings.component';
import { CreditCardDetailsComponent } from 'app/main/modal/credit-card-details/credit-card-details.component';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-best-business-cards',
  templateUrl: './best-business-cards.component.html',
  styleUrls: ['./best-business-cards.component.scss']
})
export class BestBusinessCardsComponent implements OnInit {

  public creditscores = [
    { minScore: 350, maxScore: 629, text: 'Poor' },
    { minScore: 630, maxScore: 689, text: 'Average' },
    { minScore: 690, maxScore: 719, text: 'Good' },
    { minScore: 720, maxScore: 850, text: 'Excellent' },
  ];

  public creditcards = [];
  public selectedCategory = {
    icon: 'luggage',
    title: 'Business',
    value: 'business',
    selected: false
  };

  constructor(private http: Http, private matDialog: MatDialog, private location: Location, private activatedRoute: ActivatedRoute, private router: Router) {
    http.get('api/creditCard/?category=business')
      .map(result => result.json())
      .subscribe(result => {
        this.creditcards = result;
      }, error => console.error(error));
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  openRatingsDialog() {
    this.matDialog.open(RatingsComponent);
  }

  openAdvertiserDisclosureDialog() {
    this.matDialog.open(AdvertiserDisclosureComponent);
  }

  openCreditCardDetailsDialog(name) {
    if (window.innerWidth >= 768) {
      this.location.go('/creditcards/details/' + name + '?category=' + this.selectedCategory.value)
      this.matDialog.open(CreditCardDetailsComponent, { height: '100%', width: '90em' });

      this.matDialog.afterAllClosed.subscribe(() => {
        this.location.go('/creditcards/best-credit-cards/')
      });
    } else {
      this.router.navigate(['/creditcards/details/' + name + '?category=' + this.selectedCategory.value])
    }
  }

  calcCreditScoreMinMax(creditcard, creditscore, rangeType) {
    if (rangeType === "min") {
      if (creditcard.minScore > creditscore.maxScore) {
        return false;
      } else if (creditcard.minScore >= creditscore.minScore) {
        return true
      }
    } else if (rangeType === "max") {
      if (creditcard.maxScore < creditscore.minScore) {
        return false;
      } else if (creditcard.maxScore <= creditscore.maxScore) {
        return true
      }
    } else {
      if (creditcard.maxScore >= creditscore.minScore && creditcard.minScore > creditscore.maxScore) {
        return false;
      } else if (creditcard.maxScore >= creditscore.minScore) {
        if (creditcard.minScore <= creditscore.maxScore) {
          return true
        }
      } else {
        return false;
      }
    }
  }



}
