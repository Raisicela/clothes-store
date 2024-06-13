import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import * as fs from 'fs';
import { MemoryStoredFile } from 'nestjs-form-data';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const image = this.saveImageAndGetUrl(createProductDto.avatar);
    return this.productModel.create({ ...createProductDto, image });
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: string) {
    return this.productModel.findById(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    if (updateProductDto.avatar) {
      const image = this.saveImageAndGetUrl(updateProductDto.avatar);
      return this.productModel.updateOne(
        { _id: id },
        { ...updateProductDto, image },
      );
    } else {
      return this.productModel.updateOne({ _id: id }, updateProductDto);
    }
  }

  remove(id: string) {
    return this.productModel.deleteOne({ _id: id });
  }

  saveImageAndGetUrl(file: MemoryStoredFile) {
    const fileName = `${Date.now()}.${file.originalName.split('.')[1]}`;
    const path = `./public/images/${fileName}`;
    fs.writeFileSync(path, file.buffer);
    return `http://localhost:3000/images/${fileName}`;
  }
}
