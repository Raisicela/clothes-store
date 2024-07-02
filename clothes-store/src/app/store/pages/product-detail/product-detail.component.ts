import { Component, Input, OnInit, computed, signal } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../../components/rating/rating.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RatingComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  @Input()
  public id?: string;

  private _product = signal<Product | null>(null);

  public product = computed(() => this._product());

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    if (this.id) {
      this.storeService.getProductById(this.id).subscribe({
        next: (product) => {
          this._product.set(product);
        },
      });
    }
  }

  addToCartHandler() {
    this.storeService.addToCart(this.product()!);
  }
}
