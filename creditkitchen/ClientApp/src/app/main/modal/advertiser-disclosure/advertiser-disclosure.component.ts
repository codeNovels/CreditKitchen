import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-advertiser-disclosure',
  templateUrl: './advertiser-disclosure.component.html',
  styleUrls: ['./advertiser-disclosure.component.scss']
})
export class AdvertiserDisclosureComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdvertiserDisclosureComponent>) { }

  ngOnInit() {
  }

}
