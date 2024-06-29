import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../../components/card/card.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { StoreService } from '../../services/store.service';
import { Product } from '../../interfaces/product.interface';
import { Category } from '../../interfaces/category.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    MatCardModule,
    CardComponent,
    SearchBoxComponent,
    CommonModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProductPageComponent implements OnInit, OnChanges {
  @ViewChild('scrollableDiv')
  public tagInput!: ElementRef<HTMLInputElement>;

  @Input()
  public id?: string;
  objectKeys = Object.keys;
  groupedProducts: any = {
    '0-50': [],
    '51-100': [],
    '>100': [],
  };

  groupedProductsRate: any = {
    '1-2': [],
    '2-3': [],
    '3-4': [],
    '4-5': [],
  };

  uniqueRates: number[] = [];
  private _products = signal<Product[]>([]);
  private _categories = signal<Category[]>([]);

  public searchQuery = signal<string>('');
  public searchPrice = signal<string>('');
  public searchRate = signal<string>('');

  public products = computed(() => {
    const query = this.searchQuery().toLowerCase();
    let filteredProducts: Product[] = this._products();

    if (query) {
      filteredProducts = this._products().filter((p) =>
        p.name.toLowerCase().trim().includes(query)
      );
    }
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
    if (this.searchRate() === '1-2') {
      filteredProducts = filteredProducts.filter(
        (p) => p.rate >= 1 && p.rate <= 2
      );
    } else if (this.searchRate() === '2-3') {
      filteredProducts = filteredProducts.filter(
        (p) => p.rate >= 2 && p.rate <= 3
      );
    } else if (this.searchRate() === '3-4') {
      filteredProducts = filteredProducts.filter(
        (p) => p.rate >= 3 && p.rate <= 4
      );
    } else if (this.searchRate() === '4-5') {
      filteredProducts = filteredProducts.filter(
        (p) => p.rate >= 4 && p.rate <= 5
      );
    }
    return filteredProducts;
  });

  public categories = computed(() => this._categories());

  constructor(
    private storeService: StoreService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.uniqueRates = [
      ...new Set(this.products().map((product) => product.rate)),
    ];
    // this.getProducts();
    this.getCategories();
    this._route.queryParams.subscribe((query) => {
      if (query['query']) {
        this.updateSearchQuery(query['query']);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ id: this.id });
    const id = changes['id'];
    if (id) {
      this.getProducts();
    }
  }

  addToCart(product: Product) {
    this.storeService.addToCart(product);
  }

  updateSearchPrice(price: string) {
    this.searchPrice.set(price);
  }

  updateSearchRate(rate: string) {
    this.searchRate.set(rate);
  }

  updateSearchQuery(query: string) {
    this.searchQuery.set(query);
    this.getAllProducts();
  }

  private _page: number = 0;
  private _limit: number = 10;
  getProducts() {
    if (!this.id) {
      this.storeService
        .getMoreProducts(this._page, this._limit)
        .subscribe((products) => {
          this._products.update((prev) => [...prev, ...products]);
        });
      this._page++;
      console.log(this.tagInput);
      if (this.tagInput) {
        this.tagInput.nativeElement.scrollBy(0, 700);
      }
      return;
    }
    this.storeService.getProductsByCategory(this.id).subscribe((products) => {
      this._products.set(products);
    });
  }

  getAllProducts() {
    this.storeService.getAllProducts().subscribe((products) => {
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
