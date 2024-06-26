import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prismaService';

@Injectable()
class AvaliationRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AvaliationCreateInput) {
    const avaliation = await this.prisma.avaliation.create({ data });
    return avaliation;
  }

  async findAll() {
    const avaliations = await this.prisma.avaliation.findMany();
    return avaliations;
  }

  async findOne(where: Prisma.AvaliationWhereUniqueInput) {
    const avaliation = await this.prisma.avaliation.findUnique({ where });
    return avaliation;
  }

  async findByEvaluatedId(evaluatedId: string) {
    const avaliations = await this.prisma.avaliation.findMany({
      where: { evaluatedId },
      include: {
        evaluator: true,
        evaluated: true,
      },
    });
    return avaliations;
  }

  async findByEvaluatorIdAndEvaluatedId(
    evaluatorId: string,
    evaluatedId: string,
  ) {
    const avaliation = await this.prisma.avaliation.findFirst({
      where: {
        evaluatorId,
        evaluatedId,
      },
    });
    return avaliation;
  }

  async findByAvaliationType(avaliationType: string) {
    const avaliations = await this.prisma.avaliation.findMany({
      where: { avaliationType },
      include: {
        evaluator: true,
        evaluated: true,
      },
    });
    return avaliations;
  }

  async findAvaliationByUserAssignmentId(userAssignmentId: string) {
    const avaliation = await this.prisma.avaliation.findMany({
      where: { userAssignmentId },
    });
    return avaliation;
  }

  async update(id: string, data: Prisma.AvaliationUpdateInput) {
    const avaliation = await this.prisma.avaliation.update({
      where: { id },
      data,
    });
    return avaliation;
  }

  async remove(where: Prisma.AvaliationWhereUniqueInput) {
    const avaliation = await this.prisma.avaliation.delete({ where });
    return avaliation;
  }
}

export default new AvaliationRepository(new PrismaService());
