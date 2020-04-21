import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { HomeComponent } from './home/home.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { DeliveryPendingComponent } from './delivery-pending/delivery-pending.component';



const routes: Routes = [{ path: '', component: HomeComponent },
                        { path: 'driver', component: DeliveryListComponent },
                        { path: 'admin', component: AdminViewComponent },
                        { path: 'deliveries/:deliveryId', component: DeliveryDetailsComponent },
                         { path: 'deliveries/:deliveryId', component: DeliveryDetailsComponent },
                         { path: 'pending/:deliveryId', component: DeliveryPendingComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
