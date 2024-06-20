import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from '../../search-box/search-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'store-home-section-one',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SearchBoxComponent],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.css',
})
export class SectionOneComponent {
  public mensaje: string = 'Discover the product for you!';
}
