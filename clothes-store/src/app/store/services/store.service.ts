import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category.interface';
import { environment } from '../../../environment/ennvironment';

interface Order {
  subtotal: number;
  iva: number;
  total: number;
  userId?: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly baseUrl: string = environment.baseUrl;
  private tax: number = 0.15;

  public cart = signal<CartItem[]>([]);

  public order = computed<Order>(() => {
    const subtotal = this.cart().reduce(
      (subtotal, cart) => subtotal + cart.product.price * cart.quantity,
      0
    );
    const iva = subtotal * this.tax;
    const total = subtotal + iva;
    return {
      subtotal,
      iva,
      total,
    };
  });

  public countItems = computed<number>(() => {
    const count = this.cart().reduce(
      (count, cart) => (count += cart.quantity),
      0
    );
    return count;
  });

  constructor(private http: HttpClient) {
    if (!window.localStorage.getItem('cart')) return;

    this.cart.set(JSON.parse(window.localStorage.getItem('cart')!));
  }

  getAllProducts(): Observable<Product[]> {
    const url: string = `${this.baseUrl}/products`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Product[]>(url, { headers });
  }

  getMoreProducts(page: number, limit: number): Observable<Product[]> {
    const url: string = `${this.baseUrl}/products/pagination?page=${page}&limit=${limit}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Product[]>(url, { headers });
  }

  getProductsByCategory(id?: string) {
    const url: string = `${this.baseUrl}/category/${id}/products`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Product[]>(url, { headers });
  }

  getProductById(id?: string) {
    const url: string = `${this.baseUrl}/products/${id}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Product>(url, { headers });
  }

  getAllCategories(): Observable<Category[]> {
    const url: string = `${this.baseUrl}/category`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Category[]>(url, { headers });
  }

  addToCart(product: Product) {
    this.cart.update((state) => {
      const cartItemIndex = state.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );
      if (cartItemIndex >= 0) {
        return state;
      }
      return [
        ...state,
        {
          product: product,
          quantity: 1,
        },
      ];
    });
    this.saveCart(this.cart());
  }

  deleteFromCart(productId: string) {
    this.cart.update((state) => {
      const newCart = state.filter(
        (cartItem) => cartItem.product._id !== productId
      );
      return newCart;
    });
    this.saveCart(this.cart());
  }

  increaseProductQuantity(value: number, productId: string): void {
    this.cart.update((prev) => {
      const cartItemIndex = prev.findIndex(
        (cartItem) => cartItem.product._id === productId
      );

      prev[cartItemIndex].quantity += value;
      if (prev[cartItemIndex].quantity === 0) {
        prev[cartItemIndex].quantity = 1;
      }
      return [...prev];
    });
    this.saveCart(this.cart());
  }

  saveCart(cart: CartItem[]) {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }
}
