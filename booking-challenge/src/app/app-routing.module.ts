import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewBookingComponent } from './components/new-booking/new-booking.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-booking', component: NewBookingComponent},
  {path: 'booking-list', component: BookingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
