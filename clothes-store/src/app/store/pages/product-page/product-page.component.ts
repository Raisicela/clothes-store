import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../../components/card/card.component';
import { Product } from '../../interfaces/product.interface';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    MatCardModule,
    CardComponent,
    SearchBoxComponent,
    CommonModule,
    RouterModule,
    MatListModule,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  objectKeys = Object.keys;
  groupedProducts: any = {
    '0-50': [],
    '50-100': [],
  };

  uniqueRates: number[] = [];

  ngOnInit() {
    this.uniqueRates = [
      ...new Set(this.products.map((product) => product.rate)),
    ];
  }

  groupProductsByPrice() {
    this.products.forEach((product) => {
      if (product.price >= 0 && product.price <= 50) {
        this.groupedProducts['0-50'].push(product);
      } else if (product.price > 50 && product.price <= 100) {
        this.groupedProducts['50-100'].push(product);
      }
    });
  }

  public products: Product[] = [
    {
      _id: '6672509a02983040465ab2fc',
      name: 'Nike Air Max',
      description: 'The best sneakers in the world',
      price: 100,
      currency: 'USD',
      image:
        'https://static.nike.com/a/images/t_default/fba909b5-4406-4eef-bde0-ba558bb77956/calzado-air-max-90-2ZsM2w.png',
      stock: 10,
      rate: 5,
      categoryId: '6672509a02983040465ab2fa',
      createdAt: '2024-03-11T03:29:30.597Z',
      __v: 0,
    },
    {
      _id: '6672509a02983040465ab2fe',
      name: 'Adidas Superstar',
      description: 'The best sneakers in the world',
      price: 80,
      currency: 'USD',
      image:
        'https://assets.adidas.com/images/w_1880,f_auto,q_auto/2ff0016f6bf443b2b41bbe6c7c022e2f_9366/IE8249_01_standard.jpg',
      stock: 10,
      rate: 4,
      categoryId: '6672509a02983040465ab2fa',
      createdAt: '2024-03-11T03:29:30.597Z',
      __v: 0,
    },
    {
      _id: '6672509a02983040465ab300',
      name: 'Converse All Star',
      description: 'The best sneakers in the world',
      price: 70.45,
      currency: 'USD',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iLCIr6CvnqQ5UyfHGi2yS83jduR1rjwnMg&s',
      stock: 10,
      rate: 3,
      categoryId: '6672509a02983040465ab2fa',
      createdAt: '2024-03-11T03:29:30.597Z',
      __v: 0,
    },
    {
      _id: '6672509a02983040465ab302',
      name: 'Vans Old Skool',
      description: 'The best sneakers in the world',
      price: 90.34,
      currency: 'USD',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLurpdyy2ckwFN5skomB8TzXXn0o0N7QWJQ&s',
      stock: 10,
      rate: 5,
      categoryId: '6672509a02983040465ab2fa',
      createdAt: '2024-03-11T03:29:30.597Z',
      __v: 0,
    },
    {
      _id: '6672509a02983040465ab304',
      name: 'Puma Suede',
      description: 'The best sneakers in the world',
      price: 75.6,
      currency: 'USD',
      image:
        'https://www.blockstore.cl/cdn/shop/products/p-37491501-5_1800x.jpg?v=1644925614',
      stock: 10,
      rate: 4,
      categoryId: '6672509a02983040465ab2fa',
      createdAt: '2024-06-18T03:29:30.597Z',
      __v: 0,
    },
    {
      _id: '6672509a02983040465ab306',
      name: 'Reebok Classic',
      description: 'The best sneakers in the world',
      price: 85.34,
      currency: 'USD',
      image: 'https://i.ebayimg.com/images/g/M30AAOSwVApiWH6~/s-l500.jpg',
      stock: 10,
      rate: 5,
      categoryId: '6672509a02983040465ab2fa',
      createdAt: '2024-06-18T03:29:30.597Z',
      __v: 0,
    },
    {
      _id: '6672509a02983040465ab30a',
      name: 'Swimsuit',
      description: 'The best swimsuit in the world',
      price: 50,
      currency: 'USD',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn2y2L-QAcuyWPD1wbaSJ9yEywZvMn6wIag&s',
      stock: 10,
      rate: 5,
      categoryId: '6672509a02983040465ab308',
      createdAt: '2024-03-11T03:29:30.597Z',
      __v: 0,
    },
    {
      _id: '6672509a02983040465ab30c',
      name: 'Sunglasses',
      description: 'The best sunglasses in the world',
      price: 30,
      currency: 'USD',
      image: 'https://m.media-amazon.com/images/I/51OQ3sPBAsL._AC_UY1100_.jpg',
      stock: 10,
      rate: 4,
      categoryId: '6672509a02983040465ab308',
      createdAt: '2024-03-11T03:29:30.597Z',
      __v: 0,
    },
    {
      _id: '6672509a02983040465ab30e',
      name: 'Hat',
      description: 'The best hat in the world',
      price: 25,
      currency: 'USD',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Zz6F2wG1n6Y7Zuq8R5eO3b5jV8Z5R0d8tQ&s',
      stock: 10,
      rate: 3,
      categoryId: '6672509a02983040465ab308',
      createdAt: '2024-03-11T03:29:30.597Z',
      __v: 0,
    },
    {
      _id: '6672509a02983040465ab310',
      name: 'Flip-flops',
      description: 'The best flip-flops in the world',
      price: 20,
      currency: 'USD',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9d2fK5XZ2Ug2JU9t2JZmz4X5b7QJ9RJ8z1w&s',
      stock: 10,
      rate: 5,
      categoryId: '6672509a02983040465ab308',
      createdAt: '2024-03-11T03:29:30.597Z',
      __v: 0,
    },
    {
      _id: '6672509a02983040465ab312',
      name: 'Beach towel',
      description: 'The best beach towel in the world',
      price: 15,
      currency: 'USD',
      image: 'https://m.media-amazon.com/images/I/81T-W+2GShL._AC_UY1100_.jpg',
      stock: 10,
      rate: 4,
      categoryId: '6672509a02983040465ab308',
      createdAt: '2024-06-18T03:29:30.597Z',
      __v: 0,
    },
    {
      _id: '6672509a02983040465ab314',
      name: 'Beach bag',
      description: 'The best beach bag in the world',
      price: 35,
      currency: 'USD',
      image: 'https://m.media-amazon.com/images/I/81QxbDXeTtL._AC_SL1500_.jpg',
      stock: 10,
      rate: 5,
      categoryId: '6672509a02983040465ab308',
      createdAt: '2024-06-18T03:29:30.597Z',
      __v: 0,
    },
  ];

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
