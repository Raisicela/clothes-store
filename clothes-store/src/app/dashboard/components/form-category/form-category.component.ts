import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Category } from '../../../store/interfaces/category.interface';
import { switchMap } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './form-category.component.html',
  styleUrl: './form-category.component.css',
})
export class FormCategoryComponent {
  public category?: Category;
  public imageUrl: string = '';
  public isNew: boolean = true;
  public file?: File;

  constructor(
    private fb: FormBuilder,
    private _location: Location,
    private _route: ActivatedRoute,
    private _dashboardService: DashboardService
  ) {
    this._route.paramMap
      .pipe(
        switchMap((paramMap) =>
          this._dashboardService.getCategoryById(paramMap.get('id')!)
        )
      )
      .subscribe((category) => {
        if (category._id) {
          this.isNew = false;
        }
        this.imageUrl = category.image;
        this.myForm.setValue({
          name: category.name,
          description: category.description,
          imageFile: category.image,
        });
      });
  }

  public myForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageFile: [undefined, [Validators.required]],
    },
    {
      validators: [
        (formGroup: AbstractControl): ValidationErrors | null => {
          const fieldValue1 = formGroup.get('imageFile')?.value;

          if (this.isNew && !fieldValue1) {
            return { missingFile: true };
          }
          return null;
        },
      ],
    }
  );

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
    if (this.isNew) {
      this._dashboardService.addCategory(this.myForm.value, this.file);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product has been created',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      this._dashboardService.updateCategoryById(this.myForm.value, this.file);
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
