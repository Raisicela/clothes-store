import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop({ required: true, minlength: 3, maxlength: 50 })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: Number, required: true, min: 0 })
  price: number;

  @Prop({ type: String, required: true })
  currency: string;

  @Prop({ type: String, required: true })
  image: string;

  @Prop({ type: Number, required: true, min: 0 })
  stock: number;

  @Prop({ type: Number, required: true, min: 0, max: 5 })
  rate: number;

  @Prop({ required: true, minlength: 3, maxlength: 50 })
  categoryId: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
