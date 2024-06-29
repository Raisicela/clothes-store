import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  computed,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from '../../search-box/search-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Product } from '../../../interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'store-home-section-one',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SearchBoxComponent],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.css',
})
export class SectionOneComponent {
  constructor(private _router: Router) {}

  public mensaje: string = 'Discover the product for you!';
  // @Output()
  // public searchQueryHome = new EventEmitter()

  search(query: string) {
    console.log(query);
    this._router.navigateByUrl(`/store/products?query=${query}`);
  }
}
