import { Injectable } from '@nestjs/common';
import QuestionRepository from './question.repositories';
import { CreateQuestionDto, UpdateUserDto } from './question.DTO';

@Injectable()
export class QuestionService {
  async create(CreateQuestionDto: CreateQuestionDto) {
    try {
      const question = await QuestionRepository.create(CreateQuestionDto);

      if (!question) {
        return 'Error creating question';
      }

      return question;
    } catch (error) {
      return `${error} Error creating question`;
    }
  }

  async findAll() {
    try {
      const questions = await QuestionRepository.findAll();

      if (!questions) {
        return 'No questions found';
      }

      return questions;
    } catch (error) {
      return `${error} Error finding questions`;
    }
  }

  async findOne(id: string) {
    try {
      const question = await QuestionRepository.findOne({ id });

      if (!question) {
        return 'No question found';
      }

      return question;
    } catch (error) {
      return `${error} Error finding question`;
    }
  }

  async update(id: string, data: UpdateUserDto) {
    try {
      const question = await QuestionRepository.update(id, data);

      if (!question) {
        return 'Error updating question';
      }

      return question;
    } catch (error) {
      return `${error} Error updating question`;
    }
  }

  async remove(id: string) {
    try {
      const question = await QuestionRepository.remove({ id });

      if (!question) {
        return 'Error deleting question';
      }

      return question;
    } catch (error) {
      return `${error} Error deleting question`;
    }
  }
}
