import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prismaService';

@Injectable()
class AnswerRepository {
  constructor(private prisma: PrismaService) {}

  async createMany(data: Prisma.AnswerCreateManyInput[]) {
    const answers = await this.prisma.answer.createMany({
      data,
    });
    return answers;
  }

  async createAvaliation(data: Prisma.AvaliationCreateInput) {
    const avaliation = await this.prisma.avaliation.create({
      data,
    });
    return avaliation;
  }

  async findAvaliation(evaluatorId: string, evaluatedId: string) {
    return this.prisma.avaliation.findFirst({
      where: {
        evaluatorId,
        evaluatedId,
      },
    });
  }

  async findAll() {
    const answers = await this.prisma.answer.findMany();
    return answers;
  }

  async findOne(where: Prisma.AnswerWhereUniqueInput) {
    const answer = await this.prisma.answer.findUnique({ where });
    return answer;
  }

  async update(id: string, data: Prisma.AnswerUpdateInput) {
    const answer = await this.prisma.answer.update({
      where: { id },
      data,
    });
    return answer;
  }

  async remove(where: Prisma.AnswerWhereUniqueInput) {
    const answer = await this.prisma.answer.delete({ where });
    return answer;
  }
}

export default new AnswerRepository(new PrismaService());
