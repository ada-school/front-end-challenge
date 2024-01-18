import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  myBookings:any;
  constructor(
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getMyBookings();
  }
  goToHome() {
    this.router.navigate(['']);
  }
  getMyBookings(){
    this.myBookings = localStorage.getItem("myBookings");
    this.myBookings = JSON.parse(this.myBookings);
    console.log(this.myBookings);
  }
}
