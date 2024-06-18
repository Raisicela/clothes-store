import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-store-layout',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './srtore-layout.component.html',
  styles: ``,
})
export class StoreLayoutComponent {}
