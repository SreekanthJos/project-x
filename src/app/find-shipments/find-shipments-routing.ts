import { Routes } from '@angular/router';
import { ShipmentsComponent } from './shipments/shipments.component';

export const FindShipmentsRoutes: Routes = [
    { path:'' , redirectTo:'shipments', pathMatch:'full' },
    { path:'shipments', component: ShipmentsComponent }
]