import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Store } from '@prisma/client';

@Injectable()
export class StoreService {
  constructor(private prisma: PrismaService) {}
  async create(createStoreDto: CreateStoreDto): Promise<Store> {
    try {
      const newStore = await this.prisma.store.create({
        data: {
          name: createStoreDto.name,
        },
      });
      return newStore;
    } catch (error) {
      throw new ConflictException('This name already Exist,Try Again!');
    }
  }

  async findAll(): Promise<Store[]> {
    try {
      const stores = await this.prisma.store.findMany();
      return stores;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findOne(id: string): Promise<Store> {
    try {
      const store = await this.prisma.store.findUnique({
        where: {
          id,
        },
      });

      if (!store)
        throw new NotFoundException(`Store with id: ${id} not found!`);

      return store;
    } catch (error) {
      throw new NotFoundException(`Store with id: ${id} not found!`);
    }
  }

  async update(id: string, updateStoreDto: UpdateStoreDto): Promise<Store> {
    try {
      const store = await this.prisma.store.update({
        where: {
          id,
        },
        data: {
          name: updateStoreDto.name,
        },
      });
      return store;
    } catch (error) {
      throw new NotFoundException(`Store with id: ${id} not found!`);
    }
  }

  async remove(id: string): Promise<string> {
    try {
      await this.prisma.store.delete({
        where: {
          id,
        },
      });
      return `Store with id: ${id} deleted Success`;
    } catch (error) {
      throw new NotFoundException(`Store with id: ${id} not found!`);
    }
  }
}
