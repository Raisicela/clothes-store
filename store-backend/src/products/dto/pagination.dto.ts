import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumberString } from 'class-validator';

export class PaginationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  page: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  limit: string;
}
