import { Component } from '@angular/core';
import { RegisterComponent } from '../../../auth/pages/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SectionOneComponent } from '../../components/home/section-one/section-one.component';
import { SectionTwoComponent } from '../../components/home/section-two/section-two.component';
import { SectionThreeComponent } from '../../components/home/section-three/section-three.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RegisterComponent,
    MatCardModule,
    MatButtonModule,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
