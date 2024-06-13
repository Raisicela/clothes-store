import { Component } from '@angular/core';
import { LoginComponent } from '../../pages/login/login.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [LoginComponent, NavbarComponent, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styles: '',
})
export class AuthLayoutComponent {}
