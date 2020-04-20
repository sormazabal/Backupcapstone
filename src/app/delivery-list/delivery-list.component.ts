import { Component, OnInit } from '@angular/core';
import { deliveries } from '../deliveries';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {
  deliveries = deliveries;
  constructor() { }

  ngOnInit() {
  }

}
