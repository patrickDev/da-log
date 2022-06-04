import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }
  ship(){
    this.shippingForm;
  }
}
