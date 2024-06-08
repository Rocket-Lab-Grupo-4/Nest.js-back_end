import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prismaService';

@Injectable()
class UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    const user = await this.prisma.user.create({ data });
    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(where: Prisma.UserWhereUniqueInput) {
    const user = await this.prisma.user.findUnique({ where });
    return user;
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    const user = await this.prisma.user.update({ where: { id }, data });
    return user;
  }

  async remove(where: Prisma.UserWhereUniqueInput) {
    const user = await this.prisma.user.delete({ where });
    return user;
  }
}

export default new UserRepository(new PrismaService());
