import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { deliveries } from '../deliveries';

@Component({
  selector: 'app-delivery-pending',
  templateUrl: './delivery-pending.component.html',
  styleUrls: ['./delivery-pending.component.css']
})
export class DeliveryPendingComponent implements OnInit {
  delivery;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.delivery = deliveries[+params.get('deliveryId')];
  });
  }
  confirmDelivery(delivery) {
    delivery.status='done';
    window.alert('La entrega ha sido marcada como pendiente!');
}}



