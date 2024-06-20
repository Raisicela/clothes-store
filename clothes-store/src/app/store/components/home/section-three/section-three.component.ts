import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { Product } from '../../../interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'store-home-section-three',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.css',
})
export class SectionThreeComponent {
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
      categoryId: '6672509a02983040465ab308',
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
  ];
}
