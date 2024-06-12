import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDTO, UpdateQuestionDTO } from './questions.dto';

@Injectable()
export class QuestionsService {
    private readonly questions = [];


    create(createQuestionDto: CreateQuestionDTO) {
      const newQuestion = { id: this.questions.length + 1, ...createQuestionDto };
      this.questions.push(newQuestion);
      return newQuestion;
    }
    
    findAll() {
      return this.questions;
    }

    findOne(id:number) {
      const question = this.questions.find(q => q.id === id);

      if (!question) {
        throw new NotFoundException('Pergunta não encontrada')
      }

      return question

    }

    update(id:number, updateQuestionDto: UpdateQuestionDTO) {
      const questionIndex = this.questions.findIndex(q => q.id === id);
        if (questionIndex === -1) {
            throw new NotFoundException('Pergunta não encontrada');
        }
        this.questions[questionIndex] = { ...this.questions[questionIndex], ...updateQuestionDto };
        return this.questions[questionIndex];
    }

    remove(id: number) {
      const questionIndex = this.questions.findIndex(q => q.id === id);
        if (questionIndex === -1) {
            throw new NotFoundException('Pergunta não encontrada');
        }
        const deletedQuestion = this.questions.splice(questionIndex, 1);
        return deletedQuestion[0];
    }
}