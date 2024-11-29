import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    CoreModule,
  ],
})
export class ProductsModule {}
