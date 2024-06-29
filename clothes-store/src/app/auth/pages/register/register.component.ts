import { Component, computed, effect } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from '../../interfaces';
import Swal from 'sweetalert2';
import { ValidatorsService } from '../../services/validators.service';
import { CommonModule } from '@angular/common';
import { AuthRoles } from '../../interfaces/auth-roles.enum';

@Component({
  selector: 'auth-register',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styles: `
  span, button, mat-label, input, mat-card-title{
    font-family: 'Montserrat';
    font-size: 14px
  }
  `,
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private validatorsService: ValidatorsService,
    private router: Router
  ) {}
  public hide = true;

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        this.validatorsService.cantBeAdmin,
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  logUp() {
    const { email, name, password } = this.myForm.value;
    this.authService.logup(email, name, password).subscribe({
      next: () => this.router.navigateByUrl('/store/home'),
      error: (message) => {
        Swal.fire('Error', message, 'error');
      },
    });
  }
}
