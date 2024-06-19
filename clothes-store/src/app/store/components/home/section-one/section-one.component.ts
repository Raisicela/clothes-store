import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'store-home-section-one',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    CommonModule,
  ],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.css',
})
export class SectionOneComponent {
  public mensaje: string = 'Discover the product for you!';
}
