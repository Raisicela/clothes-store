import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'store-home-section-two',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './section-two.component.html',
  styleUrl: './section-two.component.css',
})
export class SectionTwoComponent {}
