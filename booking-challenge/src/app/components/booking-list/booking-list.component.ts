import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BookingModalComponent } from '../booking-modal/booking-modal.component';
import { Booking } from '../interfaces';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  myBookings:any;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.getMyBookings();
  }
  goTo(route:string) {
    this.router.navigate([route]);
  }
  getMyBookings(){
    this.myBookings = localStorage.getItem("myBookings");
    this.myBookings = JSON.parse(this.myBookings);
  }
  openDialog(bookingInfo:Booking): void {
    this.dialog.open(BookingModalComponent, {
      maxWidth: '700px',
      width: '90%',
      data: bookingInfo,
    });
  }
}
