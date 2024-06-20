import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css',
})
export class CategoryPageComponent {
  public categories = [
    {
      _id: '6672509a02983040465ab2fa',
      name: 'Sneakers',
      description: 'The best sneakers in the world',
      image:
        'https://i.pinimg.com/736x/d8/7f/8a/d87f8a6ea783926f8cb51366ab8eb36e.jpg',
      createdAt: '2024-06-19T03:29:30.600Z',
      __v: 0,
    },
    {
      _id: '6672509a02983040465ab308',
      name: 'Beachwear',
      description: 'The best beachwear in the world',
      image:
        'https://static.vecteezy.com/system/resources/previews/002/182/877/non_2x/young-people-in-summer-clothes-at-the-beach-the-concept-of-beach-parties-advertising-banner-poster-postcard-flyer-flat-cartoon-illustration-vector.jpg',
      createdAt: '2024-06-19T03:29:30.627Z',
      __v: 0,
    },
    {
      _id: '66725339751c06598e3d67ba',
      name: 'Televisores',
      description: 'Los mejores TV',
      image: 'http://localhost:3000/images/1718768441497.jpg',
      createdAt: '2024-06-19T03:40:41.506Z',
      __v: 0,
    },
  ];
}
