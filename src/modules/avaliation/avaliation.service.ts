import { Injectable } from '@nestjs/common';
import AvaliationRepository from './avaliation.repositories';
import { CreateAvaliationDto } from './avaliation.DTO';

@Injectable()
export class AvaliationService {
  async create(
    evaluatorId: string,
    evaluatedId: string,
    createAvaliationDto: CreateAvaliationDto,
  ) {
    try {
      const createAvaliationDtoWithlowerCaseType = {
        ...createAvaliationDto,
        avaliationType: createAvaliationDto.avaliationType.toLowerCase(),
      };

      const avaliation = await AvaliationRepository.create({
        ...createAvaliationDtoWithlowerCaseType,
        evaluator: { connect: { id: evaluatorId } },
        evaluated: { connect: { id: evaluatedId } },
        UserAssignment: {
          connect: { id: createAvaliationDto.userAssignmentId },
        },
      });

      if (!avaliation) {
        return 'Error creating avaliation';
      }

      return avaliation;
    } catch (error) {
      return `${error} Error creating avaliation ${evaluatorId} ${evaluatedId}`;
    }
  }

  async findAll() {
    try {
      const avaliations = await AvaliationRepository.findAll();

      if (!avaliations) {
        return 'No avaliations found';
      }

      return avaliations;
    } catch (error) {
      return `${error} Error finding avaliations`;
    }
  }

  async findOne(id: string) {
    try {
      const avaliation = await AvaliationRepository.findOne({ id });

      if (!avaliation) {
        return 'No avaliation found';
      }

      return avaliation;
    } catch (error) {
      return `${error} Error finding avaliation`;
    }
  }

  async findByEvaluatedId(evaluatedId: string) {
    try {
      const avaliations =
        await AvaliationRepository.findByEvaluatedId(evaluatedId);

      if (!avaliations) {
        return 'No avaliations found';
      }

      return avaliations;
    } catch (error) {
      return `${error} Error finding avaliations`;
    }
  }

  async findByAvaliationType(avaliationType: string) {
    try {
      const typeLower = avaliationType.toLowerCase();

      const avaliations =
        await AvaliationRepository.findByAvaliationType(typeLower);

      if (!avaliations) {
        return 'No avaliations found';
      }

      return avaliations;
    } catch (error) {
      return `${error} Error finding avaliations`;
    }
  }

  async update(id: string, data: CreateAvaliationDto) {
    try {
      const avaliationExists = await AvaliationRepository.findOne({ id });

      if (!avaliationExists) {
        return 'Avaliation not found';
      }

      const avaliation = await AvaliationRepository.update(id, data);

      if (!avaliation) {
        return 'Error updating avaliation';
      }

      return avaliation;
    } catch (error) {
      return `${error} Error updating avaliation`;
    }
  }

  async remove(id: string) {
    try {
      const avaliationExists = await AvaliationRepository.findOne({ id });

      if (!avaliationExists) {
        return 'Avaliation not found';
      }

      const avaliation = await AvaliationRepository.remove({ id });

      if (!avaliation) {
        return 'Avaliation not found';
      }

      return 'Avaliation deleted';
    } catch (error) {
      return `${error} Error deleting avaliation`;
    }
  }
}
