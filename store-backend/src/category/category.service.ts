import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MemoryStoredFile } from 'nestjs-form-data';
import { Model } from 'mongoose';
import * as fs from 'fs';

import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Product } from 'src/products/entities/product.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<Category>,

    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    const image = this.saveImageAndGetUrl(createCategoryDto.imageFile);
    return this.categoryModel.create({ ...createCategoryDto, image });
  }

  findAll() {
    return this.categoryModel.find();
  }

  findOne(id: string) {
    return this.categoryModel.findById(id);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    if (updateCategoryDto.imageFile) {
      const image = this.saveImageAndGetUrl(updateCategoryDto.imageFile);
      return this.categoryModel.updateOne(
        { _id: id },
        { ...updateCategoryDto, image },
      );
    }
    return this.categoryModel.updateOne({ _id: id }, updateCategoryDto);
  }

  remove(id: string) {
    return this.categoryModel.deleteOne({ _id: id });
  }

  findProductsByCategoryId(id: string) {
    return this.productModel.find({ categoryId: id });
  }

  private saveImageAndGetUrl(file: MemoryStoredFile) {
    const fileName = `${Date.now()}.${file.originalName.split('.')[1]}`;
    const path = `./public/images/${fileName}`;
    fs.writeFileSync(path, file.buffer);
    return `http://localhost:3000/images/${fileName}`;
  }
}
