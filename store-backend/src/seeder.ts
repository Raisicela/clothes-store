import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSeeder } from './auth/seeders/user.seeder';
import { User, UserSchema } from './auth/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { Category, CategorySchema } from './category/entities/category.entity';
import { Product, ProductSchema } from './products/entities/product.entity';
import { ProductsSeeder } from './products/seeders/products.seeder';

seeder({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
}).run([UsersSeeder, ProductsSeeder]);
