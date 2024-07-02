import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit, computed, signal } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { Category } from '../../store/interfaces/category.interface';
import { Product } from '../../store/interfaces/product.interface';
import { environment } from '../../../environment/ennvironment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly baseUrl: string = environment.baseUrl;

  private _products = signal<Product[]>([]);
  private _categories = signal<Category[]>([]);

  public products = computed(() => this._products());
  public categories = computed(() => this._categories());

  constructor(private http: HttpClient) {
    this.getAllProducts().subscribe((products) => {
      this._products.set(products);
    });

    this.getAllCategories().subscribe((categories) => {
      this._categories.set(categories);
    });
  }

  getAllProducts(): Observable<Product[]> {
    const url: string = `${this.baseUrl}/products`;
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

  updateProductById(product: Product, file?: File): void {
    const url: string = `${this.baseUrl}/products/${product._id}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price.toString());
    formData.append('currency', product.currency);
    formData.append('stock', product.stock.toString());
    formData.append('categoryId', product.categoryId);

    if (file) {
      formData.append('avatar', file, file.name);
    }

    this.http
      .patch<Product>(url, formData, { headers })
      .pipe(switchMap(() => this.getAllProducts()))
      .subscribe((products) => this._products.set(products));
  }

  addProduct(product: Product, file?: File): void {
    const url: string = `${this.baseUrl}/products`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price.toString());
    formData.append('currency', product.currency);
    formData.append('stock', product.stock.toString());
    formData.append('categoryId', product.categoryId);
    formData.append('rate', '5');

    if (file) {
      formData.append('avatar', file, file.name);
    }

    this.http
      .post<Product>(url, formData, { headers })
      .pipe(switchMap(() => this.getAllProducts()))
      .subscribe((products) => this._products.set(products));
  }

  deleteProductById(id?: string) {
    const url: string = `${this.baseUrl}/products/${id}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http
      .delete(url, { headers })
      .pipe(
        catchError((err) => of(err)),
        switchMap(() => this.getAllProducts())
      )
      .subscribe((products) => this._products.set(products));
  }

  getAllCategories(): Observable<Category[]> {
    const url: string = `${this.baseUrl}/category`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Category[]>(url, { headers });
  }

  getCategoryById(id?: string) {
    const url: string = `${this.baseUrl}/category/${id}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Product>(url, { headers });
  }

  updateCategoryById(category: Category, file?: File): void {
    const url: string = `${this.baseUrl}/category/${category._id}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const formData = new FormData();
    formData.append('name', category.name);
    formData.append('description', category.description);

    if (file) {
      formData.append('imageFile', file, file.name);
    }

    this.http
      .patch<Category>(url, formData, { headers })
      .pipe(switchMap(() => this.getAllCategories()))
      .subscribe((categories) => this._categories.set(categories));
  }

  addCategory(category: Category, file?: File): void {
    const url: string = `${this.baseUrl}/category`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const formData = new FormData();
    formData.append('name', category.name);
    formData.append('description', category.description);

    if (file) {
      formData.append('imageFile', file, file.name);
    }

    this.http
      .post<Category>(url, formData, { headers })
      .pipe(switchMap(() => this.getAllCategories()))
      .subscribe((categories) => this._categories.set(categories));
  }

  deleteCategoryById(id?: string) {
    const url: string = `${this.baseUrl}/category/${id}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http
      .delete(url, { headers })
      .pipe(
        catchError((err) => of(err)),
        switchMap(() => this.getAllCategories())
      )
      .subscribe((categories) => this._categories.set(categories));
  }
}
