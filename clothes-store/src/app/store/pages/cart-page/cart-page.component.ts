import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RatingComponent } from '../../components/rating/rating.component';
import { MatIconModule } from '@angular/material/icon';
import { StoreService } from '../../services/store.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RatingComponent,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CartPageComponent {
  public order = this.storeService.order;
  public cart = this.storeService.cart;

  constructor(private storeService: StoreService) {}

  increaseBy(value: number, productId: string): void {
    this.storeService.increaseProductQuantity(value, productId);
  }
  deleteProduct(productId: string) {
    this.storeService.deleteFromCart(productId);
  }
}
