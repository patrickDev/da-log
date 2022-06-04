import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generateTrackingNumber(){
    const trackingNumber = (pr = "AUS", su = "DD") => {
      for(let i=0; i<5; i++) pr += ~~(Math.random() * 10);
      return pr + su;
    };
    
    console.log(trackingNumber()); 
    console.log(trackingNumber());
    console.log(trackingNumber());
    console.log(trackingNumber());
    
    // Example changing prefix and suffix:
    console.log(trackingNumber("ZA001", "PD"));
  }
}
