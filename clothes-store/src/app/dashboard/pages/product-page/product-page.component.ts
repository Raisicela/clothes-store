import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LazyImageComponent } from '../../../store/components/lazyImage/lazyImage.component';
import { RatingComponent } from '../../../store/components/rating/rating.component';
import { Router, RouterModule } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    LazyImageComponent,
    RatingComponent,
    RouterModule,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  public products = this._dashboardService.products;

  constructor(private _dashboardService: DashboardService) {}

  deleteProduct(id: string) {
    Swal.fire({
      title: 'Do you want to delete this product?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this._dashboardService.deleteProductById(id);
        Swal.fire('The product was successfully removed!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('The product was not removed', '', 'info');
      }
    });
  }
}
