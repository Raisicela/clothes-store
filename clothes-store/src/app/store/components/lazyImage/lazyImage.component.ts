import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'product-lazy-image',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './lazyImage.component.html',
  styles: `
  picture {
  display: block;
  position: relative;
  padding-top: 75%;
}

img {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

img:hover {
  opacity: 0.5;
}
  `,
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
