import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdvertiserDisclosureComponent } from 'app/main/modal/advertiser-disclosure/advertiser-disclosure.component';
import { RatingsComponent } from 'app/main/modal/ratings/ratings.component';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss']
})
export class CreditCardDetailsComponent implements OnInit {
  public slug: any;
  public creditcard: any;



  public creditscores = [
    { minScore: 350, maxScore: 629, text: 'Poor' },
    { minScore: 630, maxScore: 689, text: 'Average' },
    { minScore: 690, maxScore: 719, text: 'Good' },
    { minScore: 720, maxScore: 850, text: 'Excellent' },
  ];

  public selectedCategory = {
    icon: 'trophy',
    title: 'Best',
    value: 'best',
    selected: true
  };

  constructor(private http: Http, private matDialog: MatDialog, private route: ActivatedRoute) {
    this.selectedCategory = {
      icon: 'trophy',
      title: 'Best',
      value: 'best',
      selected: true
    };

    var searchValue = location.search === "" ? location.pathname.split("%3F").pop().replace('category','?category').replace('%3D','=') :  location.search
    this.selectedCategory.value = decodeURIComponent(searchValue.split("=").pop());

    var pathName = location.pathname;
    if (location.pathname.indexOf('%3F') > -1) {
      pathName = location.pathname.substr(0, location.pathname.indexOf('%3F'))
    };
    this.slug = decodeURIComponent(pathName.split("/").pop());

    http.get('api/creditCard/details?name='+this.slug)
      .map(result => result.json())
      .subscribe(result => {
        this.creditcard = result;
      }, error => console.error(error));

    
  }

  ngOnInit() {

  }

  openRatingsDialog(){
    this.matDialog.open(RatingsComponent);
  }

  openAdvertiserDisclosureDialog(){
    this.matDialog.open(AdvertiserDisclosureComponent);
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
