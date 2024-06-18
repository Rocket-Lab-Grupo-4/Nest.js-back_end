import { Injectable } from '@nestjs/common';
import { CreateAnswersDto, UpdateAnswerDto } from './answer.DTO';
import AnswerRepository from './answer.repositories';
import AvaliationRepository from '../avaliation/avaliation.repositories';
import UserRepository from '../user/user.repositories';

@Injectable()
export class AnswerService {
  async createMany(createAnswersDto: CreateAnswersDto) {
    const { answers } = createAnswersDto;

    if (answers.length === 0) {
      throw new Error('No answers provided');
    }

    const evaluatorId = answers[0].evaluatorId;
    const evaluatedId = answers[0].evaluatedId;

    const evaluatorExists = await UserRepository.findOne({ id: evaluatorId });
    const evaluatedExists = await UserRepository.findOne({ id: evaluatedId });

    if (!evaluatorExists || !evaluatedExists) {
      throw new Error('Evaluator or evaluated user not found');
    }

    // // Verificar se já existe uma Avaliation entre os mesmos evaluator e evaluated
    let avaliation = await AvaliationRepository.findByEvaluatorIdAndEvaluatedId(
      evaluatorId,
      evaluatedId,
    );

    const avaliationType =
      evaluatedId === evaluatorId ? 'autoAvaliation' : 'avaliationByManager';

    // // Se não existir, criar uma nova Avaliation
    if (avaliation === null) {
      avaliation = await AvaliationRepository.create({
        avaliationType: avaliationType.toLocaleLowerCase(),
        evaluator: { connect: { id: evaluatorId } },
        evaluated: { connect: { id: evaluatedId } },
      });
    }

    // Criar as Answers
    const answerData = answers.map((answer) => ({
      answer: answer.answer,
      justificative: answer.justificative,
      avaliationId: avaliation.id,
      questionId: answer.questionId,
    }));

    const createdAnswers = await AnswerRepository.createMany(answerData);

    return createdAnswers;
  }

  async findAll() {
    try {
      const answers = await AnswerRepository.findAll();

      if (!answers) {
        throw new Error('No answers found');
      }

      return answers;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      const answer = await AnswerRepository.findOne({ id });

      if (!answer) {
        throw new Error('Answer not found');
      }

      return answer;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, answerData: UpdateAnswerDto) {
    try {
      const answer = await AnswerRepository.findOne({ id });

      if (!answer) {
        throw new Error('Answer not found');
      }

      const updatedAnswer = await AnswerRepository.update(id, answerData);

      return updatedAnswer;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string) {
    try {
      const answer = await AnswerRepository.findOne({ id });

      if (!answer) {
        throw new Error('Answer not found');
      }

      const deletedAnswer = await AnswerRepository.remove({ id });

      return deletedAnswer;
    } catch (error) {
      throw new Error(error);
    }
  }
}
