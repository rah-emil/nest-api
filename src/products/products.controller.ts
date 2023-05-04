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
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  get(): Promise<Product[]> {
    return this.productService.get();
  }

  @Get(':id')
  show(@Param('id') id: string): Promise<Product> {
    return this.productService.find(id);
  }

  @Post()
  store(@Body() product: CreateProductDto): Promise<Product> {
    return this.productService.store(product);
  }

  @Put(':id')
  update(
    @Body() product: UpdateProductDto,
    @Param('id') id: string,
  ): Promise<Product> {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  destroy(@Param('id') id: string): Promise<Product> {
    return this.productService.destroy(id);
  }
}
