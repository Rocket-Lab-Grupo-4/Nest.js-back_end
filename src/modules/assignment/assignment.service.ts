import { Injectable } from '@nestjs/common';
import { AssignmetAnswerDto, UpdateAssignmentDto } from './assignment.DTO';
import AssignmentRepository from './assignment.repositories';
import userRepositories from '../user/user.repositories';
import userAssignmentRepositories from '../user-assignment/user-assignment.repositories';
@Injectable()
export class AssignmentService {
  async create(createAssignment: AssignmetAnswerDto) {
    try {
      const assignment = await AssignmentRepository.create(createAssignment);

      if (!assignment) {
        throw new Error('Error creating assignment');
      }

      const users = await userRepositories.findAll();

      const userAssignments = users.map((user) => ({
        userId: user.id,
        assignmentId: assignment.id,
      }));

      const assignmentWithUser =
        await userAssignmentRepositories.createMany(userAssignments);

      if (!assignmentWithUser) {
        throw new Error('Error creating user assignments');
      }

      return assignment;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAll() {
    try {
      const assignments = await AssignmentRepository.findAll();

      return assignments;
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string) {
    try {
      const assignment = await AssignmentRepository.findOne({ id });

      if (!assignment) {
        throw new Error('Assignment not found');
      }

      return assignment;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, assignmentData: UpdateAssignmentDto) {
    try {
      const assignment = await AssignmentRepository.findOne({ id });

      if (!assignment) {
        throw new Error('Assignment not found');
      }

      const updatedAssignment = await AssignmentRepository.update(
        id,
        assignmentData,
      );

      return updatedAssignment;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      const assignment = await AssignmentRepository.findOne({ id });

      if (!assignment) {
        throw new Error('Assignment not found');
      }

      const deletedAssignment = await AssignmentRepository.remove({ id });

      return deletedAssignment;
    } catch (error) {
      console.log(error);
    }
  }
}
