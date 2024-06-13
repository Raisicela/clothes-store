import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcryptjs from 'bcryptjs';
import { Category } from 'src/category/entities/category.entity';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsSeeder implements Seeder {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<Category>,

    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async seed(): Promise<any> {
    const categories = [
      {
        name: 'Sneakers',
        description: 'The best sneakers in the world',
        products: [
          {
            name: 'Nike Air Max',
            description: 'The best sneakers in the world',
            price: 100,
            currency: 'USD',
            image:
              'https://static.nike.com/a/images/t_default/fba909b5-4406-4eef-bde0-ba558bb77956/calzado-air-max-90-2ZsM2w.png',
            stock: 10,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Adidas Superstar',
            description: 'The best sneakers in the world',
            price: 80,
            currency: 'USD',
            image:
              'https://assets.adidas.com/images/w_1880,f_auto,q_auto/2ff0016f6bf443b2b41bbe6c7c022e2f_9366/IE8249_01_standard.jpg',
            stock: 10,
            rate: 4,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Converse All Star',
            description: 'The best sneakers in the world',
            price: 70.45,
            currency: 'USD',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iLCIr6CvnqQ5UyfHGi2yS83jduR1rjwnMg&s',
            stock: 10,
            rate: 3,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Vans Old Skool',
            description: 'The best sneakers in the world',
            price: 90.34,
            currency: 'USD',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLurpdyy2ckwFN5skomB8TzXXn0o0N7QWJQ&s',
            stock: 10,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Puma Suede',
            description: 'The best sneakers in the world',
            price: 75.6,
            currency: 'USD',
            image:
              'https://www.blockstore.cl/cdn/shop/products/p-37491501-5_1800x.jpg?v=1644925614',
            stock: 10,
            rate: 4,
            createdAt: new Date().setDate(new Date().getDate() - 1),
          },
          {
            name: 'Reebok Classic',
            description: 'The best sneakers in the world',
            price: 85.34,
            currency: 'USD',
            image: 'https://i.ebayimg.com/images/g/M30AAOSwVApiWH6~/s-l500.jpg',
            stock: 10,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 1),
          },
        ],
      },
      {
        name: 'Beachwear',
        description: 'The best beachwear in the world',
        products: [
          {
            name: 'Swimsuit',
            description: 'The best swimsuit in the world',
            price: 50,
            currency: 'USD',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn2y2L-QAcuyWPD1wbaSJ9yEywZvMn6wIag&s',
            stock: 10,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Sunglasses',
            description: 'The best sunglasses in the world',
            price: 30,
            currency: 'USD',
            image:
              'https://m.media-amazon.com/images/I/51OQ3sPBAsL._AC_UY1100_.jpg',
            stock: 10,
            rate: 4,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Hat',
            description: 'The best hat in the world',
            price: 25,
            currency: 'USD',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Zz6F2wG1n6Y7Zuq8R5eO3b5jV8Z5R0d8tQ&s',
            stock: 10,
            rate: 3,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Flip-flops',
            description: 'The best flip-flops in the world',
            price: 20,
            currency: 'USD',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9d2fK5XZ2Ug2JU9t2JZmz4X5b7QJ9RJ8z1w&s',
            stock: 10,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 100),
          },
          {
            name: 'Beach towel',
            description: 'The best beach towel in the world',
            price: 15,
            currency: 'USD',
            image:
              'https://m.media-amazon.com/images/I/81T-W+2GShL._AC_UY1100_.jpg',
            stock: 10,
            rate: 4,
            createdAt: new Date().setDate(new Date().getDate() - 1),
          },
          {
            name: 'Beach bag',
            description: 'The best beach bag in the world',
            price: 35,
            currency: 'USD',
            image:
              'https://m.media-amazon.com/images/I/81QxbDXeTtL._AC_SL1500_.jpg',
            stock: 10,
            rate: 5,
            createdAt: new Date().setDate(new Date().getDate() - 1),
          },
        ],
      },
    ];

    const currentCategories = await this.categoryModel.find();
    if (currentCategories.length > 0) {
      return;
    }
    for (const category of categories) {
      const newCate = await this.categoryModel.create(category);
      for (const product of category.products) {
        await this.productModel.create({
          ...product,
          categoryId: newCate._id,
        });
      }
    }
  }

  async drop(): Promise<any> {
    await this.productModel.deleteMany({});
    await this.categoryModel.deleteMany({});
    return;
  }
}
