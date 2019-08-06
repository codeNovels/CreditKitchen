import { Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { BlogPostListingComponent } from './blog/blog-post-listing/blog-post-listing.component';
import { BlogPostDetailsComponent } from './blog/blog-post-details/blog-post-details.component';
import { BlogCreditcardsComponent } from './blog/blog-creditcards/blog-creditcards.component';
import { BlogBankingComponent } from './blog/blog-banking/blog-banking.component';
import { BlogInvestingComponent } from './blog/blog-investing/blog-investing.component';
import { BlogMortgagesComponent } from './blog/blog-mortgages/blog-mortgages.component';
import { BlogLoansComponent } from './blog/blog-loans/blog-loans.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { CreditCardDetailsComponent } from './modal/credit-card-details/credit-card-details.component';
import { BestCreditcardsComponent } from './creditcards/best-creditcards/best-creditcards.component';
import { BestRewardsCardsComponent } from './creditcards/best-rewards-cards/best-rewards-cards.component';
import { BestCashBackCardsComponent } from './creditcards/best-cashback-cards/best-cashback-cards.component';
import { BestTravelCardsComponent } from './creditcards/best-travel-cards/best-travel-cards.component';
import { BestBusinessCardsComponent } from './creditcards/best-business-cards/best-business-cards.component';
import { BestStudentCardsComponent } from './creditcards/best-student-cards/best-student-cards.component';

import { PrivacyPolicyComponent } from './legal/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './legal/terms-of-use/terms-of-use.component';

export const HomeRoutes: Routes = [
  { path: '', component: MainComponent },

  { path: 'blog', component: BlogPostListingComponent },
  { path: 'blog/:slug', component: BlogPostDetailsComponent },
  { path: 'blog/creditcards/:slug', component: BlogCreditcardsComponent },
  { path: 'blog/banking/:slug', component: BlogBankingComponent },
  { path: 'blog/investing/:slug', component: BlogInvestingComponent },
  { path: 'blog/mortgages/:slug', component: BlogMortgagesComponent },
  { path: 'blog/loans/:slug', component: BlogLoansComponent },

  { path: 'creditcards/details/:slug', component: CreditCardDetailsComponent },
  { path: 'creditcards/best-credit-cards', component: BestCreditcardsComponent },
  { path: 'creditcards/best-rewards-cards', component: BestRewardsCardsComponent },
  { path: 'creditcards/best-cash-back-cards', component: BestCashBackCardsComponent },
  { path: 'creditcards/best-travel-cards', component: BestTravelCardsComponent },
  { path: 'creditcards/best-business-cards', component: BestBusinessCardsComponent },
  { path: 'creditcards/best-student-cards', component: BestStudentCardsComponent },

  { path: 'legal/privacy-policy', component: PrivacyPolicyComponent },
  { path: 'legal/terms-of-use', component: TermsOfUseComponent },

  { path: 'backoffice/dashboard', component: DashboardComponent },
];
