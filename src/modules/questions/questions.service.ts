import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDTO, UpdateQuestionDTO } from './questions.dto';

@Injectable()
export class QuestionsService {
  private readonly questions = [];

  create(createQuestionDto: CreateQuestionDTO) {
    this.questions.push(createQuestionDto);
    return 'Question saved successfully';
  }

  findAll() {
    return this.questions;
  }

  findOne(id: number) {
    const question = this.questions.find(q => q.id === id);
    if (!question) {
      throw new NotFoundException('Question not found');
    }
    return question;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDTO) {
    const questionIndex = this.questions.findIndex(q => q.id === id);
    if (questionIndex === -1) {
      throw new NotFoundException('Question not found');
    }
    this.questions[questionIndex] = { ...this.questions[questionIndex], ...updateQuestionDto };
    return 'Question updated successfully';
  }

  remove(id: number) {
    const questionIndex = this.questions.findIndex(q => q.id === id);
    if (questionIndex === -1) {
      throw new NotFoundException('Question not found');
    }
    this.questions.splice(questionIndex, 1);
    return 'Question removed successfully';
  }
}