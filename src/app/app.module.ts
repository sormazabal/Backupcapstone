import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { HomeComponent } from './home/home.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

import { DeliveryPendingComponent } from './delivery-pending/delivery-pending.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DeliveryListComponent,
    DeliveryDetailsComponent,
    HomeComponent,
    AdminViewComponent,
    
    DeliveryPendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
