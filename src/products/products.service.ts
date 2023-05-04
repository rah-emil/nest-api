import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private products = [];

  getAll() {
    return this.products;
  }

  find(id: number) {
    return this.products.find((product) => product.id === id);
  }

  create(product: CreateProductDto): string {
    this.products.push({
      id: Date.now().toString(),
      ...product,
    });

    return `Create: ${product.title} - $${product.price}`;
  }
}
