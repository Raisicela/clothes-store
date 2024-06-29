import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Category {
  @Prop({ required: true, minlength: 3, maxlength: 50 })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: String, required: true })
  image: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
