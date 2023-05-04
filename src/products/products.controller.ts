import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  show(@Param('id') id: number): string {
    return this.productService.find(id);
  }

  @Post()
  store(@Body() product: CreateProductDto): string {
    return this.productService.create(product);
  }

  @Put(':id')
  update(@Body() product: UpdateProductDto, @Param('id') id: number): string {
    return `Update ${id}: ${product.title} - $${product.price}`;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return `Delete: ${id}`;
  }
}
