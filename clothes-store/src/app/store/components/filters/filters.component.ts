import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  SimpleChanges,
  computed,
  signal,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { StoreService } from '../../services/store.service';
import { Product } from '../../interfaces/product.interface';
import { Category } from '../../interfaces/category.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'store-filters',
  standalone: true,
  imports: [MatButton, CommonModule, MatListModule, RouterModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  objectKeys = Object.keys;
  groupedProducts: any = {
    '0-50': [],
    '51-100': [],
    '>100': [],
  };

  uniqueRates: number[] = [];
  private _products = signal<Product[]>([]);
  private _categories = signal<Category[]>([]);

  public searchQuery = signal<string>('');
  public searchPrice = signal<string>('');

  public products = computed(() => {
    const query = this.searchQuery().toLowerCase();
    let filteredProducts: Product[] = this._products();
    if (this.searchPrice() === '0-50') {
      filteredProducts = filteredProducts.filter(
        (p) => p.price >= 0 && p.price <= 50
      );
    } else if (this.searchPrice() === '51-100') {
      filteredProducts = filteredProducts.filter(
        (p) => p.price >= 51 && p.price <= 100
      );
    } else if (this.searchPrice() === '>100') {
      filteredProducts = filteredProducts.filter((p) => p.price > 100);
    }
    return filteredProducts;
  });

  public categories = computed(() => this._categories());

  @Input()
  public id?: string;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.uniqueRates = [
      ...new Set(this.products().map((product) => product.rate)),
    ];
    this.getProducts();
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ id: this.id });
    const id = changes['id'];
    if (id) {
      this.getProducts();
    }
  }

  updateSearchPrice(price: string) {
    this.searchPrice.set(price);
  }

  getProducts() {
    if (!this.id) {
      this.storeService.getAllProducts().subscribe((products) => {
        this._products.set(products);
      });
      return;
    }
    this.storeService.getProductsByCategory(this.id).subscribe((products) => {
      this._products.set(products);
    });
  }

  getCategories() {
    this.storeService.getAllCategories().subscribe((categories) => {
      this._categories.set(categories);
    });
  }

  groupProductsByPrice() {
    this.products().forEach((product) => {
      if (product.price >= 0 && product.price <= 50) {
        this.groupedProducts['0-50'].push(product);
      } else if (product.price > 50 && product.price <= 100) {
        this.groupedProducts['50-100'].push(product);
      }
    });
  }
}
