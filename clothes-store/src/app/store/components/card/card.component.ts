import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from '../../pages/product-page/product-page.component';
import { RatingComponent } from '../rating/rating.component';
import { LazyImageComponent } from '../lazyImage/lazyImage.component';
import { RouterModule } from '@angular/router';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    ProductPageComponent,
    RatingComponent,
    LazyImageComponent,
    RouterModule,
    TimeAgoPipe,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  public cloth!: Product;

  @Output()
  public addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.cloth);
  }
}
