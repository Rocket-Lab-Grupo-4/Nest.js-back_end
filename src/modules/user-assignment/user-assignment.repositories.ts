import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prismaService';

@Injectable()
class UserAssignmentRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserAssignmentCreateInput) {
    try {
      const assignment = await this.prisma.userAssignment.create({
        data,
      });

      if (!assignment) {
        throw new Error('Assignment not created');
      }

      return assignment;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findMany() {
    try {
      return await this.prisma.userAssignment.findMany();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.userAssignment.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByUser(userId: string) {
    try {
      return await this.prisma.userAssignment.findMany({
        where: {
          userId,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByAssignment(assignmentId: string) {
    try {
      return await this.prisma.userAssignment.findMany({
        where: {
          assignmentId,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, data: Prisma.UserAssignmentUpdateInput) {
    try {
      return await this.prisma.userAssignment.update({
        where: {
          id,
        },
        data,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string) {
    try {
      return await this.prisma.userAssignment.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new UserAssignmentRepository(new PrismaService());
