import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  computed,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { StoreService } from '../../services/store.service';
import { Category } from '../../interfaces/category.interface';
import { RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css',
})
export class CategoryPageComponent implements OnInit {
  private _products = signal<Product[]>([]);
  private _categories = signal<Category[]>([]);

  public products = computed(() => this._products());
  public categories = computed(() => this._categories());

  @Input()
  public id?: string;
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.storeService.getAllCategories().subscribe((categories) => {
      this._categories.set(categories);
    });
  }
}
