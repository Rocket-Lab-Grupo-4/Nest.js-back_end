import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prismaService';

@Injectable()
class QuestionRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.QuestionCreateInput) {
    const question = await this.prisma.question.create({ data });
    return question;
  }

  async findAll() {
    const questions = await this.prisma.question.findMany();
    return questions;
  }

  async findOne(where: Prisma.QuestionWhereUniqueInput) {
    const question = await this.prisma.question.findUnique({ where });
    return question;
  }

  async update(id: string, data: Prisma.QuestionUpdateInput) {
    const question = await this.prisma.question.update({
      where: { id },
      data,
    });
    return question;
  }

  async remove(where: Prisma.QuestionWhereUniqueInput) {
    const question = await this.prisma.question.delete({ where });
    return question;
  }
}

export default new QuestionRepository(new PrismaService());
