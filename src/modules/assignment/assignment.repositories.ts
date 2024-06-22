import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prismaService';

@Injectable()
class AssignmentRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AssignmentCreateInput) {
    const assignment = await this.prisma.assignment.create({
      data,
    });
    return assignment;
  }

  async findAll() {
    const assignments = await this.prisma.assignment.findMany();
    return assignments;
  }

  async findOne(where: Prisma.AssignmentWhereUniqueInput) {
    const assignment = await this.prisma.assignment.findUnique({ where });
    return assignment;
  }

  async update(id: string, data: Prisma.AssignmentUpdateInput) {
    const assignment = await this.prisma.assignment.update({
      where: { id },
      data,
    });
    return assignment;
  }

  async remove(where: Prisma.AssignmentWhereUniqueInput) {
    const assignment = await this.prisma.assignment.delete({ where });
    return assignment;
  }
}

export default new AssignmentRepository(new PrismaService());
