import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'store-rating',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent implements OnChanges {
  @Input()
  public rating: number | undefined;
  public fullStars: number[] = [];
  public halfStar: boolean = false;
  public emptyStars: number[] = [];

  ngOnInit() {
    this.calculateStars();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateStars();
  }

  calculateStars() {
    const totalStars = 5;
    const fullStarsCount = Math.floor(this.rating!);
    this.halfStar = this.rating! % 1 >= 0.5;
    const emptyStarsCount =
      totalStars - fullStarsCount - (this.halfStar ? 1 : 0);

    this.fullStars = Array(fullStarsCount).fill(0);
    this.emptyStars = Array(emptyStarsCount).fill(0);
  }
}
