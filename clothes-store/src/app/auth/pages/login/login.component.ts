import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Component, computed, effect } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthRoles } from '../../interfaces/auth-roles.enum';

@Component({
  selector: 'auth-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styles: `
  span, button, mat-label, input, mat-card-title{
    font-family: 'Montserrat';
    font-size: 14px
  }
  `,
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  public hide = true;

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  login() {
    const { email, password } = this.myForm.value;
    this.authService.login(email, password).subscribe({
      next: () => {
        if (this.authService.authRol() === AuthRoles.admin) {
          this.router.navigateByUrl('/dashboard/categories');
        }
        this.router.navigateByUrl('/store/home');
      },
      error: (message) => {
        Swal.fire('Error', message, 'error');
      },
    });
  }
}
