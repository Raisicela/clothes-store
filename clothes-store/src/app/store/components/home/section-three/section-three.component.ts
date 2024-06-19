import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'store-home-section-three',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.css',
})
export class SectionThreeComponent {}
