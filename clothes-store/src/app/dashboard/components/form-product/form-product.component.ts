import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DashboardService } from '../../services/dashboard.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css',
})
export class FormProductComponent {
  public categories = this._dashboardService.categories;
  public imageUrl: string = '';
  public isNew: boolean = true;
  public file?: File;

  constructor(
    private fb: FormBuilder,
    private _dashboardService: DashboardService,
    private _route: ActivatedRoute,
    private _location: Location
  ) {
    // this._route.paramMap.subscribe((paramMap) => {
    //   console.log(paramMap.get('id'));
    // });
    this._route.paramMap
      .pipe(
        switchMap((paramMap) =>
          this._dashboardService.getProductById(paramMap.get('id')!)
        )
      )
      .subscribe((product) => {
        console.log(product);
        if (product._id) {
          this.isNew = false;
        }
        this.imageUrl = product.image;
        this.myForm.setValue({
          _id: product._id,
          name: product.name,
          description: product.description,
          price: product.price,
          currency: product.currency,
          stock: product.stock,
          categoryId: product.categoryId,
          avatar: product.image,
        });
      });
  }

  public myForm: FormGroup = this.fb.group(
    {
      _id: [''],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      currency: ['', [Validators.required]],
      avatar: [''],
      stock: ['', [Validators.required, Validators.min(0)]],
      categoryId: ['', [Validators.required]],
    },
    {
      validators: [
        (formGroup: AbstractControl): ValidationErrors | null => {
          const fieldValue1 = formGroup.get('avatar')?.value;

          if (this.isNew && !fieldValue1) {
            return { missingFile: true };
          }
          return null;
        },
      ],
    }
  );

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  updateImage(event: any) {
    const file: File = event.target.files[0];
    this.file = file;

    if (file) {
      this.imageUrl = file.name;

      const reader = new FileReader();
      reader.onload = (e) => (this.imageUrl = reader.result as string);

      reader.readAsDataURL(file);
    }
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAsTouched();
      return;
    }
    console.log('Guardar', this.myForm.value);
    if (this.isNew) {
      this._dashboardService.addProduct(this.myForm.value, this.file);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product has been created',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      this._dashboardService.updateProductById(this.myForm.value, this.file);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product has been updated',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    this.return();
  }

  return() {
    this._location.back();
  }
}
