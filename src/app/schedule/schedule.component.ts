import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  dateOfPickup:Date;
  pickUpAddress: string;
  phoneNumber:number;
  name:string; 
  
  constructor() { }

  ngOnInit() {
  }

}
