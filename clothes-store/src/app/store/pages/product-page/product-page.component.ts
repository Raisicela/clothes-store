import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [MatCardModule, CardComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {}
