import { Component } from '@angular/core';
import { RegisterComponent } from '../../../auth/pages/register/register.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RegisterComponent, MatCardModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
