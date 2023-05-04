import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<ProductDocument>,
  ) {}

  async get(): Promise<Product[]> {
    return this.ProductModel.find().exec();
  }

  async find(id: string): Promise<Product> {
    return this.ProductModel.findById(id);
  }

  async store(product: CreateProductDto): Promise<Product> {
    const newProduct = new this.ProductModel(product);
    return newProduct.save();
  }

  async update(id: string, product: UpdateProductDto): Promise<Product> {
    return this.ProductModel.findByIdAndUpdate(id, product);
  }

  async destroy(id: string) {
    return this.ProductModel.findByIdAndDelete(id);
  }
}
