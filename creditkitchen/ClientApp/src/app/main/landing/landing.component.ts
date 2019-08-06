import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public cards = [{
    icon: 'creditcards.svg',
    title: 'Credit Cards',
    url:'/creditcards/best-credit-cards'
  }, {
    icon: 'savings.svg',
      title: 'Savings Account',
      url: '/blog/banking/defining-savings-account'
  }, {
    icon: 'broker.svg',
      title: 'Online Broker',
      url: '/blog/investing/how-to-choose-a-financial-advisor'
  }, {
    icon: 'house.svg',
      title: 'Mortgage',
      url: '/blog/mortgages/top-reasons-to-refinance-your-mortgage'
  }, {
    icon: 'funds.svg',
      title: '401k Account',
      url: '/blog/investing/what-is-a-401k-plan-and-how-does-it-work'
  }]

  public foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  public items = [{
    color: '#fff',
    background: '#074a76',
    title: 'Easy money',
    text: 'Sign up for no annual fee credit cards and receive cash welcome bonuses',
    button: 'YAY FREE MONEY',
    url: '/creditcards/best-cash-back-cards',
    size: 45
  }, {
    color: '#000000',
    background: '#e3f9f1',
    title: 'When life gives you lemons',
    text: 'Avoid overdraft fees by following these simple steps',
      button: 'STEP BY STEP',
      url: '/blog/banking/top-ways-to-avoid-overdraft-fees',
    size: 55
  }, {
    color: '#000000',
    background: '#feefd0',
    title: 'Best bang for buck',
    text: 'Wondering how to get the most from credit cards? Check out these rewards.',
    button: 'SHOW ME',
    url: '/creditcards/best-rewards-cards',
    size: 60
  }, {
    color: '#000000',
    background: '#deefff',
    title: 'Buying a home?',
    text: 'Home buying is stressful, check out these tips',
      button: 'START HERE',
      url: '/blog/mortgages/the-first-time-home-buyer-guide',
    size: 40
  }, {
    color: '#000000',
    background: '#e3f9f1',
    title: 'Advice from the experts',
    text: 'It\'s never too late to start. Learn how to pick the best advisors.',
    button: 'LET\'S DO IT',
    url:'/blog/investing/how-to-choose-a-financial-advisor',
    size: 40
  }, {
    color: '#fff',
    background: '#54a0e8',
    title: 'Did you know',
    text: 'Becoming an authorized user on someone elses credit can help yours?',
    button: 'SHOW ME HOW',
      url: '/blog/creditcards/boosting-your-credit-score-by-becoming-an-authorized-user',
    size: 60
  }]

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  buyEgret() {
    window.open('https://www.linkedin.com/in/novels/');
  }

}
