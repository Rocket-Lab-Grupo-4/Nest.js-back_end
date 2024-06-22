import { Injectable } from '@nestjs/common';
import {
  CreateUserAssignmentDto,
  UpdateUserAssignmentDto,
} from './user-assignment.DTO';
import UserAssignmentRepository from './user-assignment.repositories';
import userRepositories from '../user/user.repositories';
import AssignmentRepository from '../assignment/assignment.repositories';

@Injectable()
export class UserAssignmentService {
  async create(CreateUserAssignmentDto: CreateUserAssignmentDto) {
    try {
      const userExists = await userRepositories.findOne({
        id: CreateUserAssignmentDto.userId,
      });

      if (!userExists) {
        throw new Error('User not found');
      }

      const assignmentExists = await AssignmentRepository.findOne({
        id: CreateUserAssignmentDto.assignmentId,
      });

      if (!assignmentExists) {
        throw new Error('Assignment not found');
      }

      const assignment = await UserAssignmentRepository.create({
        user: { connect: { id: CreateUserAssignmentDto.userId } },
        assignment: { connect: { id: CreateUserAssignmentDto.assignmentId } },
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
      return await UserAssignmentRepository.findMany();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      return await UserAssignmentRepository.findOne(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByUser(userId: string) {
    try {
      const userExists = await userRepositories.findOne({
        id: userId,
      });

      if (!userExists) {
        throw new Error('User not found');
      }

      const userAssignment = await UserAssignmentRepository.findByUser(userId);

      if (!userAssignment) {
        throw new Error('User assignment not found');
      }

      return userAssignment;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByAssignment(assignmentId: string) {
    try {
      const assignmentExists = await AssignmentRepository.findOne({
        id: assignmentId,
      });

      if (!assignmentExists) {
        throw new Error('Assignment not found');
      }

      const userAssignment =
        await UserAssignmentRepository.findByAssignment(assignmentId);

      if (!userAssignment) {
        throw new Error('User assignment not found');
      }

      return userAssignment;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, data: UpdateUserAssignmentDto) {
    try {
      return await UserAssignmentRepository.update(id, {
        user: { connect: { id: data.userId } },
        assignment: { connect: { id: data.assignmentId } },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string) {
    try {
      return await UserAssignmentRepository.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
