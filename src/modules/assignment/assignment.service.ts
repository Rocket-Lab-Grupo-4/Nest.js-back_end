import { Injectable } from '@nestjs/common';
import { AssignmetAnswerDto, UpdateAssignmentDto } from './assignment.DTO';
import AssignmentRepository from './assignment.repositories';
import userRepositories from '../user/user.repositories';
import userAssignmentRepositories from '../user-assignment/user-assignment.repositories';
@Injectable()
export class AssignmentService {
  async create(createAssignment: AssignmetAnswerDto) {
    try {
      const createAssignmentWithformatDate = {
        ...createAssignment,
        dataAnswered: new Date(createAssignment.dataAnswered),
        dateConcluded: new Date(createAssignment.dateConcluded),
      };

      const assignment = await AssignmentRepository.create(
        createAssignmentWithformatDate,
      );

      if (!assignment) {
        throw new Error('Error creating assignment');
      }

      // create assignment for all users
      const users = await userRepositories.findAll();

      const userAssignments = users.map((user) => ({
        media: null,
        status: false,
        userId: user.id,
        assignmentId: assignment.id,
      }));

      const userAssignment =
        await userAssignmentRepositories.createMany(userAssignments);

      if (!userAssignment) {
        throw new Error('Error creating user assignment');
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
