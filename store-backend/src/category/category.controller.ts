import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { AdminAuthGuard } from 'src/auth/guards/admin-auth.guard';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'Create category' })
  @ApiBody({ type: CreateCategoryDto })
  @ApiBearerAuth()
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Get all categories' })
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Get category by id' })
  @ApiQuery({ name: 'id', type: 'string' })
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'Get all products by category id' })
  @ApiQuery({ name: 'id', type: 'string' })
  @ApiBearerAuth()
  @Get(':id/products')
  findProductsByCategoryId(@Param('id') id: string) {
    return this.categoryService.findProductsByCategoryId(id);
  }

  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'Update category' })
  @ApiQuery({ name: 'id', type: 'string' })
  @ApiBody({ type: UpdateCategoryDto })
  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @UseGuards(AdminAuthGuard)
  @ApiOperation({ summary: 'Delete category' })
  @ApiQuery({ name: 'id', type: 'string' })
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
