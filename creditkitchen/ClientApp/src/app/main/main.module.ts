import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule,
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutes } from "./main.routing";
import { MainComponent } from './main.component';
import { WINDOW_PROVIDERS } from '../shared/helpers/window.helper';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { SharedDirectivesModule } from 'app/shared/directives/shared-directives.module';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';
import { BlogPostListingComponent } from './blog/blog-post-listing/blog-post-listing.component';
import { BlogPostDetailsComponent } from './blog/blog-post-details/blog-post-details.component';
import { DisqusModule } from 'ngx-disqus';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { AdvertiserDisclosureComponent } from './modal/advertiser-disclosure/advertiser-disclosure.component';
import { RatingsComponent } from './modal/ratings/ratings.component';
import { CreditCardDetailsComponent } from './modal/credit-card-details/credit-card-details.component';
import { BestCreditcardsComponent } from './creditcards/best-creditcards/best-creditcards.component';
import { BestRewardsCardsComponent } from './creditcards/best-rewards-cards/best-rewards-cards.component';
import { BestCashBackCardsComponent } from './creditcards/best-cashback-cards/best-cashback-cards.component';
import { BestTravelCardsComponent } from './creditcards/best-travel-cards/best-travel-cards.component';
import { BestBusinessCardsComponent } from './creditcards/best-business-cards/best-business-cards.component';
import { BestStudentCardsComponent } from './creditcards/best-student-cards/best-student-cards.component';
import { TermsOfUseComponent } from './legal/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy/privacy-policy.component';
import { BlogCreditcardsComponent } from './blog/blog-creditcards/blog-creditcards.component';
import { BlogBankingComponent } from './blog/blog-banking/blog-banking.component';
import { BlogInvestingComponent } from './blog/blog-investing/blog-investing.component';
import { BlogMortgagesComponent } from './blog/blog-mortgages/blog-mortgages.component';
import { BlogLoansComponent } from './blog/blog-loans/blog-loans.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
    SharedComponentsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    NguCarouselModule,
    DisqusModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    MainComponent,  
    BestCreditcardsComponent,
    BestRewardsCardsComponent,
    BestCashBackCardsComponent,
    BestTravelCardsComponent,
    BestBusinessCardsComponent,
    BestStudentCardsComponent,
    BlogPostListingComponent,
    BlogPostDetailsComponent,
    LandingComponent,
    DashboardComponent,
    AdvertiserDisclosureComponent,
    RatingsComponent,
    CreditCardDetailsComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    BlogCreditcardsComponent,
    BlogBankingComponent,
    BlogInvestingComponent,
    BlogMortgagesComponent,
    BlogLoansComponent,
    ContactComponent,
  ],
  entryComponents: [AdvertiserDisclosureComponent, RatingsComponent, CreditCardDetailsComponent],
  providers: [WINDOW_PROVIDERS]

})
export class MainModule { }
