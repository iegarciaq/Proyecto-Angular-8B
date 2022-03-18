import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { OverviewProductsComponent } from './pages/overview-products/overview-products.component';
import { TableComponent } from './components/table/table.component';
import { MaterialComponentsModule } from '../material-components.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    OverviewProductsComponent,
    TableComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialComponentsModule, 
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
