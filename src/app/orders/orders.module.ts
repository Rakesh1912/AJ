import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { HighlightDirective } from '../highlight.directive';
@NgModule({
  declarations: [
    OrderListComponent,
    HighlightDirective,
  ],
  
  imports: [
    CommonModule,
    OrdersRoutingModule,
    
  ]
})
export class OrdersModule { }
