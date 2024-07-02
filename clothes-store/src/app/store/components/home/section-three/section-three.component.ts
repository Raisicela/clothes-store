import { Component, computed, signal } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { Product } from '../../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../../services/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'store-home-section-three',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.css',
})
export class SectionThreeComponent {
  private _products = signal<Product[]>([]);

  public products = computed(() => {
    let filteredProducts: Product[] = this._products();

    filteredProducts = this._products().sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return filteredProducts.slice(0, 10);
  });

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.storeService.getAllProducts().subscribe((products) => {
      this._products.set(products);
    });
  }

  addToCart(product: Product) {
    this.storeService.addToCart(product);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Product added to cart',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
