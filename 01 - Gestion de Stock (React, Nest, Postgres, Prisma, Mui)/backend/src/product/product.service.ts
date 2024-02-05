import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const newProduct = await this.prisma.product.create({
        data: {
          name: createProductDto.name.trim(),
          prix: createProductDto.price,
        },
      });
      return newProduct;
    } catch (error) {
      throw new ConflictException('This name already Exist,Try Again!');
    }
  }

  async findAll(): Promise<Product[]> {
    try {
      const products = await this.prisma.product.findMany();
      return products;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findOne(id: string): Promise<Product> {
    try {
      const product = await this.prisma.product.findUnique({
        where: {
          id,
        },
      });

      if (!product)
        throw new NotFoundException(`Product with id: ${id} not found!`);

      return product;
    } catch (error) {
      throw new NotFoundException(`Product with id: ${id} not found!`);
    }
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    try {
      const product = await this.prisma.product.update({
        where: {
          id,
        },
        data: {
          name: updateProductDto.name,
          prix: updateProductDto.price,
        },
      });
      return product;
    } catch (error) {
      throw new NotFoundException(`Product with id: ${id} not found!`);
    }
  }

  async remove(id: string): Promise<string> {
    try {
      await this.prisma.product.delete({
        where: {
          id,
        },
      });
      return `Product with id: ${id} deleted Success`;
    } catch (error) {
      throw new NotFoundException(`Product with id: ${id} not found!`);
    }
  }
}
