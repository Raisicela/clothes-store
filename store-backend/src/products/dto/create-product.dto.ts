import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsString,
  MinLength,
  IsNumber,
  Min,
  Max,
  IsNotEmpty,
  IsNumberString,
} from 'class-validator';
import {
  HasMimeType,
  IsFile,
  MaxFileSize,
  MemoryStoredFile,
} from 'nestjs-form-data';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNumberString({})
  // @Min(0)
  price: number;

  @ApiProperty()
  @IsString()
  @MinLength(3)
  currency: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  @IsFile()
  @MaxFileSize(1e6)
  @HasMimeType(['image/jpeg', 'image/png'])
  avatar: MemoryStoredFile;

  @ApiProperty()
  @Transform((value) => parseFloat(value.value), { toClassOnly: true })
  @IsNumber()
  // @Min(0)
  stock: number;

  @ApiProperty()
  @Transform((value) => parseFloat(value.value), { toClassOnly: true })
  @IsNumber({}, { message: 'El campo rate debe ser un string numérico' })
  // @IsDecimal({}, { message: 'El campo rate debe ser un número decimal' })
  @Min(0, { message: 'El campo rate debe ser mayor o igual a 0' })
  @Max(5, { message: 'El campo rate debe ser menor o igual a 5' })
  rate: string;

  @ApiProperty()
  @IsString()
  categoryId: string;

  createdAt?: Date;
}
