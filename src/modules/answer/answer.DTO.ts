import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateAnswerDto {
  @ApiProperty({
    description: 'Id do avaliador',
    example: 'clx9wto3v0000ay3zcxeddxto',
  })
  evaluatorId: string;

  @ApiProperty({
    description: 'Id do avaliado',
    example: 'clx9wto3v0000ay3zcxeddxto',
  })
  evaluatedId: string;

  @ApiProperty({
    description: 'Id da pergunta',
    example: 'clxjtx5qd000082sbc4z005cc',
  })
  questionId: string;

  @ApiProperty({
    description: 'Resposta',
    example: '5',
  })
  answer: number;

  @ApiProperty({
    description: 'Justificativa',
    example: 'Justificativa',
  })
  justificative: string;
}

export class CreateAnswersDto {
  @ApiProperty({ type: [CreateAnswerDto] })
  answers: CreateAnswerDto[];
}

export class UpdateAnswerDto extends PartialType(CreateAnswerDto) {}
